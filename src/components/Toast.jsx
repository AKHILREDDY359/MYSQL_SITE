import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);

    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg shadow-xl border text-sm max-w-md transition-all duration-300 animate-slide-up ${
              toast.type === 'success'
                ? 'bg-[#0f2e1b] border-success text-green-200'
                : toast.type === 'error'
                ? 'bg-[#351417] border-danger text-red-200'
                : toast.type === 'warning'
                ? 'bg-[#3b2a0c] border-warning text-yellow-200'
                : 'bg-panel-light border-panel-border text-text-primary'
            }`}
          >
            {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-success shrink-0" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-danger shrink-0" />}
            {toast.type === 'warning' && <AlertCircle className="w-5 h-5 text-warning shrink-0" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-brand shrink-0" />}

            <span className="flex-1 text-sm font-medium leading-relaxed">{toast.message}</span>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-text-secondary hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
