import React, { useState, useEffect } from 'react';
import { Terminal, Lock, Mail, Eye, EyeOff, ArrowRight, AlertCircle, Loader2, Sparkles, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext.jsx';

export default function Login({ onNavigate, onLoginSuccess }) {
  const { user, login, authError, clearError, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // If already authenticated, redirect to dashboard
  useEffect(() => {
    if (!loading && user) {
      if (onNavigate) onNavigate('dashboard');
    }
  }, [user, loading, onNavigate]);

  useEffect(() => {
    if (authError) {
      setErrorMessage(authError);
    }
  }, [authError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setErrorMessage('');
    clearError();

    const cleanEmail = email.trim();
    if (!cleanEmail) {
      setErrorMessage('Please enter your email address.');
      return;
    }
    if (!password) {
      setErrorMessage('Please enter your password.');
      return;
    }

    try {
      setIsSubmitting(true);
      await login(cleanEmail, password);
      if (onLoginSuccess) {
        onLoginSuccess();
      }
      if (onNavigate) {
        onNavigate('dashboard');
      }
    } catch (err) {
      setErrorMessage(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-background px-4 py-8 bg-tech-grid">
      <div className="w-full max-w-md bg-panel rounded-2xl border border-panel-border shadow-lg p-6 sm:p-8 space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand text-white shadow-md shadow-brand/20 mb-1">
            <Terminal className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h1 className="text-2xl font-extrabold text-text-primary tracking-tight">
            Sign in to SQL<span className="text-brand">Forge</span>
          </h1>
          <p className="text-xs text-text-secondary">
            Master SQL from Basics to Advanced with cloud progress sync
          </p>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 flex items-start gap-2.5 text-xs text-red-700 dark:text-red-300 animate-in fade-in duration-200">
            <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
            <div className="flex-1 leading-relaxed">
              {errorMessage}
            </div>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-xs font-semibold text-text-primary mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                autoComplete="email"
                disabled={isSubmitting}
                placeholder="developer@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-panel-light border border-panel-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand disabled:opacity-50 transition-all font-medium"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-text-primary">
                Password
              </label>
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('forgot-password')}
                className="text-xs font-semibold text-brand hover:text-brand-hover hover:underline cursor-pointer"
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                autoComplete="current-password"
                disabled={isSubmitting}
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                className="w-full pl-9 pr-10 py-2.5 rounded-xl bg-panel-light border border-panel-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand disabled:opacity-50 transition-all font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary p-1 cursor-pointer"
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand hover:bg-brand-hover text-white font-semibold text-sm shadow-md shadow-brand/20 transition-all active:scale-[0.98] disabled:opacity-60 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="border-t border-panel-border w-full"></div>
          <span className="bg-panel px-3 text-[11px] font-medium text-text-muted uppercase tracking-wider relative">
            or
          </span>
        </div>

        {/* Guest and Sign Up Navigation */}
        <div className="space-y-3 text-center">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('dashboard')}
            className="w-full py-2.5 px-4 rounded-xl bg-panel-light hover:bg-panel-lighter border border-panel-border text-text-primary font-semibold text-xs transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Practice as Guest (No Account Required)</span>
          </button>

          <p className="text-xs text-text-secondary">
            Don't have an account yet?{' '}
            <button
              type="button"
              onClick={() => onNavigate && onNavigate('signup')}
              className="font-bold text-brand hover:underline cursor-pointer"
            >
              Create Account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
