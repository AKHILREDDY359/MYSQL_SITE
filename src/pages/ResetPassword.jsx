import React, { useState } from 'react';
import { Terminal, Lock, Eye, EyeOff, ArrowRight, AlertCircle, Loader2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext.jsx';

export default function ResetPassword({ onNavigate }) {
  const { updatePassword, authError, clearError } = useAuth();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setErrorMessage('');
    clearError();

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
      await updatePassword(password);
      setIsSuccess(true);
      setTimeout(() => {
        if (onNavigate) onNavigate('dashboard');
      }, 1500);
    } catch (err) {
      setErrorMessage(err.message || 'Failed to update password. Your recovery session may have expired.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-background px-4 py-8 bg-tech-grid">
        <div className="w-full max-w-md bg-panel rounded-2xl border border-panel-border shadow-lg p-6 sm:p-8 space-y-6 text-center animate-in fade-in duration-200">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-surface text-brand mx-auto shadow-sm">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">
              Password Updated!
            </h2>
            <p className="text-xs text-text-secondary leading-relaxed">
              Your password has been changed successfully. You can now use your new password to sign in across all devices.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onNavigate && onNavigate('dashboard')}
              className="w-full py-2.5 px-4 rounded-xl bg-brand hover:bg-brand-hover text-white font-semibold text-sm shadow-md shadow-brand/20 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Continue to SQLForge</span>
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
            Set New Password
          </h1>
          <p className="text-xs text-text-secondary leading-relaxed">
            Please enter your new password below to regain full access to your account.
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

        {/* Reset Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-text-primary mb-1.5">
              New Password <span className="font-normal text-text-muted">(min 6 characters)</span>
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                autoComplete="new-password"
                disabled={isSubmitting}
                placeholder="Enter new password"
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

          <div>
            <label className="block text-xs font-semibold text-text-primary mb-1.5">
              Confirm New Password
            </label>
            <div className="relative">
              <ShieldCheck className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                autoComplete="new-password"
                disabled={isSubmitting}
                placeholder="Repeat new password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-panel-light border border-panel-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand disabled:opacity-50 transition-all font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand hover:bg-brand-hover text-white font-semibold text-sm shadow-md shadow-brand/20 transition-all active:scale-[0.98] disabled:opacity-60 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Updating Password...</span>
              </>
            ) : (
              <>
                <span>Save New Password</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
