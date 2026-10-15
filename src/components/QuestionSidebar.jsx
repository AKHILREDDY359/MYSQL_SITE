import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, AlertCircle, Clock, Bookmark, Search, Filter, 
  ChevronLeft, ChevronRight, HelpCircle, Eye, EyeOff, Lightbulb, 
  Database, ListOrdered, BookMarked, Sparkles, ArrowLeft, ArrowRight
} from 'lucide-react';
import SampleOutput from './SampleOutput.jsx';
import TablePreviewCard from './TablePreviewCard.jsx';
import { QUESTION_STATUS } from '../services/progressService.js';

export default function QuestionSidebar({
  questions,
  currentQuestion,
  onSelectQuestion,
  progressMap,
  bookmarks,
  onToggleBookmark,
  onToggleReview,
  onNavigateToDashboard
}) {
  const [activeTab, setActiveTab] = useState('question'); // 'question' | 'list'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  // Reset hint/solution when question changes
  React.useEffect(() => {
    setShowHint(false);
    setShowSolution(false);
  }, [currentQuestion?.id]);

  // Extract unique topics in canonical curriculum order
  const CANONICAL_TOPICS = [
    "SQL Fundamentals",
    "WHERE & Operators",
    "Sorting & Limiting",
    "Aggregate Functions",
    "GROUP BY",
    "HAVING",
    "SQL JOINs",
    "Subqueries",
    "CASE Expressions",
    "Interview Ready Questions"
  ];

  const topics = useMemo(() => {
    const set = new Set(questions.map((q) => q.topic));
    const sorted = Array.from(set).sort((a, b) => {
      const idxA = CANONICAL_TOPICS.indexOf(a);
      const idxB = CANONICAL_TOPICS.indexOf(b);
      return (idxA !== -1 ? idxA : 999) - (idxB !== -1 ? idxB : 999);
    });
    return ['All', ...sorted];
  }, [questions]);

  // Filtered questions list
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = q.title.toLowerCase().includes(query);
        const matchesStatement = q.problemStatement.toLowerCase().includes(query);
        const matchesNumber = String(q.id).includes(query);
        if (!matchesTitle && !matchesStatement && !matchesNumber) return false;
      }

      // Topic filter
      if (selectedTopic !== 'All' && q.topic !== selectedTopic) {
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
        } else if (status !== selectedStatus) {
          return false;
        }
      }

      return true;
    });
  }, [questions, searchQuery, selectedTopic, selectedDifficulty, selectedStatus, progressMap, bookmarks]);

  const currentIndex = questions.findIndex((q) => q.id === currentQuestion?.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < questions.length - 1;

  const currentStatus = progressMap[currentQuestion?.id]?.status || QUESTION_STATUS.NOT_STARTED;
  const isCurrentBookmarked = bookmarks.includes(currentQuestion?.id);

  const getStatusIcon = (qid) => {
    const status = progressMap[qid]?.status || QUESTION_STATUS.NOT_STARTED;
    switch (status) {
      case QUESTION_STATUS.SOLVED:
        return <CheckCircle2 className="w-4 h-4 text-success shrink-0" />;
      case QUESTION_STATUS.ATTEMPTED:
        return <AlertCircle className="w-4 h-4 text-warning shrink-0" />;
      case QUESTION_STATUS.NEEDS_REVIEW:
        return <Bookmark className="w-4 h-4 text-purple-400 shrink-0 fill-purple-400/20" />;
      default:
        return <Clock className="w-4 h-4 text-text-muted shrink-0" />;
    }
  };

  const getDifficultyBadge = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">Easy</span>;
      case 'Medium':
        return <span className="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded">Medium</span>;
      case 'Hard':
        return <span className="text-[10px] font-semibold text-red-700 dark:text-red-400 bg-red-500/10 border border-red-500/30 px-2 py-0.5 rounded">Hard</span>;
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col bg-panel border-r border-panel-border overflow-hidden select-none">
      {/* Top Navigation Tabs */}
      <div className="flex items-center justify-between border-b border-panel-border bg-panel-light px-3">
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setActiveTab('question')}
            className={`flex items-center gap-1.5 py-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'question'
                ? 'border-brand text-brand'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Problem #{currentQuestion?.id}</span>
          </button>
          <button
            onClick={() => setActiveTab('list')}
            className={`flex items-center gap-1.5 py-2.5 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'list'
                ? 'border-brand text-brand'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            <ListOrdered className="w-3.5 h-3.5" />
            <span>Question List ({filteredQuestions.length})</span>
          </button>
        </div>

        {/* Quick Prev / Next Navigator */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => hasPrev && onSelectQuestion(questions[currentIndex - 1])}
            disabled={!hasPrev}
            title="Previous question (Cmd+[)"
            className="p-1 rounded text-text-secondary hover:text-text-primary hover:bg-panel-border disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-text-secondary">
            {currentIndex + 1}/{questions.length}
          </span>
          <button
            onClick={() => hasNext && onSelectQuestion(questions[currentIndex + 1])}
            disabled={!hasNext}
            title="Next question (Cmd+])"
            className="p-1 rounded text-text-secondary hover:text-text-primary hover:bg-panel-border disabled:opacity-30 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Body */}
      {activeTab === 'question' ? (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Top Quick Navigation: Back to Dashboard & Prev/Next Arrows */}
          <div className="flex items-center justify-between pb-3 border-b border-panel-border/70">
            {onNavigateToDashboard ? (
              <button
                onClick={onNavigateToDashboard}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-panel-light hover:bg-panel-border border border-panel-border text-xs font-semibold text-text-primary hover:text-brand transition-all group cursor-pointer shadow-xs"
                title="Return to Dashboard (Esc)"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-brand group-hover:-translate-x-1 transition-transform" />
                <span>Dashboard</span>
              </button>
            ) : <div />}

            <div className="flex items-center gap-1">
              <button
                onClick={() => hasPrev && onSelectQuestion(questions[currentIndex - 1])}
                disabled={!hasPrev}
                title="Previous Question (Alt + ←)"
                className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium bg-panel-light hover:bg-panel-border border border-panel-border text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:hover:bg-panel-light transition-all cursor-pointer"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Prev</span>
              </button>
              <button
                onClick={() => hasNext && onSelectQuestion(questions[currentIndex + 1])}
                disabled={!hasNext}
                title="Next Question (Alt + →)"
                className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium bg-panel-light hover:bg-panel-border border border-panel-border text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:hover:bg-panel-light transition-all cursor-pointer"
              >
                <span>Next</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Question Title & Meta Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-brand bg-brand/10 border border-brand/20 px-2 py-0.5 rounded">
                  Q{currentQuestion?.id}
                </span>
                {getDifficultyBadge(currentQuestion?.difficulty)}
                <span className="text-xs text-text-secondary font-medium">
                  {currentQuestion?.topic}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => onToggleBookmark(currentQuestion?.id)}
                  title={isCurrentBookmarked ? "Remove bookmark" : "Bookmark this question"}
                  className={`p-1.5 rounded transition-colors ${
                    isCurrentBookmarked
                      ? 'text-amber-400 bg-amber-400/10 border border-amber-400/30'
                      : 'text-text-secondary hover:text-text-primary hover:bg-panel-light'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isCurrentBookmarked ? 'fill-amber-400' : ''}`} />
                </button>
                <button
                  onClick={() => onToggleReview(currentQuestion?.id)}
                  title="Mark for revision / Needs Review"
                  className={`p-1.5 rounded transition-colors ${
                    currentStatus === QUESTION_STATUS.NEEDS_REVIEW
                      ? 'text-purple-400 bg-purple-400/10 border border-purple-400/30'
                      : 'text-text-secondary hover:text-text-primary hover:bg-panel-light'
                  }`}
                >
                  <BookMarked className="w-4 h-4" />
                </button>
              </div>
            </div>

            <h2 className="text-base font-bold text-text-primary leading-snug">
              {currentQuestion?.title}
            </h2>
            <div className="text-[11px] text-text-secondary italic">
              {currentQuestion?.part}
            </div>
          </div>

          {/* Problem Statement Card */}
          <div className="p-4 rounded-xl bg-panel-light border border-panel-border space-y-3 shadow-xs">
            <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
              Problem Statement
            </h3>
            <p className="text-sm text-text-primary leading-relaxed font-normal">
              {currentQuestion?.problemStatement}
            </p>

            {/* Conditions / Requirements List */}
            {currentQuestion?.requirements && (
              <div className="space-y-1.5 pt-2 border-t border-panel-border/60">
                <span className="text-[11px] font-semibold text-text-secondary">Requirements & Conditions:</span>
                <ul className="list-disc list-inside text-xs text-text-primary space-y-1">
                  {currentQuestion.requirements.map((req, i) => (
                    <li key={i} className="text-text-secondary">
                      <span className="text-text-primary">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Table & Prerequisites tags */}
            <div className="flex flex-wrap gap-2 pt-2 text-[11px]">
              <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-panel border border-panel-border text-text-secondary">
                <Database className="w-3 h-3 text-brand" /> Table: <strong className="text-text-primary font-mono">{currentQuestion?.tableName}</strong>
              </span>
              {currentQuestion?.prerequisites && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-panel border border-panel-border text-text-secondary">
                  <Sparkles className="w-3 h-3 text-amber-400" /> Focus: {currentQuestion.prerequisites}
                </span>
              )}
            </div>
          </div>

          {/* Master Table Preview Card (Input Data) */}
          <TablePreviewCard tableName={currentQuestion?.tableName || 'Employees'} />

          {/* Expected Sample Output component */}
          <SampleOutput
            expectedOutput={currentQuestion?.expectedOutput}
            explanation={currentQuestion?.explanation}
            questionNumber={currentQuestion?.id}
          />

          {/* Collapsible Hint & Solution */}
          <div className="space-y-2 pt-1">
            {/* Hint */}
            <div className="border border-panel-border rounded-lg bg-panel overflow-hidden">
              <button
                onClick={() => setShowHint(!showHint)}
                className="w-full p-2.5 text-left flex items-center justify-between text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-panel-light transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span>{showHint ? "Hide Hint" : "Need a Hint?"}</span>
                </div>
                <span className="text-[10px] text-text-muted">{showHint ? "Click to collapse" : "Click to view guidance"}</span>
              </button>
              {showHint && (
                <div className="p-3 border-t border-panel-border bg-panel-light text-xs text-text-primary leading-relaxed">
                  <p className="font-mono text-amber-600 dark:text-amber-400 font-medium">{currentQuestion?.hint}</p>
                </div>
              )}
            </div>

            {/* Solution Reveal */}
            <div className="border border-panel-border rounded-lg bg-panel overflow-hidden">
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="w-full p-2.5 text-left flex items-center justify-between text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-panel-light transition-colors"
              >
                <div className="flex items-center gap-2">
                  {showSolution ? <EyeOff className="w-4 h-4 text-brand" /> : <Eye className="w-4 h-4 text-brand" />}
                  <span>{showSolution ? "Hide Expected Solution" : "Reveal Reference SQL Solution"}</span>
                </div>
                <span className="text-[10px] text-text-muted">{showSolution ? "Hide" : "Try solving first!"}</span>
              </button>
              {showSolution && (
                <div className="p-3 border-t border-panel-border bg-panel-light space-y-2">
                  <pre className="p-2.5 rounded bg-panel border border-panel-border font-mono text-xs text-emerald-700 dark:text-emerald-400 font-semibold overflow-x-auto">
                    {currentQuestion?.expectedSql}
                  </pre>
                  <p className="text-[11px] text-text-secondary">{currentQuestion?.explanation}</p>
                </div>
              )}
            </div>
          </div>

          {/* Forward & Backward Question Navigation Footer */}
          <div className="pt-4 border-t border-panel-border space-y-2 select-none">
            <div className="text-[10px] text-text-muted uppercase tracking-wider font-semibold text-center">
              Navigate Questions (Alt + ← / →)
            </div>
            <div className="flex items-center justify-between gap-2.5">
              <button
                onClick={() => hasPrev && onSelectQuestion(questions[currentIndex - 1])}
                disabled={!hasPrev}
                title="Go backward to previous question (Alt+Left)"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-panel-border bg-panel-light hover:bg-panel-hover text-xs font-semibold text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-4 h-4 text-text-secondary" />
                <div className="text-left truncate">
                  <span className="block leading-none">Previous</span>
                  {hasPrev && (
                    <span className="text-[10px] text-text-muted font-normal truncate block mt-0.5">
                      Q{questions[currentIndex - 1].id}
                    </span>
                  )}
                </div>
              </button>

              <button
                onClick={() => hasNext && onSelectQuestion(questions[currentIndex + 1])}
                disabled={!hasNext}
                title="Go forward to next question (Alt+Right)"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-brand/30 bg-brand/10 hover:bg-brand/20 text-xs font-semibold text-brand disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm active:scale-95"
              >
                <div className="text-right truncate">
                  <span className="block leading-none">Next</span>
                  {hasNext && (
                    <span className="text-[10px] text-brand/70 font-normal truncate block mt-0.5">
                      Q{questions[currentIndex + 1].id}
                    </span>
                  )}
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Questions Navigator List View */
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Filter Bar */}
          <div className="p-3 border-b border-panel-border bg-panel space-y-2 text-xs">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-text-muted absolute left-2.5 top-2.5" />
              <input
                type="text"
                placeholder="Search questions or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-md bg-panel-light border border-panel-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand"
              />
            </div>

            {/* Dropdown Filters */}
            <div className="grid grid-cols-3 gap-2">
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="bg-panel-light border border-panel-border rounded px-2 py-1 text-[11px] text-text-secondary focus:outline-none focus:border-brand truncate"
              >
                <option value="All">All Topics</option>
                {topics.filter(t => t !== 'All').map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>

              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-panel-light border border-panel-border rounded px-2 py-1 text-[11px] text-text-secondary focus:outline-none focus:border-brand"
              >
                <option value="All">All Diff.</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-panel-light border border-panel-border rounded px-2 py-1 text-[11px] text-text-secondary focus:outline-none focus:border-brand"
              >
                <option value="All">All Status</option>
                <option value={QUESTION_STATUS.SOLVED}>Solved</option>
                <option value={QUESTION_STATUS.ATTEMPTED}>Attempted</option>
                <option value={QUESTION_STATUS.NOT_STARTED}>Not Started</option>
                <option value={QUESTION_STATUS.NEEDS_REVIEW}>Review</option>
                <option value="bookmarked">Bookmarked</option>
              </select>
            </div>
          </div>

          {/* List of Questions */}
          <div className="flex-1 overflow-y-auto divide-y divide-panel-border/60">
            {filteredQuestions.length === 0 ? (
              <div className="p-8 text-center text-xs text-text-muted">
                No questions match your current filters.
              </div>
            ) : (
              filteredQuestions.map((q) => {
                const isSelected = q.id === currentQuestion?.id;
                return (
                  <div
                    key={q.id}
                    onClick={() => {
                      onSelectQuestion(q);
                      setActiveTab('question');
                    }}
                    className={`p-3 cursor-pointer transition-colors flex items-start gap-2.5 ${
                      isSelected
                        ? 'bg-brand/15 border-l-2 border-l-brand text-text-primary'
                        : 'hover:bg-panel-light text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    <div className="mt-0.5">{getStatusIcon(q.id)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-mono text-[11px] font-bold text-text-primary">
                          #{q.id}
                        </span>
                        {getDifficultyBadge(q.difficulty)}
                        <span className="text-[10px] text-text-muted truncate">
                          {q.topic}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-text-primary line-clamp-1">
                        {q.title}
                      </p>
                      {q.subtopic && (
                        <p className="text-[10px] text-text-muted truncate mt-0.5">
                          {q.subtopic}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
