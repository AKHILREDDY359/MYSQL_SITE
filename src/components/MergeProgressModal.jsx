import React, { useState } from 'react';
import { Sparkles, ArrowRight, X, CheckCircle2, ShieldAlert, Loader2 } from 'lucide-react';

export default function MergeProgressModal({
  isOpen,
  user,
  guestSummary,
  onMerge,
  onSkip
}) {
  const [isMerging, setIsMerging] = useState(false);

  const solvedCount = guestSummary?.newSolved !== undefined ? guestSummary.newSolved : (guestSummary?.solved || 0);
  if (!isOpen || !guestSummary || solvedCount === 0) return null;

  const handleConfirmMerge = async () => {
    try {
      setIsMerging(true);
      await onMerge();
    } finally {
      setIsMerging(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-panel rounded-2xl border border-panel-border shadow-2xl p-6 space-y-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-surface text-brand flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-text-primary">
                Import Guest Progress?
              </h3>
              <p className="text-xs text-text-secondary">
                Account: <span className="font-semibold text-text-primary">{user?.email}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onSkip}
            className="p-1 rounded-lg text-text-muted hover:text-text-primary hover:bg-panel-light transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-3.5 rounded-xl bg-panel-light border border-panel-border text-xs space-y-2">
          <div className="flex items-center justify-between text-text-primary">
            <span>Solved questions on this browser:</span>
            <span className="font-mono font-bold text-brand">{solvedCount}</span>
          </div>
          <div className="flex items-center justify-between text-text-secondary text-[11px]">
            <span>Attempted questions:</span>
            <span className="font-mono font-medium">{guestSummary.attempted}</span>
          </div>
          <p className="text-text-secondary leading-relaxed pt-1 text-[11px]">
            Would you like to import this guest progress into your cloud account so it synchronizes across all your devices?
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 pt-1">
          <button
            onClick={handleConfirmMerge}
            disabled={isMerging}
            className="flex-1 py-2.5 px-4 rounded-xl bg-brand hover:bg-brand-hover text-white text-xs font-semibold shadow-md shadow-brand/20 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
          >
            {isMerging ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Importing...</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Import & Sync Progress</span>
              </>
            )}
          </button>
          <button
            onClick={onSkip}
            disabled={isMerging}
            className="py-2.5 px-4 rounded-xl bg-panel-light hover:bg-panel-lighter border border-panel-border text-text-secondary hover:text-text-primary text-xs font-medium transition-colors cursor-pointer"
          >
            Skip (Keep Cloud Only)
          </button>
        </div>
      </div>
    </div>
  );
}
