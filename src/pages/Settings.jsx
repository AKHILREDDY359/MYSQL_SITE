import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, Database, RefreshCw, 
  ShieldCheck, AlertTriangle, HardDrive, Cpu, ExternalLink, 
  Check, Server, Sun, Moon 
} from 'lucide-react';
import ConfirmDialog from '../components/ConfirmDialog.jsx';
import { resetProgress } from '../services/progressService.js';
import { useToast } from '../components/Toast.jsx';

export default function Settings({ onResetDb, isDbResetting, onRefreshData, theme = 'dark', onToggleTheme, setTheme }) {
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);
  const { addToast } = useToast();

  const handleResetDb = async () => {
    try {
      await onResetDb();
      addToast('Database reset successfully to original 20 seed rows.', 'success');
    } catch (err) {
      addToast('Failed to reset database: ' + err.message, 'error');
    }
  };

  const handleConfirmResetProgress = () => {
    resetProgress();
    setIsResetDialogOpen(false);
    onRefreshData();
    addToast('All local storage progress cleared.', 'info');
  };

  return (
    <div className="flex-1 overflow-y-auto bg-background p-6 space-y-6 max-w-5xl mx-auto w-full">
      <div className="border-b border-panel-border pb-4">
        <h1 className="text-2xl font-bold text-text-primary tracking-tight flex items-center gap-2">
          <SettingsIcon className="w-6 h-6 text-brand" />
          <span>Platform Settings & Architecture</span>
        </h1>
        <p className="text-xs text-text-secondary mt-1">
          Database engine information, SQLite/MySQL compatibility documentation, and local storage controls.
        </p>
      </div>

      {/* Theme & Appearance Card */}
      <div className="p-6 rounded-2xl bg-panel border border-panel-border space-y-4">
        <div className="flex items-center gap-2">
          <Sun className="w-5 h-5 text-amber-400" />
          <h3 className="text-base font-bold text-text-primary">
            Appearance & Workspace Theme
          </h3>
        </div>
        <p className="text-xs text-text-secondary">
          Choose your preferred developer theme. Your setting is saved locally and applied across the entire workspace, code editor, and data viewers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          {/* Dark Theme Option */}
          <div
            onClick={() => setTheme('dark')}
            className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
              theme === 'dark'
                ? 'bg-brand/10 border-brand ring-1 ring-brand'
                : 'bg-panel-light hover:bg-panel-hover border-panel-border'
            }`}
          >
            <div className="p-2.5 rounded-lg bg-[#0E1526] text-amber-400 border border-panel-border shrink-0">
              <Moon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-primary">Dark Developer Theme</span>
                {theme === 'dark' && <Check className="w-4 h-4 text-brand" />}
              </div>
              <p className="text-[11px] text-text-secondary mt-1">
                Deep navy background (#0B1020) inspired by VS Code and LeetCode for low eye-strain during practice.
              </p>
            </div>
          </div>

          {/* Light Theme Option */}
          <div
            onClick={() => setTheme('light')}
            className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
              theme === 'light'
                ? 'bg-brand/10 border-brand ring-1 ring-brand'
                : 'bg-panel-light hover:bg-panel-hover border-panel-border'
            }`}
          >
            <div className="p-2.5 rounded-lg bg-white text-blue-600 border border-gray-200 shrink-0 shadow-sm">
              <Sun className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-primary">Clean Light Theme</span>
                {theme === 'light' && <Check className="w-4 h-4 text-brand" />}
              </div>
              <p className="text-[11px] text-text-secondary mt-1">
                Crisp daytime interface with high-contrast text, clean borders, and white editor background.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Database Engine Information Card */}
      <div className="p-6 rounded-2xl bg-panel border border-panel-border space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-brand/10 border border-brand/20 text-brand">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-text-primary">
                In-Memory Database Engine
              </h3>
              <p className="text-xs text-text-secondary">
                Running locally in browser via WebAssembly
              </p>
            </div>
          </div>

          <button
            onClick={handleResetDb}
            disabled={isDbResetting}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-panel-light hover:bg-panel-lighter border border-panel-border text-xs font-semibold text-text-primary transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isDbResetting ? 'animate-spin text-brand' : ''}`} />
            <span>Reset Database Seed</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3 rounded-lg bg-panel-light border border-panel-border">
            <span className="text-[11px] text-text-muted uppercase tracking-wider block">Database Name</span>
            <span className="font-mono text-xs font-bold text-text-primary mt-1 block">SQL_Interview_Practice</span>
          </div>

          <div className="p-3 rounded-lg bg-panel-light border border-panel-border">
            <span className="text-[11px] text-text-muted uppercase tracking-wider block">Engine Runtime</span>
            <span className="font-mono text-xs font-bold text-emerald-400 mt-1 block">SQL.js v1.12.0 (WASM)</span>
          </div>

          <div className="p-3 rounded-lg bg-panel-light border border-panel-border">
            <span className="text-[11px] text-text-muted uppercase tracking-wider block">Seeded Records</span>
            <span className="font-mono text-xs font-bold text-brand mt-1 block">Employees (20 Rows)</span>
          </div>
        </div>
      </div>

      {/* SQLite vs MySQL Compatibility Documentation */}
      <div className="p-6 rounded-2xl bg-panel border border-panel-border space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <h3 className="text-base font-bold text-text-primary">
            MySQL vs. SQLite Compatibility Architecture
          </h3>
        </div>

        <p className="text-xs text-text-secondary leading-relaxed">
          <strong>Important Disclosure:</strong> For zero network latency, instant feedback, and 100% offline client-side safety, SQL Sprint runs an in-memory <strong>SQLite WebAssembly</strong> database engine directly in the user’s browser. All 50 curriculum questions (covering standard ANSI WHERE, comparison operators, IN, BETWEEN, LIKE, aggregates, GROUP BY, HAVING, and ORDER BY) execute identically across both MySQL 8.0 and SQLite 3.
        </p>

        <div className="border border-panel-border rounded-xl overflow-hidden bg-panel-light">
          <table className="w-full text-left text-xs">
            <thead className="bg-panel border-b border-panel-border text-text-secondary">
              <tr>
                <th className="py-2.5 px-4 font-semibold">Feature / Operator</th>
                <th className="py-2.5 px-4 font-semibold text-brand">MySQL 8.0</th>
                <th className="py-2.5 px-4 font-semibold text-emerald-400">SQLite 3 (Current Engine)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-panel-border/60">
              <tr>
                <td className="py-2.5 px-4 font-medium text-text-primary">Standard Clauses (WHERE, GROUP BY, HAVING, ORDER BY)</td>
                <td className="py-2.5 px-4 text-text-secondary">Fully supported (ANSI SQL:2016)</td>
                <td className="py-2.5 px-4 text-emerald-300">100% Supported & Identical</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-text-primary">Pattern Matching (LIKE %, _)</td>
                <td className="py-2.5 px-4 text-text-secondary">Case-insensitive by default</td>
                <td className="py-2.5 px-4 text-emerald-300">Case-insensitive for ASCII text</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-text-primary">Regular Expressions</td>
                <td className="py-2.5 px-4 text-text-secondary"><code className="font-mono text-brand">REGEXP</code> or <code className="font-mono text-brand">RLIKE</code></td>
                <td className="py-2.5 px-4 text-text-muted"><code className="font-mono">LIKE</code> / <code className="font-mono">GLOB</code></td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-text-primary">String Concatenation</td>
                <td className="py-2.5 px-4 text-text-secondary"><code className="font-mono text-brand">CONCAT(str1, str2)</code></td>
                <td className="py-2.5 px-4 text-emerald-300"><code className="font-mono">str1 || str2</code></td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-text-primary">Current Timestamp</td>
                <td className="py-2.5 px-4 text-text-secondary"><code className="font-mono text-brand">NOW()</code> or <code className="font-mono text-brand">CURRENT_TIMESTAMP</code></td>
                <td className="py-2.5 px-4 text-emerald-300"><code className="font-mono">DATETIME('now')</code> or <code className="font-mono">CURRENT_TIMESTAMP</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Future Live MySQL Backend Integration Blueprint */}
        <div className="p-4 rounded-xl bg-panel-light border border-panel-border space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-brand">
            <Server className="w-4 h-4" />
            <span>Future MySQL Backend Integration Blueprint</span>
          </div>
          <p className="text-[11px] text-text-secondary leading-relaxed">
            The platform architecture is designed with strict service separation. To hook this up to a live remote MySQL 8.0 server in production, replace <code className="font-mono text-text-primary">databaseEngine.js</code> with an API client pointing to a backend endpoint (e.g. Node/Express + <code className="font-mono text-text-primary">mysql2</code> connection pool) that executes read-only transactions. The UI components and answer checker will work without any modifications!
          </p>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/30 space-y-4">
        <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span>Danger Zone: Reset All Local Data</span>
        </div>
        <p className="text-xs text-text-secondary leading-relaxed">
          Clear all locally saved question drafts, question solved badges, and attempt logs from browser localStorage.
        </p>

        <button
          onClick={() => setIsResetDialogOpen(true)}
          className="px-4 py-2 rounded-lg bg-danger hover:bg-red-600 text-white font-semibold text-xs transition-colors shadow-md shadow-danger/20"
        >
          Clear Local Progress & Saved Drafts
        </button>
      </div>

      {/* Confirm Dialog */}
      <ConfirmDialog
        isOpen={isResetDialogOpen}
        title="Reset All Local Data?"
        message="This will wipe all completed question marks, attempt logs, and saved SQL drafts from your browser. Are you sure?"
        confirmText="Yes, Wipe All Local Data"
        cancelText="Cancel"
        isDanger={true}
        onConfirm={handleConfirmResetProgress}
        onCancel={() => setIsResetDialogOpen(false)}
      />
    </div>
  );
}
