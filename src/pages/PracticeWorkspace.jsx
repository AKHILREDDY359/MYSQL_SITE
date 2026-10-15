import React, { useState, useEffect, useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';
import { format as formatSql } from 'sql-formatter';
import { 
  Database, HelpCircle, Columns, Maximize2, Minimize2, 
  RefreshCw, CheckCircle2, ArrowLeft, PanelLeftClose, PanelLeftOpen,
  RotateCcw
} from 'lucide-react';

import QuestionSidebar from '../components/QuestionSidebar.jsx';
import DatabaseExplorer from '../components/DatabaseExplorer.jsx';
import SQLEditor from '../components/SQLEditor.jsx';
import QueryToolbar from '../components/QueryToolbar.jsx';
import ResultsPanel from '../components/ResultsPanel.jsx';
import { executeQuery } from '../services/databaseEngine.js';
import { isDdlDmlQuestion, executeDdlDmlExercise } from '../services/isolatedExerciseEngine.js';
import { validateAnswer } from '../services/answerChecker.js';
import { 
  getQuestionDraft, saveQuestionDraft, recordQueryRun, 
  recordAnswerSubmission, setLastActiveQuestion 
} from '../services/progressService.js';
import { loadFromStorage, saveToStorage, STORAGE_KEYS } from '../utils/storage.js';
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
  theme = 'dark',
  editorTheme = 'auto',
  effectiveEditorTheme = 'dark',
  onToggleEditorTheme,
  setEditorTheme,
  onNavigateToDashboard
}) {
  const containerRef = useRef(null);
  const [leftTab, setLeftTab] = useState('question'); // 'question' | 'database'
  const [leftPercent, setLeftPercent] = useState(() => {
    return loadFromStorage(STORAGE_KEYS.SIDEBAR_WIDTH, 38);
  });
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
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

  const handleSelectQuestion = useCallback((q) => {
    setCurrentQuestion(q);
    const targetHash = `#/practice/${q.id}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
  }, [setCurrentQuestion]);

  const handlePrevQuestion = useCallback(() => {
    if (hasPrev) {
      const prevQ = questions[currentIndex - 1];
      handleSelectQuestion(prevQ);
    }
  }, [hasPrev, currentIndex, questions, handleSelectQuestion]);

  const handleNextQuestion = useCallback(() => {
    if (hasNext) {
      const nextQ = questions[currentIndex + 1];
      handleSelectQuestion(nextQ);
    }
  }, [hasNext, currentIndex, questions, handleSelectQuestion]);

  // Sync URL hash with current question ID
  useEffect(() => {
    if (currentQuestion?.id) {
      const targetHash = `#/practice/${currentQuestion.id}`;
      if (window.location.hash !== targetHash) {
        window.location.hash = targetHash;
      }
    }
  }, [currentQuestion?.id]);

  // Esc key shortcut to return to dashboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && onNavigateToDashboard) {
        onNavigateToDashboard();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNavigateToDashboard]);

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
      let res;
      if (isDdlDmlQuestion(currentQuestion)) {
        res = await executeDdlDmlExercise(userSql, currentQuestion);
      } else {
        res = await executeQuery(userSql);
      }
      setQueryResult(res);
      setActiveResultTab('results');

      // Record query run for progress tracking (marks as attempted if new)
      if (currentQuestion) {
        recordQueryRun(currentQuestion.id, userSql);
        onProgressUpdated();
      }

      if (res.success) {
        addToast(`Query executed in ${res.executionTimeMs} ms (${res.rowCount || 0} rows)`, 'info');
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
      let validation;
      let actualRes;

      if (isDdlDmlQuestion(currentQuestion)) {
        // Isolated DDL/DML execution with automatic state comparison
        const ddlRes = await executeDdlDmlExercise(userSql, currentQuestion);
        actualRes = ddlRes;
        setQueryResult(actualRes);

        validation = {
          isCorrect: ddlRes.isCorrect === true,
          feedback: ddlRes.feedback || (ddlRes.isCorrect ? 'Success! Database state matches expected structure.' : ddlRes.error || 'Verification mismatch.'),
          detailedReason: ddlRes.detailedReason || ddlRes.error
        };
      } else {
        // Standard read-only execution
        actualRes = await executeQuery(userSql);
        setQueryResult(actualRes);
        const expectedOutput = currentQuestion.expectedOutput;
        validation = validateAnswer(actualRes, expectedOutput, currentQuestion, userSql);
      }

      setSubmissionResult(validation);
      setActiveResultTab('submission');

      // Record in progress tracker
      recordAnswerSubmission(currentQuestion.id, validation.isCorrect, userSql, validation);
      onProgressUpdated();

      if (validation.isCorrect) {
        addToast('Correct! Question marked as Solved 🎉', 'success');
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

  // Save custom sidebar width to localStorage
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.SIDEBAR_WIDTH, leftPercent);
  }, [leftPercent]);

  // Dragging event listeners for resizing question pane
  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const newPercent = ((e.clientX - rect.left) / rect.width) * 100;
      const clamped = Math.min(Math.max(newPercent, 20), 75);
      setLeftPercent(clamped);
      if (isCollapsed) setIsCollapsed(false);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging, isCollapsed]);

  // Keyboard shortcut Alt+B toggles question panel collapse
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.altKey || (e.ctrlKey && !e.metaKey)) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setIsCollapsed(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Expand / Contract toggle button
  const handleToggleExpand = () => {
    if (isCollapsed) {
      setIsCollapsed(false);
      return;
    }
    if (leftPercent >= 50) {
      setLeftPercent(38);
    } else {
      setLeftPercent(58);
    }
  };

  // Collapse / Minimize toggle
  const handleToggleCollapse = () => {
    setIsCollapsed(prev => !prev);
  };

  // Reset to default width (38%)
  const handleResetWidth = () => {
    setLeftPercent(38);
    setIsCollapsed(false);
    addToast('Question panel reset to default width (38%)', 'info');
  };

  // Insert SQL from Database Explorer (e.g. SELECT * FROM Employees;)
  const handleInsertSql = (sqlText) => {
    setUserSql(sqlText);
    if (currentQuestion) {
      saveQuestionDraft(currentQuestion.id, sqlText);
    }
  };

  return (
    <div ref={containerRef} className="flex-1 flex flex-col lg:flex-row overflow-hidden bg-background relative">
      {/* LEFT PANEL - DYNAMIC, RESIZABLE, EXPANDABLE & MINIMIZABLE */}
      {isCollapsed ? (
        /* Collapsed Minimal Rail on Desktop */
        <div className="hidden lg:flex w-11 h-full bg-panel border-r border-panel-border flex-col items-center py-3 select-none z-10 shrink-0">
          <button
            onClick={handleToggleCollapse}
            title="Expand Question Panel (Alt+B)"
            className="p-2 rounded-lg bg-panel-light hover:bg-brand hover:text-white border border-panel-border text-text-primary transition-all cursor-pointer shadow-xs group"
          >
            <PanelLeftOpen className="w-4 h-4 text-brand group-hover:text-white transition-colors" />
          </button>

          <div className="mt-8 flex-1 flex flex-col items-center">
            <span
              className="text-xs font-mono font-bold text-text-secondary tracking-widest uppercase cursor-pointer hover:text-brand transition-colors whitespace-nowrap"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              onClick={handleToggleCollapse}
            >
              Q{currentQuestion?.id} • {currentQuestion?.title?.slice(0, 32)}
            </span>
          </div>

          <div className="w-7 h-7 rounded-full bg-brand-surface text-brand flex items-center justify-center text-xs font-bold font-mono">
            Q{currentQuestion?.id}
          </div>
        </div>
      ) : (
        /* Expanded Dynamic Left Panel */
        <div 
          style={{ width: `${leftPercent}%` }}
          className="w-full lg:h-full h-1/2 flex flex-col border-b lg:border-b-0 border-panel-border overflow-hidden bg-panel shrink-0 transition-[width] duration-75"
        >
          {/* Left Sub-Header Switcher with Dynamic Controls */}
          <div className="h-10 px-3 bg-panel-light border-b border-panel-border flex items-center justify-between select-none shrink-0">
            <div className="flex items-center space-x-1.5">
              <button
                onClick={() => setLeftTab('question')}
                className={`flex items-center gap-1.5 py-1 px-3 rounded-lg text-xs font-semibold transition-all ${
                  leftTab === 'question'
                    ? 'bg-panel border border-panel-border text-brand shadow-xs'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Question Workspace</span>
              </button>
              <button
                onClick={() => setLeftTab('database')}
                className={`flex items-center gap-1.5 py-1 px-3 rounded-lg text-xs font-semibold transition-all ${
                  leftTab === 'database'
                    ? 'bg-panel border border-panel-border text-brand shadow-xs'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <Database className="w-3.5 h-3.5 text-amber-500" />
                <span>Database Explorer</span>
              </button>
            </div>

            {/* Dynamic Sizing Controls: Percentage, Reset, Expand, Minimize */}
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-text-muted hidden xl:inline-block font-mono mr-1">
                {Math.round(leftPercent)}%
              </span>

              {/* Reset to Default 38% */}
              <button
                onClick={handleResetWidth}
                title="Reset panel width to default 38%"
                className="hidden lg:flex p-1 rounded-md text-text-secondary hover:text-text-primary hover:bg-panel border border-transparent hover:border-panel-border transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
              </button>

              {/* Toggle Wide Expand View */}
              <button
                onClick={handleToggleExpand}
                title={leftPercent >= 50 ? "Contract question panel (38%)" : "Expand question panel wide (58%)"}
                className="hidden lg:flex p-1 rounded-md text-text-secondary hover:text-brand hover:bg-panel border border-transparent hover:border-panel-border transition-colors cursor-pointer"
              >
                {leftPercent >= 50 ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>

              {/* Minimize / Collapse Panel */}
              <button
                onClick={handleToggleCollapse}
                title="Minimize question panel (Alt+B)"
                className="hidden lg:flex p-1 rounded-md text-text-secondary hover:text-danger hover:bg-panel border border-transparent hover:border-panel-border transition-colors cursor-pointer"
              >
                <PanelLeftClose className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Left Content Area */}
          <div className="flex-1 overflow-hidden">
            {leftTab === 'question' ? (
              <QuestionSidebar
                questions={questions}
                currentQuestion={currentQuestion}
                onSelectQuestion={handleSelectQuestion}
                progressMap={progressMap}
                bookmarks={bookmarks}
                onToggleBookmark={onToggleBookmark}
                onToggleReview={onToggleReview}
                onNavigateToDashboard={onNavigateToDashboard}
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
      )}

      {/* DRAGGABLE VERTICAL SPLITTER BAR (Desktop only, when not collapsed) */}
      {!isCollapsed && (
        <div
          onMouseDown={handleMouseDown}
          onDoubleClick={handleResetWidth}
          title="Drag to resize question pane | Double click to reset width (38%)"
          className={`hidden lg:flex w-2.5 hover:w-3 relative group cursor-col-resize z-20 items-center justify-center transition-all select-none border-x border-panel-border/40 ${
            isDragging 
              ? 'bg-brand' 
              : 'bg-panel-border/30 hover:bg-brand/30'
          }`}
        >
          {/* Visual Grip Indicator */}
          <div className={`w-0.5 h-8 rounded-full transition-colors ${
            isDragging ? 'bg-white' : 'bg-panel-border group-hover:bg-brand'
          }`} />
        </div>
      )}

      {/* RIGHT PANEL (~Remaining Width on Desktop) */}
      <div className="flex-1 w-full lg:h-full h-1/2 flex flex-col overflow-hidden bg-panel">
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
          onNavigateToDashboard={onNavigateToDashboard}
          editorTheme={editorTheme}
          effectiveEditorTheme={effectiveEditorTheme}
          onToggleEditorTheme={onToggleEditorTheme}
        />

        {/* SQL Editor Area (Top Half of Right Panel) */}
        <div className="h-[48%] min-h-[160px] relative border-b border-panel-border">
          <SQLEditor
            value={userSql}
            onChange={handleSqlChange}
            onRunQuery={handleRunQuery}
            fontSize={editorFontSize}
            theme={effectiveEditorTheme}
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
            onNavigateToDashboard={onNavigateToDashboard}
          />
        </div>
      </div>
    </div>
  );
}
