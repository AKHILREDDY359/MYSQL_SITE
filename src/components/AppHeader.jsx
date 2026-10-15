import React from 'react';
import { Database, Terminal, BookOpen, BarChart3, Settings, LayoutDashboard, RefreshCw, CheckCircle2, Sun, Moon } from 'lucide-react';

export default function AppHeader({ 
  activePage, 
  setActivePage, 
  solvedCount = 0, 
  totalCount = 50, 
  onResetDb, 
  isDbResetting, 
  onOpenDatabaseModal,
  theme = 'dark',
  onToggleTheme
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
    <header className="h-14 border-b border-panel-border bg-panel/90 backdrop-blur-md px-4 flex items-center justify-between select-none z-30 sticky top-0">
      {/* Brand & Platform Identity */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => setActivePage('dashboard')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand to-blue-700 flex items-center justify-center text-white shadow-lg shadow-brand/20 group-hover:scale-105 transition-transform">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-brand transition-colors">
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
                    ? 'bg-brand/15 text-brand border border-brand/30 shadow-sm'
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
          className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-panel-light hover:bg-panel-border border border-panel-border text-xs text-text-secondary hover:text-text-primary transition-all cursor-pointer group"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono text-[11px] text-text-primary group-hover:text-brand font-medium">
            DB: SQL_Interview_Practice
          </span>
          <span className="text-[10px] text-amber-400 font-mono bg-amber-400/10 px-1.5 py-0.2 rounded border border-amber-400/20">
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

        {/* Theme Toggle Button */}
        <button
          onClick={onToggleTheme}
          title={theme === 'dark' ? "Switch to Light Theme" : "Switch to Dark Theme"}
          className="p-1.5 rounded-md text-text-secondary hover:text-text-primary hover:bg-panel-light border border-transparent hover:border-panel-border transition-colors cursor-pointer"
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
          ) : (
            <Moon className="w-4 h-4 text-blue-600 hover:-rotate-12 transition-transform" />
          )}
        </button>

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
