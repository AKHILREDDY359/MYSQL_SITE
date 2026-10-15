import React from 'react';
import { Database, Terminal, BookOpen, BarChart3, Settings, LayoutDashboard, RefreshCw, CheckCircle2, Sun, Moon, ArrowLeft, User, Cloud } from 'lucide-react';

export default function AppHeader({ 
  activePage, 
  setActivePage, 
  solvedCount = 0, 
  totalCount = 50, 
  onResetDb, 
  isDbResetting, 
  onOpenDatabaseModal,
  theme = 'dark',
  onToggleTheme,
  onSelectTheme,
  currentQuestionId = 1,
  onOpenAccountModal,
  activeProfile = 'Akhil',
  authUser = null
}) {
  const percentage = Math.round((solvedCount / totalCount) * 100) || 0;

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'practice', label: 'Practice', icon: Terminal },
    { id: 'revision', label: 'Revision', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <header className="h-14 border-b border-panel-border bg-panel/95 backdrop-blur-md px-4 flex items-center justify-between select-none z-30 sticky top-0 shadow-sm transition-colors">
      {/* Brand & Platform Identity */}
      <div className="flex items-center gap-4 sm:gap-6">
        <button
          onClick={() => setActivePage('dashboard')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
          title="SQL Sprint - Go to Dashboard"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand to-blue-700 flex items-center justify-center text-white shadow-lg shadow-brand/20 group-hover:scale-105 transition-transform shrink-0">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-text-primary group-hover:text-brand transition-colors">
                SQL Sprint
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider bg-brand/15 text-brand border border-brand/30 px-1.5 py-0.5 rounded">
                Interview IDE
              </span>
            </div>
            <div className="text-[11px] text-text-secondary leading-none hidden sm:block">
              Interactive Placement Practice
            </div>
          </div>
        </button>

        {/* Back to Dashboard Arrow Button (Always visible when in practice view) */}
        {activePage === 'practice' && (
          <button
            onClick={() => setActivePage('dashboard')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-panel-light hover:bg-panel-lighter border border-panel-border text-xs font-semibold text-text-primary hover:text-brand transition-all shadow-sm group cursor-pointer"
            title="Return to Dashboard (Esc)"
          >
            <ArrowLeft className="w-4 h-4 text-brand group-hover:-translate-x-1 transition-transform" />
            <span>Dashboard</span>
            <span className="hidden lg:inline text-text-muted font-normal font-mono text-[10px] ml-1">
              / Q{currentQuestionId}
            </span>
          </button>
        )}

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-brand/15 text-brand border border-brand/30 shadow-sm font-semibold'
                    : 'text-text-secondary hover:text-text-primary hover:bg-panel-light'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Right Controls: Database status & Progress widget */}
      <div className="flex items-center gap-3">
        {/* Active Database Pill */}
        <button
          onClick={onOpenDatabaseModal}
          title="Click to inspect Master Database (SQL_Interview_Practice) & Employees table"
          className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-panel-light hover:bg-panel-lighter border border-panel-border text-xs text-text-secondary hover:text-text-primary transition-all cursor-pointer group"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-mono text-[11px] text-text-primary group-hover:text-brand font-medium">
            DB: SQL_Interview_Practice
          </span>
          <span className="text-[10px] text-amber-600 dark:text-amber-400 font-mono bg-amber-500/10 px-1.5 py-0.2 rounded border border-amber-500/20 font-semibold">
            Employees (20)
          </span>
        </button>

        {/* Progress Counter Pill */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-panel-light border border-panel-border text-xs">
          <CheckCircle2 className="w-3.5 h-3.5 text-success" />
          <span className="text-text-secondary">Solved:</span>
          <span className="font-semibold text-text-primary">
            {solvedCount}/{totalCount}
          </span>
          <span className="text-[11px] text-brand font-medium">({percentage}%)</span>
        </div>

        {/* Practice Account & Cloud Sync Pill */}
        <button
          onClick={onOpenAccountModal}
          title={`Practice Account: "${activeProfile}" (${authUser ? 'Cloud Connected' : 'Local Storage'}). Click to switch profile or sync cloud.`}
          className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-panel-light hover:bg-panel-lighter border border-panel-border text-xs text-text-secondary hover:text-text-primary transition-all cursor-pointer group shadow-xs"
        >
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-brand to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold shrink-0 uppercase shadow-xs">
            {(activeProfile || 'A')[0]}
          </div>
          <span className="font-medium text-text-primary group-hover:text-brand max-w-[90px] sm:max-w-[120px] truncate">
            {activeProfile}
          </span>
          {authUser ? (
            <span className="flex items-center gap-1 text-[10px] text-emerald-500 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 font-semibold" title="Cloud Sync Active">
              <Cloud className="w-3 h-3 text-emerald-500" />
              <span className="hidden xl:inline">Cloud</span>
            </span>
          ) : (
            <span className="text-[10px] text-text-muted font-mono bg-panel px-1.5 py-0.5 rounded border border-panel-border font-medium hidden sm:inline" title="Stored locally on this browser">
              Local
            </span>
          )}
        </button>

        {/* Segmented Dual Theme Switcher (Zero-confusion: shows current theme active, direct one-click selection) */}
        <div className="flex items-center p-0.5 rounded-lg bg-panel-light border border-panel-border shadow-xs">
          <button
            type="button"
            onClick={() => onSelectTheme ? onSelectTheme('light') : (theme !== 'light' && onToggleTheme())}
            title="Clean White Theme"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              theme === 'light'
                ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-900/10'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Sun className={`w-3.5 h-3.5 ${theme === 'light' ? 'text-amber-500 fill-amber-400' : 'text-text-muted'}`} />
            <span>White</span>
          </button>
          <button
            type="button"
            onClick={() => onSelectTheme ? onSelectTheme('dark') : (theme !== 'dark' && onToggleTheme())}
            title="Dark Developer Theme"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              theme === 'dark'
                ? 'bg-brand text-white shadow-sm ring-1 ring-brand/30'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Moon className={`w-3.5 h-3.5 ${theme === 'dark' ? 'fill-white text-white' : 'text-text-muted'}`} />
            <span>Dark</span>
          </button>
        </div>

        {/* Quick Reset DB button */}
        <button
          onClick={onResetDb}
          disabled={isDbResetting}
          title="Reset practice database to initial seed state"
          className="p-1.5 rounded-md text-text-secondary hover:text-text-primary hover:bg-panel-light border border-transparent hover:border-panel-border transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isDbResetting ? 'animate-spin text-brand' : ''}`} />
        </button>

        {/* Mobile Nav Menu Indicator */}
        <div className="flex md:hidden">
          <select
            value={activePage}
            onChange={(e) => setActivePage(e.target.value)}
            className="bg-panel-light border border-panel-border rounded-md px-2 py-1 text-xs text-text-primary focus:outline-none"
          >
            {navItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
