import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { format as formatSql } from 'sql-formatter';
import { 
  Database, HelpCircle, Columns, Maximize2, Minimize2, 
  RefreshCw, CheckCircle2 
} from 'lucide-react';

import QuestionSidebar from '../components/QuestionSidebar.jsx';
import DatabaseExplorer from '../components/DatabaseExplorer.jsx';
import SQLEditor from '../components/SQLEditor.jsx';
import QueryToolbar from '../components/QueryToolbar.jsx';
import ResultsPanel from '../components/ResultsPanel.jsx';
import { executeQuery } from '../services/databaseEngine.js';
import { validateAnswer } from '../services/answerChecker.js';
import { 
  getQuestionDraft, saveQuestionDraft, recordQueryRun, 
  recordAnswerSubmission, setLastActiveQuestion 
} from '../services/progressService.js';
import { useToast } from '../components/Toast.jsx';

export default function PracticeWorkspace({
  questions,
  currentQuestion,
  setCurrentQuestion,
  progressMap,
  bookmarks,
  onToggleBookmark,
  onToggleReview,
  onProgressUpdated,
  onResetDb,
  isDbResetting,
  theme = 'dark'
}) {
  const [leftTab, setLeftTab] = useState('question'); // 'question' | 'database'
  const [userSql, setUserSql] = useState('');
  const [queryResult, setQueryResult] = useState(null);
  const [submissionResult, setSubmissionResult] = useState(null);
  const [activeResultTab, setActiveResultTab] = useState('results'); // 'results' | 'submission' | 'safety'
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editorFontSize, setEditorFontSize] = useState(13);
  const { addToast } = useToast();

  const currentIndex = questions.findIndex((q) => q.id === currentQuestion?.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < questions.length - 1;

  const handlePrevQuestion = useCallback(() => {
    if (hasPrev) {
      setCurrentQuestion(questions[currentIndex - 1]);
    }
  }, [hasPrev, currentIndex, questions, setCurrentQuestion]);

  const handleNextQuestion = useCallback(() => {
    if (hasNext) {
      setCurrentQuestion(questions[currentIndex + 1]);
    }
  }, [hasNext, currentIndex, questions, setCurrentQuestion]);

  // Global Alt+Left / Alt+Right keyboard shortcuts for question navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if (e.altKey && e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevQuestion();
      } else if (e.altKey && e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextQuestion();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrevQuestion, handleNextQuestion]);

  // Load draft when question changes
  useEffect(() => {
    if (currentQuestion) {
      const draft = getQuestionDraft(currentQuestion.id, '');
      setUserSql(draft);
      setQueryResult(null);
      setSubmissionResult(null);
      setActiveResultTab('results');
      setLastActiveQuestion(currentQuestion.id);
    }
  }, [currentQuestion?.id]);

  // Handle SQL changes with auto-save
  const handleSqlChange = (val) => {
    setUserSql(val);
    if (currentQuestion) {
      saveQuestionDraft(currentQuestion.id, val);
    }
  };

  // Run Query Action
  const handleRunQuery = useCallback(async () => {
    if (!userSql || !userSql.trim()) {
      addToast('Please enter a SQL query to execute.', 'warning');
      return;
    }

    try {
      setIsRunning(true);
      const res = await executeQuery(userSql);
      setQueryResult(res);
      setActiveResultTab('results');

      // Record query run for progress tracking (marks as attempted if new)
      if (currentQuestion) {
        recordQueryRun(currentQuestion.id, userSql);
        onProgressUpdated();
      }

      if (res.success) {
        addToast(`Query executed in ${res.executionTimeMs} ms (${res.rowCount} rows)`, 'info');
      } else {
        addToast('Query failed: ' + res.error, 'error');
      }
    } catch (err) {
      setQueryResult({
        success: false,
        error: err.message || 'Execution failed',
        executionTimeMs: 0
      });
      addToast('Execution failed: ' + err.message, 'error');
    } finally {
      setIsRunning(false);
    }
  }, [userSql, currentQuestion, addToast, onProgressUpdated]);

  // Submit Answer Action
  const handleSubmitAnswer = useCallback(async () => {
    if (!userSql || !userSql.trim()) {
      addToast('Please write your SQL query before submitting.', 'warning');
      return;
    }

    try {
      setIsSubmitting(true);
      // 1. Execute user query
      const actualRes = await executeQuery(userSql);
      setQueryResult(actualRes);

      // 2. Validate against expected output
      const expectedOutput = currentQuestion.expectedOutput;
      const validation = validateAnswer(actualRes, expectedOutput, currentQuestion, userSql);
      setSubmissionResult(validation);
      setActiveResultTab('submission');

      // 3. Record in progress tracker
      recordAnswerSubmission(currentQuestion.id, validation.isCorrect, userSql, validation);
      onProgressUpdated();

      if (validation.isCorrect) {
        addToast('Correct! Question marked as Solved 🎉', 'success');
        // Trigger celebratory confetti
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        addToast('Validation mismatch: ' + validation.feedback, 'error');
      }
    } catch (err) {
      setSubmissionResult({
        isCorrect: false,
        feedback: 'Unexpected validation error: ' + err.message
      });
      setActiveResultTab('submission');
    } finally {
      setIsSubmitting(false);
    }
  }, [userSql, currentQuestion, addToast, onProgressUpdated]);

  // Format SQL
  const handleFormatSql = () => {
    if (!userSql || !userSql.trim()) return;
    try {
      const formatted = formatSql(userSql, {
        language: 'sql',
        keywordCase: 'upper',
        tabWidth: 2
      });
      setUserSql(formatted);
      if (currentQuestion) {
        saveQuestionDraft(currentQuestion.id, formatted);
      }
      addToast('SQL query formatted', 'info');
    } catch (err) {
      addToast('Could not format query: ' + err.message, 'warning');
    }
  };

  // Reset Query
  const handleResetQuery = () => {
    setUserSql('');
    if (currentQuestion) {
      saveQuestionDraft(currentQuestion.id, '');
    }
    setQueryResult(null);
    setSubmissionResult(null);
    addToast('Editor reset', 'info');
  };

  // Clear Query
  const handleClearQuery = () => {
    setUserSql('');
    if (currentQuestion) {
      saveQuestionDraft(currentQuestion.id, '');
    }
  };

  // Copy Query
  const handleCopyQuery = () => {
    navigator.clipboard.writeText(userSql);
  };

  // Insert SQL from Database Explorer (e.g. SELECT * FROM Employees;)
  const handleInsertSql = (sqlText) => {
    setUserSql(sqlText);
    if (currentQuestion) {
      saveQuestionDraft(currentQuestion.id, sqlText);
    }
  };

  return (
    <div className="flex-1 flex flex-col lg:flex-row overflow-hidden bg-background">
      {/* LEFT PANEL (~38% Width on Desktop) */}
      <div className="w-full lg:w-[40%] xl:w-[38%] h-1/2 lg:h-full flex flex-col border-b lg:border-b-0 lg:border-r border-panel-border overflow-hidden">
        {/* Left Sub-Header Switcher */}
        <div className="h-10 px-3 bg-panel-light border-b border-panel-border flex items-center justify-between select-none shrink-0">
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setLeftTab('question')}
              className={`flex items-center gap-1.5 py-1.5 px-3 rounded text-xs font-semibold transition-all ${
                leftTab === 'question'
                  ? 'bg-panel border border-panel-border text-brand shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Question Workspace</span>
            </button>
            <button
              onClick={() => setLeftTab('database')}
              className={`flex items-center gap-1.5 py-1.5 px-3 rounded text-xs font-semibold transition-all ${
                leftTab === 'database'
                  ? 'bg-panel border border-panel-border text-brand shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Database className="w-3.5 h-3.5 text-amber-400" />
              <span>Database Explorer</span>
            </button>
          </div>

          <span className="text-[10px] text-text-muted hidden sm:inline-block font-mono">
            Employees (20 records)
          </span>
        </div>

        {/* Left Content Area */}
        <div className="flex-1 overflow-hidden">
          {leftTab === 'question' ? (
            <QuestionSidebar
              questions={questions}
              currentQuestion={currentQuestion}
              onSelectQuestion={setCurrentQuestion}
              progressMap={progressMap}
              bookmarks={bookmarks}
              onToggleBookmark={onToggleBookmark}
              onToggleReview={onToggleReview}
            />
          ) : (
            <DatabaseExplorer
              onInsertSql={handleInsertSql}
              onResetDb={onResetDb}
              isDbResetting={isDbResetting}
            />
          )}
        </div>
      </div>

      {/* RIGHT PANEL (~62% Width on Desktop) */}
      <div className="w-full lg:w-[60%] xl:w-[62%] h-1/2 lg:h-full flex flex-col overflow-hidden bg-panel">
        {/* Toolbar */}
        <QueryToolbar
          onRunQuery={handleRunQuery}
          onSubmitAnswer={handleSubmitAnswer}
          onResetQuery={handleResetQuery}
          onFormatSql={handleFormatSql}
          onClearQuery={handleClearQuery}
          onCopyQuery={handleCopyQuery}
          onPrevQuestion={handlePrevQuestion}
          onNextQuestion={handleNextQuestion}
          hasPrev={hasPrev}
          hasNext={hasNext}
          currentQuestionId={currentQuestion?.id || 1}
          totalQuestions={questions.length}
          isRunning={isRunning}
          isSubmitting={isSubmitting}
        />

        {/* SQL Editor Area (Top Half of Right Panel) */}
        <div className="h-[48%] min-h-[160px] relative border-b border-panel-border">
          <SQLEditor
            value={userSql}
            onChange={handleSqlChange}
            onRunQuery={handleRunQuery}
            fontSize={editorFontSize}
            theme={theme}
          />
        </div>

        {/* Results and Output Area (Bottom Half of Right Panel) */}
        <div className="flex-1 min-h-[160px] overflow-hidden">
          <ResultsPanel
            queryResult={queryResult}
            submissionResult={submissionResult}
            activeTab={activeResultTab}
            setActiveTab={setActiveResultTab}
            onNextQuestion={handleNextQuestion}
            hasNext={hasNext}
          />
        </div>
      </div>
    </div>
  );
}
