import React, { useState, useEffect, useCallback } from 'react';
import AppHeader from './components/AppHeader.jsx';
import Dashboard from './pages/Dashboard.jsx';
import PracticeWorkspace from './pages/PracticeWorkspace.jsx';
import Revision from './pages/Revision.jsx';
import ProgressDashboard from './pages/ProgressDashboard.jsx';
import Settings from './pages/Settings.jsx';
import MasterDatabaseModal from './components/MasterDatabaseModal.jsx';
import { ToastProvider } from './components/Toast.jsx';

import { QUESTIONS } from './data/questionBank.js';
import { 
  getAllProgress, getBookmarks, toggleBookmark, 
  toggleQuestionReview, calculateDashboardMetrics, 
  getLastActiveQuestion 
} from './services/progressService.js';
import { STORAGE_KEYS, loadFromStorage, saveToStorage } from './utils/storage.js';
import { initDatabase, resetDatabase } from './services/databaseEngine.js';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [questions] = useState(QUESTIONS);
  const [currentQuestion, setCurrentQuestion] = useState(() => {
    const lastId = getLastActiveQuestion(1);
    return QUESTIONS.find(q => q.id === lastId) || QUESTIONS[0];
  });
  const [progressMap, setProgressMap] = useState(() => getAllProgress());
  const [bookmarks, setBookmarks] = useState(() => getBookmarks());
  const [metrics, setMetrics] = useState(() => calculateDashboardMetrics(QUESTIONS));
  const [isDbResetting, setIsDbResetting] = useState(false);
  const [isEngineReady, setIsEngineReady] = useState(false);
  const [isDatabaseModalOpen, setIsDatabaseModalOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return loadFromStorage(STORAGE_KEYS.THEME, 'dark');
  });

  // Sync theme with HTML root class and local storage
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.THEME, theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Refresh progress and metrics from storage
  const refreshProgress = useCallback(() => {
    const currentProg = getAllProgress();
    const currentBm = getBookmarks();
    setProgressMap(currentProg);
    setBookmarks(currentBm);
    setMetrics(calculateDashboardMetrics(questions));
  }, [questions]);

  // Initialize engine and load storage on initial mount
  useEffect(() => {
    async function setup() {
      try {
        await initDatabase();
        setIsEngineReady(true);
      } catch (err) {
        console.error('Failed to initialize database engine:', err);
      }
      refreshProgress();
    }
    setup();
  }, [refreshProgress]);

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
    setActivePage('practice');
  };

  const handleNavigateToTopicQuestions = (topicTitle) => {
    // Map revision topic or search for relevant questions
    const matchingQ = questions.find(q => 
      q.topic.toLowerCase().includes(topicTitle.toLowerCase()) ||
      topicTitle.toLowerCase().includes(q.topic.toLowerCase())
    ) || questions[0];
    setCurrentQuestion(matchingQ);
    setActivePage('practice');
  };

  return (
    <ToastProvider>
      <div className="flex flex-col h-screen w-screen overflow-hidden bg-background text-text-primary">
        <AppHeader
          activePage={activePage}
          setActivePage={setActivePage}
          solvedCount={metrics.solved || 0}
          totalCount={questions.length}
          onResetDb={handleResetDb}
          isDbResetting={isDbResetting}
          onOpenDatabaseModal={() => setIsDatabaseModalOpen(true)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <MasterDatabaseModal
          isOpen={isDatabaseModalOpen}
          onClose={() => setIsDatabaseModalOpen(false)}
          onResetDb={handleResetDb}
          isDbResetting={isDbResetting}
        />

        <main className="flex-1 flex overflow-hidden">
          {activePage === 'dashboard' && (
            <Dashboard
              metrics={metrics}
              questions={questions}
              onNavigateToQuestion={handleNavigateToQuestion}
              onNavigateToPractice={() => setActivePage('practice')}
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
            />
          )}
        </main>
      </div>
    </ToastProvider>
  );
}
