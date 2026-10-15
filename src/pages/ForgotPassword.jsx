import React, { useState } from 'react';
import { Terminal, Mail, ArrowRight, ArrowLeft, AlertCircle, Loader2, CheckCircle2, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext.jsx';

export default function ForgotPassword({ onNavigate, onClose, asModal = false }) {
  const { requestPasswordReset, authError, clearError } = useAuth();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setErrorMessage('');
    clearError();

    const cleanEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      setIsSubmitting(true);
      await requestPasswordReset(cleanEmail);
      setIsSuccess(true);
    } catch (err) {
      setErrorMessage(err.message || 'Failed to send password reset email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    const successCard = (
      <div className="relative w-full max-w-md bg-panel rounded-2xl border border-panel-border shadow-2xl p-6 sm:p-8 space-y-6 text-center animate-in fade-in duration-200">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-panel-light transition-colors cursor-pointer"
            title="Close (Return to Dashboard)"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-surface text-brand mx-auto shadow-sm">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-text-primary tracking-tight">
            Reset link sent
          </h2>
          <p className="text-xs text-text-secondary leading-relaxed">
            We've dispatched password reset instructions to:
          </p>
          <div className="font-mono text-xs font-bold text-brand bg-brand-surface py-1.5 px-3 rounded-lg border border-brand/20 inline-block">
            {email}
          </div>
          <p className="text-xs text-text-secondary leading-relaxed pt-2">
            Follow the link inside the email to set a new password. If you don't see it within a couple minutes, please check your spam folder.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={() => onNavigate && onNavigate('login')}
            className="w-full py-2.5 px-4 rounded-xl bg-brand hover:bg-brand-hover text-white font-semibold text-sm shadow-md shadow-brand/20 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Back to Sign In</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );

    if (asModal) return successCard;
    return (
      <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-background px-4 py-8 bg-tech-grid">
        {successCard}
      </div>
    );
  }

  const cardContent = (
    <div className="relative w-full max-w-md bg-panel rounded-2xl border border-panel-border shadow-2xl p-6 sm:p-8 space-y-6">
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-panel-light transition-colors cursor-pointer"
          title="Close (Return to Dashboard)"
        >
          <X className="w-4 h-4" />
        </button>
      )}
        {/* Back Link */}
        <button
          type="button"
          onClick={() => onNavigate && onNavigate('login')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-brand transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Sign In</span>
        </button>

        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand text-white shadow-md shadow-brand/20 mb-1">
            <Terminal className="w-6 h-6 stroke-[2.5]" />
          </div>
          <h1 className="text-2xl font-extrabold text-text-primary tracking-tight">
            Forgot Password
          </h1>
          <p className="text-xs text-text-secondary leading-relaxed">
            Enter the email associated with your account and we'll send you a password reset link.
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

        {/* Forgot Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-text-primary mb-1.5">
              Account Email
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-brand hover:bg-brand-hover text-white font-semibold text-sm shadow-md shadow-brand/20 transition-all active:scale-[0.98] disabled:opacity-60 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending link...</span>
              </>
            ) : (
              <>
                <span>Send Reset Link</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-2">
          <p className="text-xs text-text-secondary">
            Remember your password?{' '}
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
  );

  if (asModal) return cardContent;
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-background px-4 py-8 bg-tech-grid">
      {cardContent}
    </div>
  );
}
