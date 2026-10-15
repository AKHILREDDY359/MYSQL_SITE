import { getSupabaseClient, isSupabaseConfigured } from './supabaseClient.js';
import { getCurrentAuthUser, getActiveProfile } from './authService.js';
import { loadFromStorage, saveToStorage, STORAGE_KEYS } from '../utils/storage.js';

// Get storage key scoped to current profile/account
export function getScopedStorageKey(baseKey) {
  const profile = getActiveProfile();
  const safeProfile = (typeof profile === 'string' && profile.trim().length > 0) ? profile.trim() : 'guest';
  return `${baseKey}_${safeProfile.toLowerCase()}`;
}

/**
 * Loads progress for the active account/profile.
 * Checks scoped key first, falls back to legacy unscoped key so existing progress is preserved.
 */
export function getAccountProgress() {
  const scopedKey = getScopedStorageKey(STORAGE_KEYS.PROGRESS);
  const scopedData = loadFromStorage(scopedKey, null);
  if (scopedData !== null) {
    return scopedData;
  }
  // Fallback to legacy progress key
  const legacyData = loadFromStorage(STORAGE_KEYS.PROGRESS, {});
  // Migrate into scoped key
  if (Object.keys(legacyData).length > 0) {
    saveToStorage(scopedKey, legacyData);
  }
  return legacyData;
}

export function saveAccountProgress(progressMap) {
  const scopedKey = getScopedStorageKey(STORAGE_KEYS.PROGRESS);
  saveToStorage(scopedKey, progressMap);
  // Also sync to legacy for backward compatibility
  saveToStorage(STORAGE_KEYS.PROGRESS, progressMap);

  // Trigger cloud sync in background if Supabase is connected
  syncProgressToCloud(progressMap).catch((err) => {
    console.warn('Background cloud progress sync notice:', err.message);
  });
}

export function getAccountDrafts() {
  const scopedKey = getScopedStorageKey(STORAGE_KEYS.DRAFTS);
  const scopedData = loadFromStorage(scopedKey, null);
  if (scopedData !== null) return scopedData;
  const legacyData = loadFromStorage(STORAGE_KEYS.DRAFTS, {});
  if (Object.keys(legacyData).length > 0) {
    saveToStorage(scopedKey, legacyData);
  }
  return legacyData;
}

export function saveAccountDrafts(draftsMap) {
  const scopedKey = getScopedStorageKey(STORAGE_KEYS.DRAFTS);
  saveToStorage(scopedKey, draftsMap);
  saveToStorage(STORAGE_KEYS.DRAFTS, draftsMap);
}

export function getAccountBookmarks() {
  const scopedKey = getScopedStorageKey(STORAGE_KEYS.BOOKMARKS);
  const scopedData = loadFromStorage(scopedKey, null);
  if (scopedData !== null) return scopedData;
  const legacyData = loadFromStorage(STORAGE_KEYS.BOOKMARKS, []);
  if (legacyData.length > 0) {
    saveToStorage(scopedKey, legacyData);
  }
  return legacyData;
}

export function saveAccountBookmarks(bookmarksList) {
  const scopedKey = getScopedStorageKey(STORAGE_KEYS.BOOKMARKS);
  saveToStorage(scopedKey, bookmarksList);
  saveToStorage(STORAGE_KEYS.BOOKMARKS, bookmarksList);
}

/**
 * Uploads local progress to Supabase cloud table `user_progress`.
 */
export async function syncProgressToCloud(progressMap) {
  const supabase = getSupabaseClient();
  if (!supabase) return { synced: false, reason: 'Supabase not configured' };

  const user = await getCurrentAuthUser();
  if (!user) return { synced: false, reason: 'No cloud user signed in' };

  const drafts = getAccountDrafts();
  const bookmarks = getAccountBookmarks();

  const recordsToUpsert = Object.entries(progressMap).map(([qidStr, item]) => {
    const qid = parseInt(qidStr, 10);
    return {
      user_id: user.id,
      question_id: qid,
      status: item.status || 'not_started',
      draft_sql: drafts[qid] || null,
      attempts_count: item.attempts || 0,
      is_bookmarked: bookmarks.includes(qid),
      updated_at: new Date().toISOString()
    };
  });

  if (recordsToUpsert.length === 0) {
    return { synced: true, count: 0 };
  }

  const { error } = await supabase
    .from('user_progress')
    .upsert(recordsToUpsert, { onConflict: 'user_id,question_id' });

  if (error) {
    console.warn('Failed to sync progress to Supabase:', error.message);
    throw error;
  }

  return { synced: true, count: recordsToUpsert.length };
}

/**
 * Downloads cloud progress from Supabase and merges into the active account.
 */
export async function fetchProgressFromCloud() {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) return null;

    const user = await getCurrentAuthUser();
    if (!user) return null;

    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', user.id);

    if (error) {
      console.warn('Failed to fetch cloud progress:', error.message);
      return null;
    }

  if (!data || data.length === 0) {
    // If cloud is empty, sync current local progress up to cloud
    const localProg = getAccountProgress();
    if (Object.keys(localProg).length > 0) {
      await syncProgressToCloud(localProg);
    }
    return localProg;
  }

  // Merge cloud data into local progress & drafts & bookmarks
  const progressMap = getAccountProgress();
  const draftsMap = getAccountDrafts();
  const bookmarksList = [...getAccountBookmarks()];

  data.forEach((row) => {
    const qid = row.question_id;
    progressMap[qid] = {
      status: row.status,
      attempts: row.attempts_count || 0,
      incorrectCount: 0,
      lastAttemptAt: row.updated_at,
      solvedAt: row.status === 'solved' ? row.updated_at : null
    };

    if (row.draft_sql) {
      draftsMap[qid] = row.draft_sql;
    }

    if (row.is_bookmarked && !bookmarksList.includes(qid)) {
      bookmarksList.push(qid);
    }
  });

  // Save merged result to local account cache
  saveAccountProgress(progressMap);
  saveAccountDrafts(draftsMap);
  saveAccountBookmarks(bookmarksList);

  return progressMap;
} catch (err) {
  console.warn('fetchProgressFromCloud caught error:', err);
  return null;
}
}
