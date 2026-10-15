import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  getCurrentAuthUser, getCurrentSession, onAuthStateChanged, 
  signInWithEmail, signUpWithEmail, signOutUser, 
  resetPasswordForEmail, updateUserPassword, formatAuthError 
} from '../services/authService.js';

const AuthContext = createContext({
  user: null,
  session: null,
  loading: true,
  authError: null,
  login: async () => {},
  signup: async () => {},
  logout: async () => {},
  requestPasswordReset: async () => {},
  updatePassword: async () => {},
  clearError: () => {}
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  // Restore existing session and user on mount
  useEffect(() => {
    let mounted = true;

    async function initAuth() {
      try {
        const activeSession = await getCurrentSession();
        const activeUser = await getCurrentAuthUser();
        if (mounted) {
          setSession(activeSession);
          setUser(activeUser);
        }
      } catch (err) {
        console.warn('Initial session check error:', err);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    initAuth();

    // Subscribe to live auth events (sign in, sign out, token refresh, password recovery)
    const unsubscribe = onAuthStateChanged((changedUser, event, newSession) => {
      if (!mounted) return;

      setUser(changedUser);
      setSession(newSession || null);
      setLoading(false);

      if (event === 'PASSWORD_RECOVERY') {
        // Automatically route to password reset page when recovery link is consumed
        if (typeof window !== 'undefined') {
          window.location.hash = '#/reset-password';
        }
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        setSession(null);
      }
    });

    return () => {
      mounted = false;
      if (typeof unsubscribe === 'function') {
        try {
          unsubscribe();
        } catch (e) {}
      }
    };
  }, []);

  const clearError = useCallback(() => {
    setAuthError(null);
  }, []);

  const login = useCallback(async (email, password) => {
    setAuthError(null);
    try {
      const res = await signInWithEmail(email, password);
      setUser(res.user);
      setSession(res.session);
      return res;
    } catch (err) {
      const formatted = formatAuthError(err);
      setAuthError(formatted);
      throw new Error(formatted);
    }
  }, []);

  const signup = useCallback(async (email, password, fullName = '') => {
    setAuthError(null);
    try {
      const res = await signUpWithEmail(email, password, fullName);
      return res;
    } catch (err) {
      const formatted = formatAuthError(err);
      setAuthError(formatted);
      throw new Error(formatted);
    }
  }, []);

  const logout = useCallback(async () => {
    setAuthError(null);
    try {
      await signOutUser();
      setUser(null);
      setSession(null);
    } catch (err) {
      console.warn('Logout notice:', err);
    }
  }, []);

  const requestPasswordReset = useCallback(async (email) => {
    setAuthError(null);
    try {
      const res = await resetPasswordForEmail(email);
      return res;
    } catch (err) {
      const formatted = formatAuthError(err);
      setAuthError(formatted);
      throw new Error(formatted);
    }
  }, []);

  const updatePassword = useCallback(async (newPassword) => {
    setAuthError(null);
    try {
      const res = await updateUserPassword(newPassword);
      return res;
    } catch (err) {
      const formatted = formatAuthError(err);
      setAuthError(formatted);
      throw new Error(formatted);
    }
  }, []);

  const value = {
    user,
    session,
    loading,
    authError,
    login,
    signup,
    logout,
    requestPasswordReset,
    updatePassword,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
