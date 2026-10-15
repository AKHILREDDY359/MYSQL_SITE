import React, { useState, useEffect } from 'react';
import { Terminal, Lock, Mail, User, Eye, EyeOff, ArrowRight, AlertCircle, Loader2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext.jsx';

export default function SignUp({ onNavigate }) {
  const { user, signup, authError, clearError, loading } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [requiresVerification, setRequiresVerification] = useState(false);

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

    const cleanName = fullName.trim();
    const cleanEmail = email.trim();

    if (!cleanName) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please re-enter.');
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await signup(cleanEmail, password, cleanName);

      // Check if user session was created immediately or needs email confirmation
      if (res?.session) {
        // Direct session created (email confirmation disabled in Supabase)
        setSignupSuccess(true);
        setTimeout(() => {
          if (onNavigate) onNavigate('dashboard');
        }, 1200);
      } else {
        // Email verification required
        setRequiresVerification(true);
      }
    } catch (err) {
      setErrorMessage(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (requiresVerification) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-background px-4 py-8 bg-tech-grid">
        <div className="w-full max-w-md bg-panel rounded-2xl border border-panel-border shadow-lg p-6 sm:p-8 space-y-6 text-center animate-in fade-in duration-200">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-surface text-brand mx-auto shadow-sm">
            <Mail className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">
              Verify your email
            </h2>
            <p className="text-xs text-text-secondary leading-relaxed">
              We have sent a verification email to:
            </p>
            <div className="font-mono text-xs font-bold text-brand bg-brand-surface py-1.5 px-3 rounded-lg border border-brand/20 inline-block">
              {email}
            </div>
            <p className="text-xs text-text-secondary leading-relaxed pt-2">
              Please click the confirmation link in the email to activate your SQLForge account, then sign in below.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onNavigate && onNavigate('login')}
              className="w-full py-2.5 px-4 rounded-xl bg-brand hover:bg-brand-hover text-white font-semibold text-sm shadow-md shadow-brand/20 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Go to Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-background px-4 py-8 bg-tech-grid">
      <div className="w-full max-w-md bg-panel rounded-2xl border border-panel-border shadow-lg p-6 sm:p-8 space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand text-white shadow-md shadow-brand/20 mb-1">
            <Terminal className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h1 className="text-2xl font-extrabold text-text-primary tracking-tight">
            Create SQL<span className="text-brand">Forge</span> Account
          </h1>
          <p className="text-xs text-text-secondary">
            Save solved questions, bookmarks, and drafts securely across devices
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

        {signupSuccess && (
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center gap-2.5 text-xs text-emerald-800 dark:text-emerald-300 animate-in fade-in duration-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="font-semibold">Account created successfully! Loading practice space...</span>
          </div>
        )}

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name Field */}
          <div>
            <label className="block text-xs font-semibold text-text-primary mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                autoComplete="name"
                disabled={isSubmitting}
                placeholder="Alex Developer"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-panel-light border border-panel-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand disabled:opacity-50 transition-all font-medium"
              />
            </div>
          </div>

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
                placeholder="alex@example.com"
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
            <label className="block text-xs font-semibold text-text-primary mb-1.5">
              Password <span className="font-normal text-text-muted">(min 6 characters)</span>
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                autoComplete="new-password"
                disabled={isSubmitting}
                placeholder="At least 6 characters"
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

          {/* Confirm Password Field */}
          <div>
            <label className="block text-xs font-semibold text-text-primary mb-1.5">
              Confirm Password
            </label>
            <div className="relative">
              <ShieldCheck className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                autoComplete="new-password"
                disabled={isSubmitting}
                placeholder="Repeat password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-panel-light border border-panel-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand disabled:opacity-50 transition-all font-medium"
              />
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
                <span>Creating Account...</span>
              </>
            ) : (
              <>
                <span>Create Account</span>
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

        {/* Guest and Sign In Navigation */}
        <div className="space-y-3 text-center">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('dashboard')}
            className="w-full py-2.5 px-4 rounded-xl bg-panel-light hover:bg-panel-lighter border border-panel-border text-text-primary font-semibold text-xs transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Practice as Guest (No Registration Needed)</span>
          </button>

          <p className="text-xs text-text-secondary">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => onNavigate && onNavigate('login')}
              className="font-bold text-brand hover:underline cursor-pointer"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
