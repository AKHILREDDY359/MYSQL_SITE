/**
 * Export and Import utilities for user progress and drafts.
 */

import { STORAGE_KEYS, loadFromStorage, saveToStorage } from './storage.js';

export function exportProgressData() {
  const data = {
    app: 'SQLForge',
    version: '2.0.0',
    exportedAt: new Date().toISOString(),
    progress: loadFromStorage(STORAGE_KEYS.PROGRESS, {}),
    drafts: loadFromStorage(STORAGE_KEYS.DRAFTS, {}),
    bookmarks: loadFromStorage(STORAGE_KEYS.BOOKMARKS, []),
    settings: loadFromStorage(STORAGE_KEYS.SETTINGS, {})
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `sqlforge-progress-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

export function importProgressData(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    if (!data || typeof data !== 'object') {
      return { success: false, error: 'Invalid JSON format.' };
    }

    if (data.progress && typeof data.progress === 'object') {
      saveToStorage(STORAGE_KEYS.PROGRESS, data.progress);
    }
    if (data.drafts && typeof data.drafts === 'object') {
      saveToStorage(STORAGE_KEYS.DRAFTS, data.drafts);
    }
    if (Array.isArray(data.bookmarks)) {
      saveToStorage(STORAGE_KEYS.BOOKMARKS, data.bookmarks);
    }
    if (data.settings && typeof data.settings === 'object') {
      saveToStorage(STORAGE_KEYS.SETTINGS, data.settings);
    }

    return { success: true };
  } catch (err) {
    return { success: false, error: err.message || 'Failed to parse JSON file.' };
  }
}
