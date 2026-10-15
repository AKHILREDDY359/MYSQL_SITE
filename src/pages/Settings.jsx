import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, Database, RefreshCw, 
  ShieldCheck, AlertTriangle, HardDrive, Cpu, ExternalLink, 
  Check, Server, Sun, Moon, Code, User, Cloud, ArrowRight 
} from 'lucide-react';
import ConfirmDialog from '../components/ConfirmDialog.jsx';
import { resetProgress } from '../services/progressService.js';
import { useToast } from '../components/Toast.jsx';

export default function Settings({ 
  onResetDb, 
  isDbResetting, 
  onRefreshData, 
  theme = 'dark', 
  onToggleTheme, 
  setTheme,
  editorTheme = 'auto',
  setEditorTheme,
  onOpenAccountModal,
  activeProfile = 'Akhil',
  authUser = null
}) {
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
    <div className="flex-1 overflow-y-auto bg-background px-6 lg:px-8 xl:px-10 py-6 space-y-6 w-full">
      <div className="border-b border-panel-border pb-4">
        <h1 className="text-2xl font-bold text-text-primary tracking-tight flex items-center gap-2">
          <SettingsIcon className="w-6 h-6 text-brand" />
          <span>Platform Settings & Architecture</span>
        </h1>
        <p className="text-xs text-text-secondary mt-1">
          Database engine information, SQLite/MySQL compatibility documentation, and local storage controls.
        </p>
      </div>

      {/* Account & Practice Profile Card */}
      <div className="p-6 rounded-2xl bg-panel border border-panel-border space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand to-indigo-600 flex items-center justify-center text-white text-lg font-bold shadow-md shadow-brand/20">
              {(activeProfile || 'A')[0].toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-bold text-text-primary">
                  Practice Account: {activeProfile}
                </h3>
                {authUser ? (
                  <span className="flex items-center gap-1 text-[11px] text-emerald-500 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-semibold">
                    <Cloud className="w-3.5 h-3.5 text-emerald-500" />
                    Cloud Synced ({authUser.email})
                  </span>
                ) : (
                  <span className="text-[11px] text-text-muted font-mono bg-panel-light px-2 py-0.5 rounded border border-panel-border">
                    Local Device Profile
                  </span>
                )}
              </div>
              <p className="text-xs text-text-secondary mt-0.5">
                {authUser 
                  ? 'Your solved questions and drafts are securely backed up to your Supabase PostgreSQL database.'
                  : 'Your progress is stored per profile on this browser. Connect Supabase to sync across devices!'}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenAccountModal}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand hover:bg-brand-hover text-white text-xs font-semibold shadow-sm transition-all shrink-0 cursor-pointer"
          >
            <User className="w-4 h-4" />
            <span>Manage Accounts & Cloud Sync</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
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
          {/* White / Light Theme Option */}
          <div
            onClick={() => setTheme('light')}
            className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
              theme === 'light'
                ? 'bg-brand/10 border-brand ring-2 ring-brand/30 shadow-sm'
                : 'bg-panel-light hover:bg-panel-hover border-panel-border'
            }`}
          >
            <div className="p-2.5 rounded-lg bg-white text-amber-500 border border-slate-200 shrink-0 shadow-sm">
              <Sun className="w-5 h-5 fill-amber-400 text-amber-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-primary">Clean White Theme</span>
                {theme === 'light' && <Check className="w-4 h-4 text-brand" />}
              </div>
              <p className="text-[11px] text-text-secondary mt-1 leading-relaxed">
                Crisp daytime interface with high-contrast text, pure white panels, and clean slate borders.
              </p>
            </div>
          </div>

          {/* Dark Theme Option */}
          <div
            onClick={() => setTheme('dark')}
            className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
              theme === 'dark'
                ? 'bg-brand/10 border-brand ring-2 ring-brand/30 shadow-sm'
                : 'bg-panel-light hover:bg-panel-hover border-panel-border'
            }`}
          >
            <div className="p-2.5 rounded-lg bg-[#0E1526] text-amber-400 border border-panel-border shrink-0 shadow-sm">
              <Moon className="w-5 h-5 fill-amber-400/20 text-amber-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-primary">Dark Developer Theme</span>
                {theme === 'dark' && <Check className="w-4 h-4 text-brand" />}
              </div>
              <p className="text-[11px] text-text-secondary mt-1 leading-relaxed">
                Deep navy background (#0B1020) inspired by VS Code and LeetCode for low eye-strain during practice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Code Editor Theme Card (Separate / Independent Theme System) */}
      <div className="p-6 rounded-2xl bg-panel border border-panel-border space-y-4">
        <div className="flex items-center gap-2">
          <Code className="w-5 h-5 text-brand" />
          <h3 className="text-base font-bold text-text-primary">
            Code Editor Theme (Independent System)
          </h3>
        </div>
        <p className="text-xs text-text-secondary leading-relaxed">
          Customize Monaco SQL Editor appearance independently. You can have a clean white website with a dark developer editor, keep both in sync, or use a pure white editor.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {/* Auto / Match Site */}
          <div
            onClick={() => setEditorTheme && setEditorTheme('auto')}
            className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
              editorTheme === 'auto'
                ? 'bg-brand/10 border-brand ring-2 ring-brand/30 shadow-sm'
                : 'bg-panel-light hover:bg-panel-hover border-panel-border'
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-primary">Auto (Match Site)</span>
                {editorTheme === 'auto' && <Check className="w-4 h-4 text-brand" />}
              </div>
              <p className="text-[11px] text-text-secondary mt-1 leading-relaxed">
                Dynamically matches site theme ({theme === 'dark' ? 'Dark' : 'White'}).
              </p>
            </div>
            <span className="mt-3 text-[10px] font-mono px-2 py-0.5 rounded bg-panel border border-panel-border text-brand w-fit">
              Active: {theme === 'dark' ? 'Dark' : 'White'}
            </span>
          </div>

          {/* White / Light Editor */}
          <div
            onClick={() => setEditorTheme && setEditorTheme('light')}
            className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
              editorTheme === 'light'
                ? 'bg-brand/10 border-brand ring-2 ring-brand/30 shadow-sm'
                : 'bg-panel-light hover:bg-panel-hover border-panel-border'
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-primary">Pure White Editor</span>
                {editorTheme === 'light' && <Check className="w-4 h-4 text-brand" />}
              </div>
              <p className="text-[11px] text-text-secondary mt-1 leading-relaxed">
                Always keeps the Monaco code editor in crisp white daytime mode.
              </p>
            </div>
            <span className="mt-3 text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-800 border border-slate-200 w-fit shadow-xs">
              Monaco VS Light
            </span>
          </div>

          {/* Dark Developer Editor */}
          <div
            onClick={() => setEditorTheme && setEditorTheme('dark')}
            className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
              editorTheme === 'dark'
                ? 'bg-brand/10 border-brand ring-2 ring-brand/30 shadow-sm'
                : 'bg-panel-light hover:bg-panel-hover border-panel-border'
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-primary">Dark Developer Editor</span>
                {editorTheme === 'dark' && <Check className="w-4 h-4 text-brand" />}
              </div>
              <p className="text-[11px] text-text-secondary mt-1 leading-relaxed">
                Always keeps the Monaco code editor in deep navy (#0E1526) developer mode.
              </p>
            </div>
            <span className="mt-3 text-[10px] font-mono px-2 py-0.5 rounded bg-[#0E1526] text-amber-400 border border-panel-border w-fit shadow-xs">
              Monaco Dark
            </span>
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
      <div className="p-6 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-500/30 space-y-4">
        <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm">
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
