import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

export default function ConfirmDialog({ isOpen, title, message, confirmText = 'Confirm', cancelText = 'Cancel', onConfirm, onCancel, isDanger = false }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-panel border border-panel-border rounded-xl shadow-2xl max-w-md w-full overflow-hidden p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${isDanger ? 'bg-danger/10 text-danger' : 'bg-brand/10 text-brand'}`}>
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
          </div>
          <button
            onClick={onCancel}
            className="text-text-secondary hover:text-text-primary transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed">
          {message}
        </p>

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary bg-panel-light hover:bg-panel-border rounded-lg transition-colors border border-panel-border"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all shadow-md ${
              isDanger
                ? 'bg-danger hover:bg-red-600 text-white shadow-danger/20'
                : 'bg-brand hover:bg-brand-hover text-white shadow-brand/20'
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
