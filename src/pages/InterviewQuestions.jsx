import React, { useState, useMemo, useEffect } from 'react';
import { 
  Sparkles, CheckCircle2, AlertCircle, Clock, Bookmark, 
  Search, Filter, ChevronDown, ChevronRight, Lightbulb, 
  Code, ArrowRight, Play, RotateCcw, Timer, ShieldAlert,
  BookOpen, Check, Copy, Flame, Trophy, ExternalLink
} from 'lucide-react';
import { QUESTION_STATUS } from '../services/progressService.js';
import { useToast } from '../components/Toast.jsx';

export const INTERVIEW_PARTS = [
  "Part 1 — Filtering and Conditions",
  "Part 2 — Aggregates and Grouping",
  "Part 3 — JOIN-Based Problems",
  "Part 4 — Subqueries",
  "Part 5 — Ranking and Top-N Logic",
  "Part 6 — Duplicate Detection and Data Quality",
  "Part 7 — Real-World Business Logic",
  "Part 8 — CASE Expressions"
];

export default function InterviewQuestions({
  questions = [],
  progressMap = {},
  bookmarks = [],
  onToggleBookmark,
  onNavigateToQuestion,
  onNavigateToPractice
}) {
  const { addToast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPart, setSelectedPart] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [expandedQuestionId, setExpandedQuestionId] = useState(null);
  const [unlockedHints, setUnlockedHints] = useState({});
  const [unlockedSolutions, setUnlockedSolutions] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  // Mock Interview Mode state
  const [isMockMode, setIsMockMode] = useState(false);
  const [mockTimerSeconds, setMockTimerSeconds] = useState(45 * 60); // 45 min countdown
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Filter down strictly to the 50 interview-ready questions (IDs 301 to 350)
  const interviewQuestions = useMemo(() => {
    return questions.filter(q => q.topic === 'Interview Ready Questions' || (q.id >= 301 && q.id <= 350));
  }, [questions]);

  // Solved count within the 50 interview questions
  const solvedCount = useMemo(() => {
    return interviewQuestions.filter(q => progressMap[q.id]?.status === QUESTION_STATUS.CORRECT).length;
  }, [interviewQuestions, progressMap]);

  const completionPercent = Math.round((solvedCount / (interviewQuestions.length || 50)) * 100);

  // Timer tick for Mock Interview Mode
  useEffect(() => {
    let interval = null;
    if (isMockMode && isTimerRunning && mockTimerSeconds > 0) {
      interval = setInterval(() => {
        setMockTimerSeconds(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsTimerRunning(false);
            addToast('Mock Interview time is up!', 'info');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isMockMode, isTimerRunning, mockTimerSeconds, addToast]);

  const formatTimer = (secs) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const toggleMockMode = () => {
    const next = !isMockMode;
    setIsMockMode(next);
    if (next) {
      setIsTimerRunning(true);
      setMockTimerSeconds(45 * 60);
      setUnlockedHints({});
      setUnlockedSolutions({});
      addToast('Mock Interview Mode activated! Hints & solutions hidden.', 'info');
    } else {
      setIsTimerRunning(false);
      addToast('Exited Mock Interview Mode.', 'info');
    }
  };

  // Filtered interview questions
  const filteredQuestions = useMemo(() => {
    return interviewQuestions.filter(q => {
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = q.title.toLowerCase().includes(query);
        const matchesStatement = q.problemStatement?.toLowerCase().includes(query);
        const matchesNum = String(q.interviewQuestionNumber || q.id).includes(query);
        const matchesTags = q.tags?.some(t => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesStatement && !matchesNum && !matchesTags) return false;
      }

      // Part filter
      if (selectedPart !== 'All' && q.subtopic !== selectedPart) {
        return false;
      }

      // Difficulty filter
      if (selectedDifficulty !== 'All' && q.difficulty !== selectedDifficulty) {
        return false;
      }

      // Status filter
      if (selectedStatus !== 'All') {
        const status = progressMap[q.id]?.status || QUESTION_STATUS.NOT_STARTED;
        if (selectedStatus === 'bookmarked') {
          if (!bookmarks.includes(q.id)) return false;
        } else if (selectedStatus === 'solved') {
          if (status !== QUESTION_STATUS.CORRECT) return false;
        } else if (selectedStatus === 'unsolved') {
          if (status === QUESTION_STATUS.CORRECT) return false;
        }
      }

      return true;
    });
  }, [interviewQuestions, searchQuery, selectedPart, selectedDifficulty, selectedStatus, progressMap, bookmarks]);

  const handleCopySql = (qid, sql) => {
    navigator.clipboard.writeText(sql);
    setCopiedId(qid);
    addToast('Reference SQL copied to clipboard', 'success');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getDifficultyBadge = (diff) => {
    switch (diff) {
      case 'Beginner':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'Easy':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      case 'Medium':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
      case 'Hard':
        return 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20';
      default:
        return 'bg-panel text-text-secondary border-panel-border';
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-panel p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto w-full">
      {/* Header & Hero Section */}
      <div className="rounded-2xl border border-panel-border bg-panel-light/70 p-6 sm:p-8 shadow-sm relative overflow-hidden backdrop-blur-xs">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-surface text-brand border border-brand/30 shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                Dedicated Section
              </span>
              <span className="text-xs font-mono text-text-muted">
                50 Questions (IDs 301–350)
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
              50 Common SQL Interview Questions
            </h1>
            
            <p className="text-sm text-text-secondary max-w-2xl leading-relaxed">
              Master logic-heavy SQL interview scenarios covering deep filtering, relational joins, 
              nested subqueries, ranking window functions, duplicate diagnostics, real-world business logic, and CASE expressions.
            </p>
          </div>

          {/* Quick Metrics & Mock Mode Card */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-panel p-4 rounded-xl border border-panel-border shadow-xs shrink-0">
            {/* Progress Tally */}
            <div className="space-y-1.5 min-w-[140px]">
              <div className="flex items-center justify-between text-xs">
                <span className="text-text-secondary font-medium">Interview Progress:</span>
                <span className="font-mono font-bold text-brand">{solvedCount} / {interviewQuestions.length}</span>
              </div>
              <div className="w-full bg-panel-light h-2.5 rounded-full overflow-hidden border border-panel-border">
                <div 
                  className="bg-brand h-full rounded-full transition-all duration-500"
                  style={{ width: `${completionPercent}%` }}
                />
              </div>
              <div className="text-[11px] text-text-muted text-right font-mono font-semibold">
                {completionPercent}% Ready
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-panel-border"></div>

            {/* Mock Interview Mode Toggle Button */}
            <div className="flex flex-col gap-1.5">
              <button
                onClick={toggleMockMode}
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer shadow-xs ${
                  isMockMode 
                    ? 'bg-rose-500 text-white hover:bg-rose-600 ring-2 ring-rose-500/30'
                    : 'bg-panel-light hover:bg-panel-lighter border border-panel-border text-text-primary hover:text-brand'
                }`}
                title="Mock Interview Mode hides hints and solutions until query execution"
              >
                <Timer className={`w-4 h-4 ${isMockMode ? 'animate-pulse' : ''}`} />
                <span>{isMockMode ? 'Exit Mock Interview' : 'Start Mock Interview'}</span>
              </button>

              {isMockMode && (
                <div className="flex items-center justify-between px-1 text-[11px] font-mono">
                  <span className="text-text-muted">Time Left:</span>
                  <span className="font-bold text-rose-500">{formatTimer(mockTimerSeconds)}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {isMockMode && (
          <div className="mt-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span><strong>Mock Mode Active:</strong> Progressive hints and reference solutions are locked to simulate a real coding interview environment.</span>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-panel-light/60 p-4 rounded-xl border border-panel-border space-y-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search interview questions by title, concept, table, or clause..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-panel border border-panel-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand transition-colors"
            />
          </div>

          {/* Part Filter */}
          <select
            value={selectedPart}
            onChange={(e) => setSelectedPart(e.target.value)}
            className="px-3 py-2 rounded-lg bg-panel border border-panel-border text-xs text-text-primary focus:outline-none focus:border-brand cursor-pointer"
          >
            <option value="All">All Parts (8 Categories)</option>
            {INTERVIEW_PARTS.map(part => (
              <option key={part} value={part}>{part}</option>
            ))}
          </select>

          {/* Difficulty Filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-2 rounded-lg bg-panel border border-panel-border text-xs text-text-primary focus:outline-none focus:border-brand cursor-pointer"
          >
            <option value="All">All Difficulties</option>
            <option value="Beginner">Beginner</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 rounded-lg bg-panel border border-panel-border text-xs text-text-primary focus:outline-none focus:border-brand cursor-pointer"
          >
            <option value="All">All Statuses</option>
            <option value="solved">Solved Only</option>
            <option value="unsolved">Unsolved Only</option>
            <option value="bookmarked">Bookmarked</option>
          </select>
        </div>

        {/* Quick Part Pills Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
          <button
            onClick={() => setSelectedPart('All')}
            className={`px-2.5 py-1 rounded-md shrink-0 font-medium transition-colors cursor-pointer ${
              selectedPart === 'All'
                ? 'bg-brand text-white font-bold'
                : 'bg-panel hover:bg-panel-lighter border border-panel-border text-text-secondary'
            }`}
          >
            All (50)
          </button>
          {INTERVIEW_PARTS.map((part, idx) => {
            const shortName = part.split('—')[1]?.trim() || part;
            const isSelected = selectedPart === part;
            return (
              <button
                key={part}
                onClick={() => setSelectedPart(part)}
                className={`px-2.5 py-1 rounded-md shrink-0 font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-brand text-white font-bold'
                    : 'bg-panel hover:bg-panel-lighter border border-panel-border text-text-secondary'
                }`}
              >
                <span className="font-mono text-[10px] opacity-75">P{idx + 1}</span>
                <span>{shortName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Questions List Header */}
      <div className="flex items-center justify-between text-xs text-text-secondary px-1">
        <span>Showing <strong>{filteredQuestions.length}</strong> of {interviewQuestions.length} questions</span>
        <span>Click any card to expand preview, or launch directly into the Workspace</span>
      </div>

      {/* 50 Questions Numbered List */}
      <div className="space-y-3">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12 bg-panel-light rounded-xl border border-panel-border space-y-2">
            <AlertCircle className="w-8 h-8 text-text-muted mx-auto" />
            <div className="text-sm font-semibold text-text-primary">No matching interview questions found</div>
            <div className="text-xs text-text-secondary">Try adjusting your search keywords or filter criteria.</div>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const isSolved = progressMap[q.id]?.status === QUESTION_STATUS.CORRECT;
            const isAttempted = progressMap[q.id]?.status === QUESTION_STATUS.INCORRECT;
            const isBookmarked = bookmarks.includes(q.id);
            const isExpanded = expandedQuestionId === q.id;
            const hintRevealed = unlockedHints[q.id];
            const solutionRevealed = unlockedSolutions[q.id];
            const qNum = q.interviewQuestionNumber || (q.id - 300);

            return (
              <div
                key={q.id}
                className={`rounded-xl border transition-all ${
                  isExpanded
                    ? 'border-brand/40 bg-panel-light/90 shadow-md ring-1 ring-brand/20'
                    : 'border-panel-border bg-panel-light hover:border-panel-border-hover'
                }`}
              >
                {/* Main Row / Summary */}
                <div className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left Column: Number, Title, Tags */}
                  <div className="flex items-start gap-3.5 flex-1 cursor-pointer" onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}>
                    {/* Number Badge */}
                    <div className="w-10 h-10 rounded-xl bg-panel border border-panel-border flex flex-col items-center justify-center shrink-0 shadow-2xs">
                      <span className="text-[10px] font-mono text-text-muted font-bold uppercase leading-none">IQ</span>
                      <span className="text-sm font-extrabold font-mono text-text-primary leading-none mt-0.5">
                        {String(qNum).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${getDifficultyBadge(q.difficulty)}`}>
                          {q.difficulty}
                        </span>
                        <span className="text-[10px] font-semibold text-text-muted bg-panel px-2 py-0.5 rounded border border-panel-border">
                          {q.subtopic}
                        </span>
                        <span className="text-[10px] font-mono text-text-muted">
                          ID: #{q.id}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-text-primary hover:text-brand transition-colors flex items-center gap-2">
                        <span>{q.title}</span>
                        {isSolved && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" title="Solved" />
                        )}
                        {isAttempted && !isSolved && (
                          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" title="Attempted" />
                        )}
                      </h3>

                      <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                        {q.problemStatement}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Actions */}
                  <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                    {/* Bookmark Button */}
                    <button
                      onClick={() => onToggleBookmark && onToggleBookmark(q.id)}
                      className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                        isBookmarked
                          ? 'bg-amber-500/10 text-amber-500 border-amber-500/30'
                          : 'bg-panel hover:bg-panel-lighter border-panel-border text-text-muted hover:text-text-primary'
                      }`}
                      title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                    </button>

                    {/* Expand/Collapse Toggle */}
                    <button
                      onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                      className="px-3 py-2 rounded-lg bg-panel hover:bg-panel-lighter border border-panel-border text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                      {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                    </button>

                    {/* Solve in Workspace Button */}
                    <button
                      onClick={() => onNavigateToQuestion ? onNavigateToQuestion(q) : onNavigateToPractice()}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand hover:bg-brand-hover text-white text-xs font-bold transition-all shadow-xs cursor-pointer group"
                      title="Open interactive IDE and execute SQL for this problem"
                    >
                      <Play className="w-3.5 h-3.5 fill-white group-hover:scale-110 transition-transform" />
                      <span>Solve in IDE</span>
                    </button>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="border-t border-panel-border p-4 sm:p-6 bg-panel/50 space-y-5 rounded-b-xl animate-in fade-in duration-150">
                    {/* Requirements checklist */}
                    {q.requirements && q.requirements.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-text-secondary flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-brand" />
                          Key Problem Requirements:
                        </span>
                        <ul className="grid sm:grid-cols-2 gap-2 text-xs text-text-secondary">
                          {q.requirements.map((req, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2 bg-panel p-2.5 rounded-lg border border-panel-border">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0"></span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tables Involved */}
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-semibold text-text-secondary">Tables Referenced:</span>
                      <span className="font-mono bg-panel px-2 py-0.5 rounded border border-panel-border text-text-primary">
                        {q.tableName || 'Employees'}
                      </span>
                    </div>

                    {/* Progressive Hint Drawer */}
                    <div className="rounded-xl border border-panel-border bg-panel p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-bold text-amber-500">
                          <Lightbulb className="w-4 h-4" />
                          <span>Progressive Hint</span>
                        </div>
                        {isMockMode ? (
                          <span className="text-[11px] font-mono text-text-muted italic">Disabled in Mock Mode</span>
                        ) : (
                          <button
                            onClick={() => setUnlockedHints(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                            className="text-xs font-semibold text-brand hover:underline cursor-pointer"
                          >
                            {hintRevealed ? 'Hide Hint' : 'Reveal Hint'}
                          </button>
                        )}
                      </div>
                      {!isMockMode && hintRevealed && (
                        <div className="pt-2 text-xs text-text-secondary border-t border-panel-border font-mono leading-relaxed bg-amber-500/5 p-2.5 rounded-lg">
                          {q.hint}
                        </div>
                      )}
                    </div>

                    {/* Reference Solution Drawer */}
                    <div className="rounded-xl border border-panel-border bg-panel p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-bold text-blue-500">
                          <Code className="w-4 h-4" />
                          <span>Verified Reference SQL Solution</span>
                        </div>
                        {isMockMode ? (
                          <span className="text-[11px] font-mono text-text-muted italic">Locked until submission</span>
                        ) : (
                          <div className="flex items-center gap-3">
                            {solutionRevealed && (
                              <button
                                onClick={() => handleCopySql(q.id, q.expectedSql)}
                                className="flex items-center gap-1 text-[11px] text-text-secondary hover:text-text-primary cursor-pointer font-medium"
                              >
                                {copiedId === q.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                                <span>{copiedId === q.id ? 'Copied' : 'Copy SQL'}</span>
                              </button>
                            )}
                            <button
                              onClick={() => setUnlockedSolutions(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                              className="text-xs font-semibold text-brand hover:underline cursor-pointer"
                            >
                              {solutionRevealed ? 'Hide Solution' : 'Reveal Solution'}
                            </button>
                          </div>
                        )}
                      </div>

                      {!isMockMode && solutionRevealed && (
                        <div className="pt-2 space-y-3 border-t border-panel-border">
                          <pre className="p-3 rounded-lg bg-panel-light text-text-primary font-mono text-xs overflow-x-auto border border-panel-border">
                            {q.expectedSql}
                          </pre>
                          {q.explanation && (
                            <div className="text-xs text-text-secondary leading-relaxed bg-blue-500/5 p-3 rounded-lg border border-blue-500/10">
                              <strong className="text-text-primary">Interview Explanation:</strong> {q.explanation}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Workspace Launch Footer */}
                    <div className="flex items-center justify-end pt-2">
                      <button
                        onClick={() => onNavigateToQuestion ? onNavigateToQuestion(q) : onNavigateToPractice()}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand hover:bg-brand-hover text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Launch in Interactive IDE</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
