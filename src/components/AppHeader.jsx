import React, { useState, useEffect } from 'react';
import { 
  Database, Terminal, BookOpen, BarChart3, Settings, 
  LayoutDashboard, RefreshCw, CheckCircle2, Sun, Moon, 
  ArrowLeft, User, Cloud, Menu, X, ChevronRight, Sparkles
} from 'lucide-react';

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
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const percentage = Math.round((solvedCount / totalCount) * 100) || 0;

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, desc: 'Question matrix & readiness metrics' },
    { id: 'interview', label: 'Interview Questions', icon: Sparkles, desc: '50 Common logic-based interview questions' },
    { id: 'practice', label: 'Practice', icon: Terminal, desc: 'Interactive SQL IDE & execution' },
    { id: 'revision', label: 'Revision', icon: BookOpen, desc: 'Interview cheatsheets & SQL syntax' },
    { id: 'progress', label: 'Progress', icon: BarChart3, desc: 'Detailed analytics & export/import' },
    { id: 'settings', label: 'Settings', icon: Settings, desc: 'Preferences, engine & cloud sync' },
  ];

  // Close nav menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isNavMenuOpen) {
        setIsNavMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isNavMenuOpen]);

  const handleNavClick = (id) => {
    setActivePage(id);
    setIsNavMenuOpen(false);
  };

  return (
    <header className="h-14 border-b border-panel-border bg-panel/95 backdrop-blur-md px-4 flex items-center justify-between select-none z-30 sticky top-0 shadow-xs transition-colors">
      {/* Brand & Hamburger Platform Identity */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Hamburger Menu Toggle Button */}
        <button
          onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
          title={isNavMenuOpen ? "Close menu" : "Open navigation menu"}
          className={`flex items-center justify-center p-2 rounded-lg border transition-all cursor-pointer ${
            isNavMenuOpen 
              ? 'bg-brand text-white border-brand shadow-xs' 
              : 'bg-panel-light hover:bg-panel-lighter border-panel-border text-text-primary hover:text-brand'
          }`}
          aria-expanded={isNavMenuOpen}
        >
          {isNavMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

        {/* Logo and Brand */}
        <button
          onClick={() => { setActivePage('dashboard'); setIsNavMenuOpen(false); }}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
          title="SQLForge — Go to Dashboard"
        >
          <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white shadow-md shadow-brand/20 group-hover:scale-105 transition-transform shrink-0">
            <Terminal className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-text-primary group-hover:text-brand transition-colors">
                SQL<span className="text-brand">Forge</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-surface text-emerald-800 dark:text-emerald-300 border border-brand/30 px-1.5 py-0.5 rounded hidden sm:inline-block">
                DEV PLATFORM
              </span>
            </div>
            <div className="text-[11px] text-text-secondary leading-none hidden lg:block font-medium">
              Forge Your SQL Skills.
            </div>
          </div>
        </button>

        {/* Current Active Page Pill */}
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-panel-light border border-panel-border text-xs text-text-secondary">
          <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
          <span className="capitalize font-semibold text-text-primary">{activePage}</span>
        </div>

        {/* Desktop Quick Switch Buttons */}
        <div className="hidden xl:flex items-center gap-1.5 pl-2 border-l border-panel-border">
          <button
            onClick={() => setActivePage('interview')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
              activePage === 'interview'
                ? 'bg-brand text-white shadow-xs'
                : 'bg-panel-light hover:bg-panel-lighter border border-panel-border text-text-primary hover:text-brand'
            }`}
            title="50 Common SQL Interview Questions"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interview Questions</span>
            <span className={`text-[10px] font-mono px-1 py-0.2 rounded font-bold ${
              activePage === 'interview' ? 'bg-black/20 text-white' : 'bg-brand-surface text-brand'
            }`}>
              50
            </span>
          </button>
        </div>

        {/* Back to Dashboard Arrow Button (Always visible when in practice view) */}
        {activePage === 'practice' && (
          <button
            onClick={() => setActivePage('dashboard')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-panel-light hover:bg-panel-lighter border border-panel-border text-xs font-semibold text-text-primary hover:text-brand transition-all shadow-xs group cursor-pointer"
            title="Return to Dashboard (Esc)"
          >
            <ArrowLeft className="w-4 h-4 text-brand group-hover:-translate-x-1 transition-transform" />
            <span>Dashboard</span>
            <span className="hidden lg:inline text-text-muted font-normal font-mono text-[10px] ml-1">
              / Q{currentQuestionId}
            </span>
          </button>
        )}
      </div>

      {/* Hamburger Slide-Over Navigation Drawer */}
      {isNavMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsNavMenuOpen(false)}
            className="fixed inset-0 top-14 bg-black/40 backdrop-blur-xs z-40 transition-opacity animate-in fade-in duration-200"
          />

          {/* Full-Height Drawer Menu (Side fully till the bottom) */}
          <div className="fixed top-14 left-0 bottom-0 w-72 sm:w-80 h-[calc(100vh-3.5rem)] bg-panel border-r border-panel-border shadow-2xl z-50 p-4 flex flex-col justify-between animate-in slide-in-from-left duration-200 select-none">
            {/* Top Navigation Items */}
            <div className="space-y-4 overflow-y-auto flex-1 pr-1">
              <div className="flex items-center justify-between pb-2 border-b border-panel-border">
                <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted font-mono">
                  Platform Navigation
                </span>
                <span className="text-[10px] font-mono bg-brand-surface text-brand px-1.5 py-0.5 rounded font-bold">
                  SQLForge v1.0
                </span>
              </div>

              <nav className="space-y-1.5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-brand-surface text-brand border border-brand/30 shadow-xs font-bold'
                          : 'text-text-secondary hover:text-text-primary hover:bg-panel-light border border-transparent font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${isActive ? 'bg-brand text-white shadow-xs' : 'bg-panel-light text-text-secondary'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-text-primary">
                            {item.label}
                          </div>
                          <div className="text-[11px] text-text-muted leading-tight mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"></span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Section Docked Fully at the Bottom */}
            <div className="pt-4 border-t border-panel-border space-y-3 shrink-0">
              {/* Progress Summary */}
              <div className="space-y-1.5 bg-panel-light p-3 rounded-xl border border-panel-border">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-secondary font-medium">Curriculum Progress:</span>
                  <span className="font-mono font-bold text-brand">{solvedCount} / {totalCount} ({percentage}%)</span>
                </div>
                <div className="w-full bg-panel h-2 rounded-full overflow-hidden border border-panel-border">
                  <div className="bg-brand h-full rounded-full transition-all duration-500" style={{ width: `${percentage}%` }} />
                </div>
              </div>

              {/* Database quick info in drawer */}
              <div className="flex items-center justify-between text-[11px] text-text-muted px-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-mono font-medium text-text-secondary">SQL_Interview_Practice</span>
                </span>
                <span className="font-mono text-text-muted">74 Rows</span>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Right Controls: Database status & Progress widget */}
      <div className="flex items-center gap-3">
        {/* Active Database Pill */}
        <button
          onClick={onOpenDatabaseModal}
          title="Click to inspect Master Database (SQL_Interview_Practice) & all 5 relational tables"
          className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-panel-light hover:bg-panel-lighter border border-panel-border text-xs text-text-secondary hover:text-text-primary transition-all cursor-pointer group"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-mono text-[11px] text-text-primary group-hover:text-brand font-medium">
            DB: SQL_Interview_Practice
          </span>
          <span className="text-[10px] text-amber-600 dark:text-amber-400 font-mono bg-amber-500/10 px-1.5 py-0.2 rounded border border-amber-500/20 font-semibold">
            5 Tables (74 Rows)
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
            {String(activeProfile || 'Akhil').charAt(0).toUpperCase()}
          </div>
          <span className="font-medium text-text-primary group-hover:text-brand max-w-[90px] sm:max-w-[120px] truncate">
            {String(activeProfile || 'Akhil')}
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
