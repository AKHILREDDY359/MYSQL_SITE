import { createClient } from '@supabase/supabase-js';
import { loadFromStorage, saveToStorage } from '../utils/storage.js';

const STORAGE_KEYS_SUPABASE = {
  URL: 'SQL_SPRINT_SUPABASE_URL',
  KEY: 'SQL_SPRINT_SUPABASE_ANON_KEY'
};

// Check Vite environment variables first, then fallback to user-configured localStorage
export function getSupabaseCredentials() {
  const envUrl = typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL;
  const envKey = typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_ANON_KEY;

  if (envUrl && envKey) {
    return { url: envUrl, key: envKey, source: 'env' };
  }

  const storedUrl = loadFromStorage(STORAGE_KEYS_SUPABASE.URL, '');
  const storedKey = loadFromStorage(STORAGE_KEYS_SUPABASE.KEY, '');

  if (storedUrl && storedKey) {
    return { url: storedUrl, key: storedKey, source: 'storage' };
  }

  return { url: '', key: '', source: 'none' };
}

let supabaseInstance = null;

export function getSupabaseClient() {
  const { url, key } = getSupabaseCredentials();

  if (!url || !key) {
    return null;
  }

  if (!supabaseInstance) {
    try {
      supabaseInstance = createClient(url, key, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      });
    } catch (err) {
      console.warn('Failed to initialize Supabase client:', err);
      return null;
    }
  }

  return supabaseInstance;
}

export function isSupabaseConfigured() {
  const { url, key } = getSupabaseCredentials();
  return Boolean(url && key);
}

export function saveSupabaseCredentials(url, key) {
  saveToStorage(STORAGE_KEYS_SUPABASE.URL, url.trim());
  saveToStorage(STORAGE_KEYS_SUPABASE.KEY, key.trim());
  supabaseInstance = null; // Reset instance to recreate with new credentials
  return getSupabaseClient();
}

export function clearSupabaseCredentials() {
  saveToStorage(STORAGE_KEYS_SUPABASE.URL, '');
  saveToStorage(STORAGE_KEYS_SUPABASE.KEY, '');
  supabaseInstance = null;
}
