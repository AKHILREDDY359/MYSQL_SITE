/**
 * Safe LocalStorage utility module.
 * Provides fallback in-memory store if localStorage is unavailable (e.g. Node/SSR/tests).
 */

export const STORAGE_KEYS = {
  PROGRESS: 'SQL_SPRINT_PROGRESS_V1',
  DRAFTS: 'SQL_SPRINT_DRAFTS_V1',
  SETTINGS: 'SQL_SPRINT_SETTINGS_V1',
  LAST_QUESTION_ID: 'SQL_SPRINT_LAST_QUESTION_ID',
  BOOKMARKS: 'SQL_SPRINT_BOOKMARKS_V1',
  THEME: 'SQL_SPRINT_THEME',
  EDITOR_THEME: 'SQL_SPRINT_EDITOR_THEME'
};

const memoryStore = {};

export function loadFromStorage(key, defaultValue) {
  try {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      return memoryStore[key] !== undefined ? memoryStore[key] : defaultValue;
    }
    const serialized = localStorage.getItem(key);
    if (serialized === null) {
      return defaultValue;
    }
    return JSON.parse(serialized);
  } catch (err) {
    console.warn(`Failed to read key "${key}" from localStorage:`, err);
    return defaultValue;
  }
}

export function saveToStorage(key, value) {
  try {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      memoryStore[key] = value;
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Failed to save key "${key}" to localStorage:`, err);
  }
}

export function removeFromStorage(key) {
  try {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      delete memoryStore[key];
      return;
    }
    localStorage.removeItem(key);
  } catch (err) {
    console.error(`Failed to remove key "${key}" from localStorage:`, err);
  }
}

export function clearAllAppData() {
  try {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      Object.keys(memoryStore).forEach(k => delete memoryStore[k]);
      return;
    }
    Object.values(STORAGE_KEYS).forEach(k => localStorage.removeItem(k));
  } catch (err) {
    console.error('Failed to clear app data from localStorage:', err);
  }
}
