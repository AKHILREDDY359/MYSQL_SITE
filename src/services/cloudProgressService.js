import { getSupabaseClient, isSupabaseConfigured } from './supabaseClient.js';
import { getCurrentAuthUser, getActiveProfile } from './authService.js';
import { loadFromStorage, saveToStorage, STORAGE_KEYS } from '../utils/storage.js';

// Internal Sync State
let currentSyncStatus = 'idle'; // 'idle' | 'syncing' | 'synced' | 'error' | 'offline'
let currentSyncError = null;
let lastSyncedAt = null;
const syncStatusListeners = new Set();

let debounceTimer = null;
const DEBOUNCE_DELAY_MS = 1200;

export function getSyncStatus() {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return 'offline';
  }
  return currentSyncStatus;
}

export function getSyncError() {
  return currentSyncError;
}

export function getLastSyncedAt() {
  return lastSyncedAt;
}

export function subscribeSyncStatus(listener) {
  syncStatusListeners.add(listener);
  listener({
    status: getSyncStatus(),
    error: currentSyncError,
    lastSyncedAt
  });

  return () => {
    syncStatusListeners.delete(listener);
  };
}

function notifySyncListeners() {
  const status = getSyncStatus();
  syncStatusListeners.forEach((listener) => {
    try {
      listener({
        status,
        error: currentSyncError,
        lastSyncedAt
      });
    } catch (e) {
      console.warn('Sync status listener notice:', e);
    }
  });
}

// Online/Offline detection
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    currentSyncStatus = 'idle';
    notifySyncListeners();
    // Auto-retry sync when connectivity is restored
    retrySync();
  });

  window.addEventListener('offline', () => {
    currentSyncStatus = 'offline';
    notifySyncListeners();
  });
}

/**
 * Returns a storage key securely isolated by Supabase User UUID (or 'guest').
 */
export function getScopedStorageKey(baseKey, userId = null) {
  if (userId) {
    return `${baseKey}_uid_${userId}`;
  }
  const profile = getActiveProfile();
  const safeProfile = (typeof profile === 'string' && profile.trim().length > 0)
    ? profile.trim().toLowerCase()
    : 'guest';

  // If user profile is not a UUID, store under scoped guest/profile key
  return `${baseKey}_profile_${safeProfile}`;
}

/**
 * Loads progress for the currently active context (authenticated user or local guest).
 */
export function getAccountProgress(userId = null) {
  // If specific userId is passed or active
  if (userId) {
    const key = getScopedStorageKey(STORAGE_KEYS.PROGRESS, userId);
    return loadFromStorage(key, {});
  }

  // Check guest/profile key
  const scopedKey = getScopedStorageKey(STORAGE_KEYS.PROGRESS);
  const scopedData = loadFromStorage(scopedKey, null);
  if (scopedData !== null) {
    return scopedData;
  }

  // Fallback to legacy unscoped progress key for migration
  const legacyData = loadFromStorage(STORAGE_KEYS.PROGRESS, {});
  if (Object.keys(legacyData).length > 0) {
    saveToStorage(scopedKey, legacyData);
  }
  return legacyData;
}

export function saveAccountProgress(progressMap, userId = null) {
  const scopedKey = getScopedStorageKey(STORAGE_KEYS.PROGRESS, userId);
  saveToStorage(scopedKey, progressMap);

  // If this is guest, also update legacy for backward compatibility
  if (!userId) {
    saveToStorage(STORAGE_KEYS.PROGRESS, progressMap);
  }

  // Trigger debounced cloud sync
  queueSyncProgress(progressMap);
}

export function getAccountDrafts(userId = null) {
  const scopedKey = getScopedStorageKey(STORAGE_KEYS.DRAFTS, userId);
  const scopedData = loadFromStorage(scopedKey, null);
  if (scopedData !== null) return scopedData;
  const legacyData = loadFromStorage(STORAGE_KEYS.DRAFTS, {});
  if (Object.keys(legacyData).length > 0) {
    saveToStorage(scopedKey, legacyData);
  }
  return legacyData;
}

export function saveAccountDrafts(draftsMap, userId = null) {
  const scopedKey = getScopedStorageKey(STORAGE_KEYS.DRAFTS, userId);
  saveToStorage(scopedKey, draftsMap);
  if (!userId) {
    saveToStorage(STORAGE_KEYS.DRAFTS, draftsMap);
  }
}

export function getAccountBookmarks(userId = null) {
  const scopedKey = getScopedStorageKey(STORAGE_KEYS.BOOKMARKS, userId);
  const scopedData = loadFromStorage(scopedKey, null);
  if (scopedData !== null) return scopedData;
  const legacyData = loadFromStorage(STORAGE_KEYS.BOOKMARKS, []);
  if (legacyData.length > 0) {
    saveToStorage(scopedKey, legacyData);
  }
  return legacyData;
}

export function saveAccountBookmarks(bookmarksList, userId = null) {
  const scopedKey = getScopedStorageKey(STORAGE_KEYS.BOOKMARKS, userId);
  saveToStorage(scopedKey, bookmarksList);
  if (!userId) {
    saveToStorage(STORAGE_KEYS.BOOKMARKS, bookmarksList);
  }
}

/**
 * Queue debounced progress upload to Supabase.
 */
export function queueSyncProgress(progressMap) {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }

  currentSyncStatus = 'syncing';
  notifySyncListeners();

  debounceTimer = setTimeout(async () => {
    try {
      await syncProgressToCloud(progressMap);
    } catch (err) {
      console.warn('Debounced cloud sync notice:', err.message);
    }
  }, DEBOUNCE_DELAY_MS);
}

/**
 * Direct sync of local progress to Supabase `user_progress` table.
 */
export async function syncProgressToCloud(progressMap) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    currentSyncStatus = 'idle';
    notifySyncListeners();
    return { synced: false, reason: 'Supabase not configured' };
  }

  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    currentSyncStatus = 'offline';
    notifySyncListeners();
    return { synced: false, reason: 'Offline' };
  }

  const user = await getCurrentAuthUser();
  if (!user) {
    currentSyncStatus = 'idle';
    notifySyncListeners();
    return { synced: false, reason: 'Guest mode - not signed in' };
  }

  currentSyncStatus = 'syncing';
  currentSyncError = null;
  notifySyncListeners();

  try {
    const drafts = getAccountDrafts(user.id);
    const bookmarks = getAccountBookmarks(user.id);

    const recordsToUpsert = Object.entries(progressMap).map(([qidStr, item]) => {
      const qid = parseInt(qidStr, 10);
      return {
        user_id: user.id,
        question_id: qid,
        status: item.status || 'not_started',
        draft_sql: drafts[qid] || null,
        attempts_count: item.attempts || 0,
        is_bookmarked: Array.isArray(bookmarks) && bookmarks.includes(qid),
        updated_at: new Date().toISOString()
      };
    });

    if (recordsToUpsert.length === 0) {
      currentSyncStatus = 'synced';
      lastSyncedAt = new Date();
      notifySyncListeners();
      return { synced: true, count: 0 };
    }

    let { error } = await supabase
      .from('user_progress')
      .upsert(recordsToUpsert, { onConflict: 'user_id,question_id' });

    // Defensive fallback: If remote schema lacks any optional column, retry with minimal essential fields
    if (error && (error.code === '42703' || error.message?.includes('column'))) {
      console.warn('user_progress column mismatch detected, retrying with core columns only:', error.message);
      const minimalRecords = recordsToUpsert.map(r => ({
        user_id: r.user_id,
        question_id: r.question_id,
        status: r.status,
        updated_at: r.updated_at
      }));
      const fallbackResult = await supabase
        .from('user_progress')
        .upsert(minimalRecords, { onConflict: 'user_id,question_id' });
      error = fallbackResult.error;
    }

    if (error) {
      currentSyncStatus = 'error';
      currentSyncError = error.message;
      notifySyncListeners();
      throw error;
    }

    currentSyncStatus = 'synced';
    currentSyncError = null;
    lastSyncedAt = new Date();
    notifySyncListeners();

    return { synced: true, count: recordsToUpsert.length };
  } catch (err) {
    currentSyncStatus = 'error';
    currentSyncError = err.message || 'Sync failed';
    notifySyncListeners();
    throw err;
  }
}

/**
 * Downloads cloud progress from Supabase and merges into the user's isolated local store.
 */
export async function fetchProgressFromCloud(targetUser = null) {
  try {
    const supabase = getSupabaseClient();
    if (!supabase) return null;

    const user = targetUser || (await getCurrentAuthUser());
    if (!user) {
      currentSyncStatus = 'idle';
      notifySyncListeners();
      return null;
    }

    currentSyncStatus = 'syncing';
    notifySyncListeners();

    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', user.id);

    if (error) {
      currentSyncStatus = 'error';
      currentSyncError = error.message;
      notifySyncListeners();
      console.warn('Failed to fetch cloud progress:', error.message);
      return null;
    }

    const cloudRows = data || [];

    // Load local storage for this specific user
    const userProgress = getAccountProgress(user.id);
    const userDrafts = getAccountDrafts(user.id);
    const userBookmarks = [...getAccountBookmarks(user.id)];

    // Safely merge cloud records
    cloudRows.forEach((row) => {
      const qid = row.question_id;
      const localItem = userProgress[qid] || {};

      // If cloud is solved, always respect solved
      const isSolved = row.status === 'solved' || localItem.status === 'solved';
      const status = isSolved
        ? 'solved'
        : (row.status === 'needs_review' || localItem.status === 'needs_review'
          ? 'needs_review'
          : (row.status === 'attempted' || localItem.status === 'attempted' ? 'attempted' : 'not_started'));

      userProgress[qid] = {
        status,
        attempts: Math.max(row.attempts_count || 0, localItem.attempts || 0),
        incorrectCount: localItem.incorrectCount || 0,
        lastAttemptAt: row.last_attempt_at || localItem.lastAttemptAt || row.updated_at,
        solvedAt: isSolved ? (row.solved_at || localItem.solvedAt || row.updated_at) : null,
        lastError: row.last_error || localItem.lastError || null
      };

      if (row.draft_sql && !userDrafts[qid]) {
        userDrafts[qid] = row.draft_sql;
      }

      if (row.is_bookmarked && !userBookmarks.includes(qid)) {
        userBookmarks.push(qid);
      }
    });

    // Save isolated records for this user
    saveToStorage(getScopedStorageKey(STORAGE_KEYS.PROGRESS, user.id), userProgress);
    saveToStorage(getScopedStorageKey(STORAGE_KEYS.DRAFTS, user.id), userDrafts);
    saveToStorage(getScopedStorageKey(STORAGE_KEYS.BOOKMARKS, user.id), userBookmarks);

    currentSyncStatus = 'synced';
    currentSyncError = null;
    lastSyncedAt = new Date();
    notifySyncListeners();

    return {
      progressMap: userProgress,
      cloudCount: cloudRows.length
    };
  } catch (err) {
    currentSyncStatus = 'error';
    currentSyncError = err.message || 'Fetch failed';
    notifySyncListeners();
    console.warn('fetchProgressFromCloud error:', err);
    return null;
  }
}

/**
 * Manually retry sync.
 */
export async function retrySync() {
  const user = await getCurrentAuthUser();
  if (!user) return;
  const progress = getAccountProgress(user.id);
  return syncProgressToCloud(progress);
}

/**
 * Safely merge local guest progress into the authenticated user's account.
 */
export async function mergeGuestProgressIntoUser(userId) {
  if (!userId) return false;

  const guestProgress = getAccountProgress(null); // Guest progress
  const guestDrafts = getAccountDrafts(null);
  const guestBookmarks = getAccountBookmarks(null);

  const userProgress = getAccountProgress(userId);
  const userDrafts = getAccountDrafts(userId);
  const userBookmarks = [...getAccountBookmarks(userId)];

  let mergeCount = 0;

  Object.entries(guestProgress).forEach(([qidStr, item]) => {
    const qid = parseInt(qidStr, 10);
    const existing = userProgress[qid];

    // Merge: if guest solved it or has more attempts, upgrade
    if (!existing || item.status === 'solved' || (!existing.solvedAt && item.attempts > (existing.attempts || 0))) {
      userProgress[qid] = {
        status: (existing?.status === 'solved' || item.status === 'solved') ? 'solved' : item.status,
        attempts: Math.max(existing?.attempts || 0, item.attempts || 0),
        incorrectCount: Math.max(existing?.incorrectCount || 0, item.incorrectCount || 0),
        lastAttemptAt: item.lastAttemptAt || existing?.lastAttemptAt || null,
        solvedAt: (item.status === 'solved' ? item.solvedAt : null) || existing?.solvedAt || null
      };
      mergeCount++;
    }

    if (guestDrafts[qid] && !userDrafts[qid]) {
      userDrafts[qid] = guestDrafts[qid];
    }

    if (guestBookmarks.includes(qid) && !userBookmarks.includes(qid)) {
      userBookmarks.push(qid);
    }
  });

  // Save merged result to user scope
  saveToStorage(getScopedStorageKey(STORAGE_KEYS.PROGRESS, userId), userProgress);
  saveToStorage(getScopedStorageKey(STORAGE_KEYS.DRAFTS, userId), userDrafts);
  saveToStorage(getScopedStorageKey(STORAGE_KEYS.BOOKMARKS, userId), userBookmarks);

  // Clear guest data from this browser now that it has been safely imported into user account
  clearGuestProgress();

  // Sync merged data to cloud immediately
  await syncProgressToCloud(userProgress);

  return mergeCount;
}

/**
 * Completely clears local guest progress, drafts, and bookmarks so that
 * once merged or dismissed, the browser does not repeatedly prompt on refresh.
 */
export function clearGuestProgress() {
  const guestProgressKey = getScopedStorageKey(STORAGE_KEYS.PROGRESS, null);
  const guestDraftsKey = getScopedStorageKey(STORAGE_KEYS.DRAFTS, null);
  const guestBookmarksKey = getScopedStorageKey(STORAGE_KEYS.BOOKMARKS, null);

  saveToStorage(guestProgressKey, {});
  saveToStorage(guestDraftsKey, {});
  saveToStorage(guestBookmarksKey, []);

  // Also clear legacy un-scoped keys so fallback doesn't resurrect them
  saveToStorage(STORAGE_KEYS.PROGRESS, {});
  saveToStorage(STORAGE_KEYS.DRAFTS, {});
  saveToStorage(STORAGE_KEYS.BOOKMARKS, []);
}

/**
 * Check if there is guest progress with solved questions available to merge.
 * If targetUserId is provided, calculates how many questions are genuinely new
 * and not already solved in the user's account.
 */
export function getGuestProgressSummary(targetUserId = null) {
  const guestProgress = getAccountProgress(null);
  const userProgress = targetUserId ? getAccountProgress(targetUserId) : null;

  const guestSolved = Object.entries(guestProgress).filter(([_, p]) => p.status === 'solved');
  
  // Calculate questions that are not already solved in the user account
  const newSolved = userProgress
    ? guestSolved.filter(([qid]) => userProgress[qid]?.status !== 'solved')
    : guestSolved;

  const attemptedCount = Object.values(guestProgress).filter(p => p.status === 'attempted').length;

  return {
    total: Object.keys(guestProgress).length,
    solved: guestSolved.length,
    newSolved: newSolved.length,
    attempted: attemptedCount
  };
}
