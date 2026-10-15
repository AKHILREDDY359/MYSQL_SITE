import { getSupabaseClient, isSupabaseConfigured } from './supabaseClient.js';
import { loadFromStorage, saveToStorage } from '../utils/storage.js';

const STORAGE_KEYS_AUTH = {
  ACTIVE_PROFILE: 'SQL_SPRINT_ACTIVE_PROFILE_NAME',
  PROFILES_LIST: 'SQL_SPRINT_SAVED_PROFILES'
};

// Default profile name
const DEFAULT_PROFILE = 'Akhil';

export function getActiveProfile() {
  return loadFromStorage(STORAGE_KEYS_AUTH.ACTIVE_PROFILE, DEFAULT_PROFILE);
}

export function setActiveProfile(profileName) {
  const clean = (profileName || DEFAULT_PROFILE).trim();
  saveToStorage(STORAGE_KEYS_AUTH.ACTIVE_PROFILE, clean);

  // Add to saved profiles list
  const list = getSavedProfiles();
  if (!list.includes(clean)) {
    list.push(clean);
    saveToStorage(STORAGE_KEYS_AUTH.PROFILES_LIST, list);
  }

  return clean;
}

export function getSavedProfiles() {
  return loadFromStorage(STORAGE_KEYS_AUTH.PROFILES_LIST, [DEFAULT_PROFILE]);
}

/**
 * Sign up with email & password via Supabase.
 */
export async function signUpWithEmail(email, password) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    throw new Error('Supabase is not configured. Please enter your Supabase Project URL & Anon Key in Cloud Settings.');
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) throw error;
  if (data.user) {
    setActiveProfile(data.user.email.split('@')[0]);
  }
  return data;
}

/**
 * Sign in with email & password via Supabase.
 */
export async function signInWithEmail(email, password) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    throw new Error('Supabase is not configured. Please enter your Supabase Project URL & Anon Key in Cloud Settings.');
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) throw error;
  if (data.user) {
    setActiveProfile(data.user.email.split('@')[0]);
  }
  return data;
}

/**
 * Sign out from Supabase session.
 */
export async function signOutUser() {
  const supabase = getSupabaseClient();
  if (supabase) {
    await supabase.auth.signOut();
  }
}

/**
 * Get currently authenticated Supabase user or null.
 */
export async function getCurrentAuthUser() {
  const supabase = getSupabaseClient();
  if (!supabase) return null;

  try {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  } catch (err) {
    return null;
  }
}

/**
 * Listen for auth state changes.
 */
export function onAuthStateChanged(callback) {
  const supabase = getSupabaseClient();
  if (!supabase) return () => {};

  const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
    callback(session?.user || null, event);
  });

  return () => {
    subscription.unsubscribe();
  };
}
