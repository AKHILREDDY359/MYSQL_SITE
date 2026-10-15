import React, { useState, useEffect, useCallback } from 'react';
import AppHeader from './components/AppHeader.jsx';
import Dashboard from './pages/Dashboard.jsx';
import PracticeWorkspace from './pages/PracticeWorkspace.jsx';
import Revision from './pages/Revision.jsx';
import ProgressDashboard from './pages/ProgressDashboard.jsx';
import Settings from './pages/Settings.jsx';
import MasterDatabaseModal from './components/MasterDatabaseModal.jsx';
import AccountModal from './components/AccountModal.jsx';
import { ToastProvider } from './components/Toast.jsx';

import { QUESTIONS } from './data/questionBank.js';
import { 
  getAllProgress, getBookmarks, toggleBookmark, 
  toggleQuestionReview, calculateDashboardMetrics, 
  getLastActiveQuestion 
} from './services/progressService.js';
import { STORAGE_KEYS, loadFromStorage, saveToStorage } from './utils/storage.js';
import { initDatabase, resetDatabase } from './services/databaseEngine.js';
import { getActiveProfile, onAuthStateChanged, getCurrentAuthUser } from './services/authService.js';
import { fetchProgressFromCloud } from './services/cloudProgressService.js';

// Helper to parse route from URL hash
function parseHash(hash) {
  const clean = (hash || '').replace(/^#\/?/, '').trim();
  if (!clean || clean === 'dashboard') {
    return { page: 'dashboard', questionId: null };
  }
  if (clean.startsWith('practice')) {
    const match = clean.match(/^practice(?:[\/?]q?=?(\d+))?/i);
    const qid = match && match[1] ? parseInt(match[1], 10) : null;
    return { page: 'practice', questionId: qid };
  }
  if (clean.startsWith('revision')) {
    return { page: 'revision', questionId: null };
  }
  if (clean.startsWith('progress')) {
    return { page: 'progress', questionId: null };
  }
  if (clean.startsWith('settings')) {
    return { page: 'settings', questionId: null };
  }
  return { page: 'dashboard', questionId: null };
}

export default function App() {
  const [activePage, setActivePage] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      return parseHash(window.location.hash).page;
    }
    return 'dashboard';
  });

  const [questions] = useState(QUESTIONS);

  const [currentQuestion, setCurrentQuestion] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const parsed = parseHash(window.location.hash);
      if (parsed.questionId) {
        const found = QUESTIONS.find(q => q.id === parsed.questionId);
        if (found) return found;
      }
    }
    const lastId = getLastActiveQuestion(1);
    return QUESTIONS.find(q => q.id === lastId) || QUESTIONS[0];
  });

  const [progressMap, setProgressMap] = useState(() => getAllProgress());
  const [bookmarks, setBookmarks] = useState(() => getBookmarks());
  const [metrics, setMetrics] = useState(() => calculateDashboardMetrics(QUESTIONS));
  const [isDbResetting, setIsDbResetting] = useState(false);
  const [isEngineReady, setIsEngineReady] = useState(false);
  const [engineError, setEngineError] = useState(null);
  const [isEngineRetrying, setIsEngineRetrying] = useState(false);
  const [isDatabaseModalOpen, setIsDatabaseModalOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return loadFromStorage(STORAGE_KEYS.THEME, 'light');
  });

  const [editorTheme, setEditorTheme] = useState(() => {
    return loadFromStorage(STORAGE_KEYS.EDITOR_THEME, 'auto');
  });

  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [activeProfile, setActiveProfileState] = useState(() => getActiveProfile());
  const [authUser, setAuthUser] = useState(null);

  // Refresh progress and metrics from storage (Declared early so all hooks can safely use it)
  const refreshProgress = useCallback(() => {
    const currentProg = getAllProgress();
    const currentBm = getBookmarks();
    setProgressMap(currentProg);
    setBookmarks(currentBm);
    setMetrics(calculateDashboardMetrics(questions));
  }, [questions]);

  // Sync site theme with HTML root class, body class, and local storage
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.THEME, theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [theme]);

  // Sync editor theme with local storage
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.EDITOR_THEME, editorTheme);
  }, [editorTheme]);

  // Listen for Supabase authentication state and sync profile & cloud progress
  useEffect(() => {
    getCurrentAuthUser().then(user => {
      if (user) {
        setAuthUser(user);
        const name = user.email ? user.email.split('@')[0] : 'User';
        setActiveProfileState(name);
        fetchProgressFromCloud()
          .then(() => refreshProgress())
          .catch(err => console.warn('Cloud sync on mount error:', err));
      }
    }).catch(err => console.warn('User fetch error:', err));

    const unsubscribe = onAuthStateChanged((user) => {
      setAuthUser(user);
      setActiveProfileState(getActiveProfile());
      if (user) {
        fetchProgressFromCloud()
          .then(() => refreshProgress())
          .catch(err => console.warn('Cloud sync on auth change error:', err));
      }
    });

    return () => {
      if (typeof unsubscribe === 'function') {
        try {
          unsubscribe();
        } catch (e) {}
      }
    };
  }, [refreshProgress]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Determine effective editor theme: 'dark' or 'light'
  const effectiveEditorTheme = editorTheme === 'auto' ? theme : editorTheme;

  const toggleEditorTheme = () => {
    setEditorTheme(prev => {
      if (prev === 'auto') return theme === 'dark' ? 'light' : 'dark';
      if (prev === 'dark') return 'light';
      return 'auto';
    });
  };

  // Navigate to a page and update hash (which automatically pushes to browser history)
  const navigateTo = useCallback((page, questionId = null) => {
    let targetHash = `#/${page}`;
    if (page === 'practice') {
      const qid = questionId || currentQuestion?.id || 1;
      targetHash = `#/practice/${qid}`;
    }
    if (typeof window !== 'undefined' && window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    } else {
      setActivePage(page);
    }
  }, [currentQuestion?.id]);

  // Listen to browser Back and Forward button events (hashchange and popstate)
  useEffect(() => {
    const handleLocationChange = () => {
      const route = parseHash(window.location.hash);
      setActivePage(route.page);
      if (route.page === 'practice' && route.questionId) {
        const found = questions.find(q => q.id === route.questionId);
        if (found) {
          setCurrentQuestion(found);
        }
      }
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);

    // If starting on root URL without hash, set initial history entry without reload
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#/dashboard');
    }

    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, [questions]);

  // Initialize engine and load storage on initial mount
  useEffect(() => {
    async function setup() {
      try {
        setEngineError(null);
        await initDatabase();
        setIsEngineReady(true);
      } catch (err) {
        console.error('Failed to initialize database engine:', err);
        setEngineError(err.message || 'WebAssembly database engine failed to initialize.');
      }
      refreshProgress();
    }
    setup();
  }, [refreshProgress]);

  const handleRetryEngine = async () => {
    try {
      setIsEngineRetrying(true);
      setEngineError(null);
      await initDatabase();
      setIsEngineReady(true);
      refreshProgress();
    } catch (err) {
      console.error('Database engine retry failed:', err);
      setEngineError(err.message || 'Database engine retry failed.');
    } finally {
      setIsEngineRetrying(false);
    }
  };

  // Handle resetting the database
  const handleResetDb = async () => {
    try {
      setIsDbResetting(true);
      await resetDatabase();
      refreshProgress();
    } catch (err) {
      console.error('Reset database failed:', err);
      throw err;
    } finally {
      setIsDbResetting(false);
    }
  };

  const handleToggleBookmark = (qid) => {
    toggleBookmark(qid);
    refreshProgress();
  };

  const handleToggleReview = (qid) => {
    toggleQuestionReview(qid);
    refreshProgress();
  };

  const handleNavigateToQuestion = (q) => {
    setCurrentQuestion(q);
    navigateTo('practice', q.id);
  };

  const handleNavigateToTopicQuestions = (topicTitle) => {
    // Map revision topic or search for relevant questions
    const matchingQ = questions.find(q => 
      q.topic.toLowerCase().includes(topicTitle.toLowerCase()) ||
      topicTitle.toLowerCase().includes(q.topic.toLowerCase())
    ) || questions[0];
    setCurrentQuestion(matchingQ);
    navigateTo('practice', matchingQ.id);
  };

  return (
    <ToastProvider>
      <div className={`flex flex-col h-screen w-screen overflow-hidden bg-background text-text-primary ${theme === 'dark' ? 'dark' : 'light'}`}>
        <AppHeader
          activePage={activePage}
          setActivePage={navigateTo}
          solvedCount={metrics.solved || 0}
          totalCount={questions.length}
          onResetDb={handleResetDb}
          isDbResetting={isDbResetting}
          onOpenDatabaseModal={() => setIsDatabaseModalOpen(true)}
          theme={theme}
          onToggleTheme={toggleTheme}
          onSelectTheme={setTheme}
          currentQuestionId={currentQuestion?.id || 1}
          onOpenAccountModal={() => setIsAccountModalOpen(true)}
          activeProfile={activeProfile}
          authUser={authUser}
        />

        {engineError && (
          <div className="bg-red-500/15 border-b border-red-500/30 px-4 py-2.5 flex items-center justify-between text-xs text-red-700 dark:text-red-300 z-50">
            <div className="flex items-center gap-2">
              <span className="font-bold uppercase tracking-wider bg-red-500/20 text-red-700 dark:text-red-300 px-1.5 py-0.5 rounded text-[10px]">
                Engine Alert
              </span>
              <span>{engineError}</span>
            </div>
            <button
              onClick={handleRetryEngine}
              disabled={isEngineRetrying}
              className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded font-medium transition-colors disabled:opacity-50 cursor-pointer text-xs shrink-0"
            >
              {isEngineRetrying ? 'Retrying...' : 'Retry Engine Load'}
            </button>
          </div>
        )}

        <MasterDatabaseModal
          isOpen={isDatabaseModalOpen}
          onClose={() => setIsDatabaseModalOpen(false)}
          onResetDb={handleResetDb}
          isDbResetting={isDbResetting}
        />

        <AccountModal
          isOpen={isAccountModalOpen}
          onClose={() => setIsAccountModalOpen(false)}
          onProgressUpdated={() => {
            setActiveProfileState(getActiveProfile());
            refreshProgress();
          }}
        />

        <main className="flex-1 flex overflow-hidden">
          {activePage === 'dashboard' && (
            <Dashboard
              metrics={metrics}
              questions={questions}
              onNavigateToQuestion={handleNavigateToQuestion}
              onNavigateToPractice={() => navigateTo('practice')}
              progressMap={progressMap}
              bookmarks={bookmarks}
            />
          )}

          {activePage === 'practice' && (
            <PracticeWorkspace
              questions={questions}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              progressMap={progressMap}
              bookmarks={bookmarks}
              onToggleBookmark={handleToggleBookmark}
              onToggleReview={handleToggleReview}
              onProgressUpdated={refreshProgress}
              onResetDb={handleResetDb}
              isDbResetting={isDbResetting}
              theme={theme}
              editorTheme={editorTheme}
              effectiveEditorTheme={effectiveEditorTheme}
              onToggleEditorTheme={toggleEditorTheme}
              setEditorTheme={setEditorTheme}
              onNavigateToDashboard={() => navigateTo('dashboard')}
            />
          )}

          {activePage === 'revision' && (
            <Revision
              onNavigateToTopicQuestions={handleNavigateToTopicQuestions}
            />
          )}

          {activePage === 'progress' && (
            <ProgressDashboard
              metrics={metrics}
              questions={questions}
              progressMap={progressMap}
              bookmarks={bookmarks}
              onNavigateToQuestion={handleNavigateToQuestion}
              onRefreshData={refreshProgress}
            />
          )}

          {activePage === 'settings' && (
            <Settings
              onResetDb={handleResetDb}
              isDbResetting={isDbResetting}
              onRefreshData={refreshProgress}
              theme={theme}
              onToggleTheme={toggleTheme}
              setTheme={setTheme}
              editorTheme={editorTheme}
              setEditorTheme={setEditorTheme}
              onOpenAccountModal={() => setIsAccountModalOpen(true)}
              activeProfile={activeProfile}
              authUser={authUser}
            />
          )}
        </main>
      </div>
    </ToastProvider>
  );
}
