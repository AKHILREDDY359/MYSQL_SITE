import { getSupabaseClient, isSupabaseConfigured } from './supabaseClient.js';
import { loadFromStorage, saveToStorage } from '../utils/storage.js';

const STORAGE_KEYS_AUTH = {
  ACTIVE_PROFILE: 'SQL_SPRINT_ACTIVE_PROFILE_NAME',
  PROFILES_LIST: 'SQL_SPRINT_SAVED_PROFILES'
};

const DEFAULT_PROFILE = 'Guest';

export function getActiveProfile() {
  const val = loadFromStorage(STORAGE_KEYS_AUTH.ACTIVE_PROFILE, DEFAULT_PROFILE);
  if (typeof val === 'string' && val.trim().length > 0) {
    const trimmed = val.trim();
    if (trimmed.toLowerCase() === 'akhil') {
      saveToStorage(STORAGE_KEYS_AUTH.ACTIVE_PROFILE, DEFAULT_PROFILE);
      return DEFAULT_PROFILE;
    }
    return trimmed;
  }
  return DEFAULT_PROFILE;
}

export function setActiveProfile(profileName) {
  const clean = (typeof profileName === 'string' && profileName.trim()) ? profileName.trim() : DEFAULT_PROFILE;
  saveToStorage(STORAGE_KEYS_AUTH.ACTIVE_PROFILE, clean);

  const list = getSavedProfiles();
  if (!list.includes(clean)) {
    list.push(clean);
    saveToStorage(STORAGE_KEYS_AUTH.PROFILES_LIST, list);
  }

  return clean;
}

export function getSavedProfiles() {
  const list = loadFromStorage(STORAGE_KEYS_AUTH.PROFILES_LIST, [DEFAULT_PROFILE]);
  if (Array.isArray(list) && list.length > 0) {
    const cleaned = list
      .map(p => (typeof p === 'string' && p.trim().toLowerCase() === 'akhil' ? DEFAULT_PROFILE : p))
      .filter(p => typeof p === 'string' && p.trim().length > 0);
    const unique = Array.from(new Set(cleaned));
    return unique.length > 0 ? unique : [DEFAULT_PROFILE];
  }
  return [DEFAULT_PROFILE];
}

/**
 * Format raw Supabase authentication errors into friendly, actionable messages.
 */
export function formatAuthError(error) {
  if (!error) return 'An unexpected error occurred.';
  const message = error.message || String(error);

  if (message.includes('Invalid login credentials')) {
    return 'Incorrect email or password. Please verify your details and try again.';
  }
  if (message.includes('Email not confirmed')) {
    return 'Your email has not been confirmed yet. Please check your inbox for the verification link.';
  }
  if (message.includes('User already registered') || message.includes('already exists')) {
    return 'An account with this email address already exists. Try logging in instead.';
  }
  if (message.includes('Password should be at least')) {
    return 'Password must be at least 6 characters long.';
  }
  if (message.includes('rate limit') || message.includes('Too many requests')) {
    return 'Too many login attempts. Please wait a moment before trying again.';
  }
  if (message.includes('Failed to fetch') || message.includes('NetworkError')) {
    return 'Network connection failure. Please check your internet connection.';
  }
  if (message.includes('Auth session missing') || message.includes('JWT expired')) {
    return 'Your session has expired. Please log in again to continue.';
  }

  return message;
}

/**
 * Sign up with email, password, and optional full name via Supabase.
 */
export async function signUpWithEmail(email, password, fullName = '') {
  const supabase = getSupabaseClient();
  if (!supabase) {
    throw new Error('Supabase is not configured. Please check your Supabase Project URL & Anon Key.');
  }

  const cleanEmail = email.trim();
  const cleanName = (fullName || '').trim() || cleanEmail.split('@')[0];

  const { data, error } = await supabase.auth.signUp({
    email: cleanEmail,
    password,
    options: {
      data: {
        full_name: cleanName
      },
      emailRedirectTo: typeof window !== 'undefined' ? `${window.location.origin}/` : undefined
    }
  });

  if (error) throw error;

  if (data?.user) {
    setActiveProfile(cleanName);
  }

  return data;
}

/**
 * Sign in with email & password via Supabase.
 */
export async function signInWithEmail(email, password) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    throw new Error('Supabase is not configured. Please check your Supabase Project URL & Anon Key.');
  }

  const cleanEmail = email.trim();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: cleanEmail,
    password
  });

  if (error) throw error;

  if (data?.user) {
    const name = data.user.user_metadata?.full_name || cleanEmail.split('@')[0];
    setActiveProfile(name);
  }

  return data;
}

/**
 * Send password reset email via Supabase with redirect URL.
 */
export async function resetPasswordForEmail(email) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    throw new Error('Supabase is not configured. Please check your Supabase Project URL & Anon Key.');
  }

  const cleanEmail = email.trim();
  const redirectUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/`
    : undefined;

  const { data, error } = await supabase.auth.resetPasswordForEmail(cleanEmail, {
    redirectTo: redirectUrl
  });

  if (error) throw error;
  return data;
}

/**
 * Update authenticated user's password (e.g. from password reset recovery session).
 */
export async function updateUserPassword(newPassword) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    throw new Error('Supabase is not configured. Please check your Supabase Project URL & Anon Key.');
  }

  const { data, error } = await supabase.auth.updateUser({
    password: newPassword
  });

  if (error) throw error;
  return data;
}

/**
 * Sign out from Supabase session.
 */
export async function signOutUser() {
  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.warn('Supabase sign out error:', err);
    }
  }
  setActiveProfile(DEFAULT_PROFILE);
}

/**
 * Get active session.
 */
export async function getCurrentSession() {
  try {
    const supabase = getSupabaseClient();
    if (!supabase || !supabase.auth) return null;
    const { data } = await supabase.auth.getSession();
    return data?.session || null;
  } catch (err) {
    return null;
  }
}

/**
 * Get currently authenticated Supabase user or null.
 */
export async function getCurrentAuthUser() {
  try {
    const supabase = getSupabaseClient();
    if (!supabase || !supabase.auth) return null;

    const res = await supabase.auth.getUser();
    return res?.data?.user || null;
  } catch (err) {
    return null;
  }
}

/**
 * Listen for auth state changes.
 */
export function onAuthStateChanged(callback) {
  try {
    const supabase = getSupabaseClient();
    if (!supabase || !supabase.auth) return () => {};

    const res = supabase.auth.onAuthStateChange((event, session) => {
      try {
        callback(session?.user || null, event, session);
      } catch (cbErr) {
        console.warn('Auth callback error:', cbErr);
      }
    });

    const subscription = res?.data?.subscription;
    return () => {
      try {
        if (subscription && typeof subscription.unsubscribe === 'function') {
          subscription.unsubscribe();
        }
      } catch (e) {}
    };
  } catch (err) {
    console.warn('onAuthStateChanged error:', err);
    return () => {};
  }
}
