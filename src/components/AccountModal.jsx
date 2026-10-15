import React, { useState, useEffect } from 'react';
import { 
  User, Cloud, CloudOff, CheckCircle2, LogIn, UserPlus, 
  LogOut, RefreshCw, Key, ShieldCheck, Database, X, 
  ArrowRight, Download, Upload, Sparkles, Copy, Check 
} from 'lucide-react';
import { 
  getActiveProfile, setActiveProfile, getSavedProfiles,
  signInWithEmail, signUpWithEmail, signOutUser, getCurrentAuthUser 
} from '../services/authService.js';
import { 
  isSupabaseConfigured, getSupabaseCredentials, 
  saveSupabaseCredentials, clearSupabaseCredentials 
} from '../services/supabaseClient.js';
import { 
  fetchProgressFromCloud, syncProgressToCloud, getAccountProgress 
} from '../services/cloudProgressService.js';
import { exportProgressData, importProgressData } from '../utils/exportImport.js';
import { useToast } from './Toast.jsx';

export default function AccountModal({ isOpen, onClose, onProgressUpdated }) {
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'cloud' | 'setup'
  const [profileName, setProfileName] = useState(() => getActiveProfile());
  const [savedProfiles, setSavedProfiles] = useState(() => getSavedProfiles());
  const [newProfileInput, setNewProfileInput] = useState('');
  
  // Auth Form State
  const [authMode, setAuthMode] = useState('signin'); // 'signin' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  // Supabase Config State
  const [supabaseUrl, setSupabaseUrl] = useState('');
  const [supabaseKey, setSupabaseKey] = useState('');
  const [isConfigured, setIsConfigured] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  const { addToast } = useToast();

  useEffect(() => {
    if (isOpen) {
      setProfileName(getActiveProfile());
      setSavedProfiles(getSavedProfiles());
      setIsConfigured(isSupabaseConfigured());
      const creds = getSupabaseCredentials();
      setSupabaseUrl(creds.url);
      setSupabaseKey(creds.key);

      getCurrentAuthUser().then(user => {
        setAuthUser(user);
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSwitchProfile = (name) => {
    setActiveProfile(name);
    setProfileName(name);
    onProgressUpdated();
    addToast(`Switched active practice profile to "${name}"`, 'success');
  };

  const handleCreateProfile = (e) => {
    e.preventDefault();
    if (!newProfileInput.trim()) return;
    const name = setActiveProfile(newProfileInput.trim());
    setProfileName(name);
    setSavedProfiles(getSavedProfiles());
    setNewProfileInput('');
    onProgressUpdated();
    addToast(`Created and switched to profile "${name}"`, 'success');
  };

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      addToast('Please enter both email and password', 'warning');
      return;
    }

    try {
      setIsAuthLoading(true);
      if (authMode === 'signup') {
        const res = await signUpWithEmail(email, password);
        setAuthUser(res.user);
        addToast('Sign up successful! Welcome to SQL Sprint.', 'success');
      } else {
        const res = await signInWithEmail(email, password);
        setAuthUser(res.user);
        addToast('Welcome back! Cloud progress loaded.', 'success');
      }

      // Sync/load cloud progress
      await fetchProgressFromCloud();
      onProgressUpdated();
      setProfileName(getActiveProfile());
    } catch (err) {
      addToast(err.message || 'Authentication failed', 'error');
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
      setAuthUser(null);
      addToast('Signed out from cloud account', 'info');
    } catch (err) {
      addToast('Sign out error: ' + err.message, 'error');
    }
  };

  const handleSaveCredentials = (e) => {
    e.preventDefault();
    if (!supabaseUrl.trim() || !supabaseKey.trim()) {
      addToast('Please enter both Supabase URL and Anon Key', 'warning');
      return;
    }
    saveSupabaseCredentials(supabaseUrl, supabaseKey);
    setIsConfigured(true);
    addToast('Supabase credentials saved successfully!', 'success');
  };

  const handleManualSync = async () => {
    try {
      setIsSyncing(true);
      if (authUser) {
        await syncProgressToCloud(getAccountProgress());
        await fetchProgressFromCloud();
        onProgressUpdated();
        addToast('Cloud practice progress synchronized successfully!', 'success');
      } else {
        addToast('Sign in to your Supabase cloud account to sync.', 'info');
      }
    } catch (err) {
      addToast('Sync failed: ' + err.message, 'error');
    } finally {
      setIsSyncing(false);
    }
  };

  const handleCopySql = () => {
    const sql = `-- Run this in your Supabase SQL Editor:
create table if not exists public.user_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  question_id int not null,
  status text not null,
  draft_sql text,
  attempts_count int default 0,
  is_bookmarked boolean default false,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, question_id)
);

alter table public.user_progress enable row level security;

create policy "Users can manage their own progress"
  on public.user_progress for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);`;

    navigator.clipboard.writeText(sql);
    setCopiedSql(true);
    addToast('SQL table schema copied to clipboard', 'info');
    setTimeout(() => setCopiedSql(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in select-none">
      <div className="relative w-full max-w-xl rounded-2xl bg-panel border border-panel-border shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-panel-border flex items-center justify-between bg-panel-light/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-text-primary">
                Account & Practice Synchronization
              </h2>
              <p className="text-xs text-text-secondary">
                Keep your solved questions, notes, and drafts saved across sessions
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-text-secondary hover:text-text-primary hover:bg-panel border border-transparent hover:border-panel-border transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-panel-border bg-panel px-6 pt-2 gap-4">
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-2.5 text-xs font-semibold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'profile'
                ? 'border-brand text-brand'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Practice Profiles</span>
          </button>

          <button
            onClick={() => setActiveTab('cloud')}
            className={`pb-2.5 text-xs font-semibold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'cloud'
                ? 'border-brand text-brand'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            <Cloud className="w-3.5 h-3.5" />
            <span>Cloud Sync (Supabase)</span>
            {authUser ? (
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            ) : isConfigured ? (
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            ) : null}
          </button>

          <button
            onClick={() => setActiveTab('setup')}
            className={`pb-2.5 text-xs font-semibold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'setup'
                ? 'border-brand text-brand'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            <Key className="w-3.5 h-3.5" />
            <span>Setup Cloud Database</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* TAB 1: Profile & Local Account Management */}
          {activeTab === 'profile' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-panel-light/60 border border-panel-border flex items-center justify-between">
                <div>
                  <div className="text-xs text-text-secondary">Current Active Practice Profile:</div>
                  <div className="text-lg font-bold text-text-primary flex items-center gap-2 mt-0.5">
                    <span className="font-mono text-brand">{profileName}</span>
                    {authUser ? (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 font-semibold flex items-center gap-1">
                        <Cloud className="w-3 h-3" /> Cloud Synced
                      </span>
                    ) : (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-panel border border-panel-border text-text-muted font-normal">
                        Device Storage
                      </span>
                    )}
                  </div>
                </div>

                {authUser ? (
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-panel hover:bg-panel-border border border-panel-border text-xs text-danger font-medium transition-colors cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                ) : null}
              </div>

              {/* Saved Profiles Switcher */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                  Switch or Select Profile:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {savedProfiles.map((p) => {
                    const isCurrent = p === profileName;
                    return (
                      <button
                        key={p}
                        onClick={() => handleSwitchProfile(p)}
                        className={`p-2.5 rounded-lg border text-left text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${
                          isCurrent
                            ? 'bg-brand/10 border-brand/40 text-brand shadow-xs'
                            : 'bg-panel-light hover:bg-panel-border border-panel-border text-text-primary'
                        }`}
                      >
                        <span className="truncate">{p}</span>
                        {isCurrent && <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Create New Profile Form */}
              <form onSubmit={handleCreateProfile} className="space-y-2 pt-2 border-t border-panel-border">
                <label className="text-xs font-semibold text-text-secondary">
                  Create New Practice Account / Profile:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter name (e.g. Akhil, Placement_Round1)..."
                    value={newProfileInput}
                    onChange={(e) => setNewProfileInput(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg bg-panel-light border border-panel-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-brand hover:bg-brand-hover text-white text-xs font-semibold transition-all shadow-xs cursor-pointer"
                  >
                    Create
                  </button>
                </div>
              </form>

              {/* Quick Backup Export/Import */}
              <div className="p-3.5 rounded-xl bg-panel-light/40 border border-panel-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-semibold text-text-primary">Manual Backup (.json)</span>
                  <p className="text-text-muted text-[11px] mt-0.5">
                    Export your solved practice history or restore it anytime.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={exportProgressData}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-panel hover:bg-panel-border border border-panel-border text-text-primary font-medium transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Supabase Cloud Auth */}
          {activeTab === 'cloud' && (
            <div className="space-y-4">
              {authUser ? (
                <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono text-sm">
                        {authUser.email?.[0].toUpperCase()}
                      </div>
                      <div>
                        <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                          Cloud Account Active
                        </div>
                        <div className="text-sm font-bold text-text-primary">{authUser.email}</div>
                      </div>
                    </div>

                    <button
                      onClick={handleManualSync}
                      disabled={isSyncing}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs transition-all cursor-pointer disabled:opacity-50"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                      <span>{isSyncing ? 'Syncing...' : 'Sync Cloud'}</span>
                    </button>
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed">
                    All your solved SQL interview questions, query drafts, and bookmarks automatically sync to your Supabase PostgreSQL cloud account. You can log in on any laptop, phone, or browser without losing your progress.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-panel-border">
                    <span className="text-xs font-bold text-text-primary uppercase tracking-wider">
                      {authMode === 'signin' ? 'Sign In to Cloud Account' : 'Create Free Cloud Account'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
                      className="text-xs text-brand hover:underline font-medium cursor-pointer"
                    >
                      {authMode === 'signin' ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
                    </button>
                  </div>

                  <form onSubmit={handleAuthSubmit} className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-text-secondary">Email Address:</label>
                      <input
                        type="email"
                        required
                        placeholder="student@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-panel-light border border-panel-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-text-secondary">Password:</label>
                      <input
                        type="password"
                        required
                        placeholder="••••••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-panel-light border border-panel-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isAuthLoading}
                      className="w-full py-2.5 rounded-lg bg-brand hover:bg-brand-hover text-white text-xs font-semibold shadow-md shadow-brand/20 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {authMode === 'signin' ? <LogIn className="w-3.5 h-3.5" /> : <UserPlus className="w-3.5 h-3.5" />}
                      <span>{isAuthLoading ? 'Processing...' : authMode === 'signin' ? 'Sign In & Sync Progress' : 'Sign Up Free Account'}</span>
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Cloud Database Credentials & Schema Setup */}
          {activeTab === 'setup' && (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-panel-light/60 border border-panel-border space-y-3">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-text-primary flex items-center gap-1.5">
                    <Database className="w-4 h-4 text-emerald-400" />
                    <span>Supabase Cloud Database Connection</span>
                  </div>
                  {isConfigured ? (
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-mono">
                      Configured
                    </span>
                  ) : (
                    <span className="text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded font-mono">
                      Not Configured
                    </span>
                  )}
                </div>

                <p className="text-text-secondary leading-relaxed">
                  To sync across all devices via Supabase, enter your project's URL and Public Anon Key below (found in your Supabase Dashboard under <strong>Project Settings → API</strong>):
                </p>

                <form onSubmit={handleSaveCredentials} className="space-y-2 pt-1">
                  <div>
                    <label className="text-[11px] font-medium text-text-secondary">Project URL:</label>
                    <input
                      type="url"
                      placeholder="https://xyzcompany.supabase.co"
                      value={supabaseUrl}
                      onChange={(e) => setSupabaseUrl(e.target.value)}
                      className="w-full mt-1 px-3 py-1.5 rounded-lg bg-panel border border-panel-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-text-secondary">Anon Public Key:</label>
                    <input
                      type="password"
                      placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6..."
                      value={supabaseKey}
                      onChange={(e) => setSupabaseKey(e.target.value)}
                      className="w-full mt-1 px-3 py-1.5 rounded-lg bg-panel border border-panel-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand font-mono"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all cursor-pointer shadow-xs"
                    >
                      Save Credentials
                    </button>
                    {isConfigured && (
                      <button
                        type="button"
                        onClick={() => {
                          clearSupabaseCredentials();
                          setIsConfigured(false);
                          setSupabaseUrl('');
                          setSupabaseKey('');
                          addToast('Supabase credentials cleared', 'info');
                        }}
                        className="px-3 py-2 rounded-lg bg-panel hover:bg-panel-border border border-panel-border text-text-secondary hover:text-danger font-medium transition-colors cursor-pointer"
                      >
                        Disconnect
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Supabase SQL Migration Helper */}
              <div className="p-4 rounded-xl bg-panel border border-panel-border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-text-primary">
                    1-Click Supabase Table Schema (SQL)
                  </span>
                  <button
                    onClick={handleCopySql}
                    className="flex items-center gap-1 text-[11px] text-brand hover:underline cursor-pointer"
                  >
                    {copiedSql ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSql ? 'Copied' : 'Copy SQL'}</span>
                  </button>
                </div>
                <p className="text-text-secondary text-[11px]">
                  Copy this SQL and paste it into your <strong>Supabase SQL Editor</strong> to create the secure `user_progress` table with Row-Level Security:
                </p>
                <pre className="p-3 rounded-lg bg-panel-light border border-panel-border font-mono text-[11px] text-text-primary overflow-x-auto max-h-36">
{`create table if not exists public.user_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  question_id int not null,
  status text not null,
  draft_sql text,
  attempts_count int default 0,
  is_bookmarked boolean default false,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, question_id)
);

alter table public.user_progress enable row level security;

create policy "Users can manage their own progress"
  on public.user_progress for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);`}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
