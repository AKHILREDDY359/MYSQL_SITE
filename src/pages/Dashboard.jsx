import React, { useState, useMemo } from 'react';
import { 
  Play, RotateCcw, CheckCircle2, HelpCircle, 
  TrendingUp, Calendar, Zap, BookMarked, ArrowRight, 
  Award, Compass, Terminal, Folder, Layers, BookOpen, Search,
  Filter, LayoutGrid, List, Clock, ChevronDown, ChevronRight,
  Database, Sparkles, GitFork
} from 'lucide-react';
import ProgressCard from '../components/ProgressCard.jsx';
import TopicProgress from '../components/TopicProgress.jsx';
import { QUESTION_STATUS } from '../services/progressService.js';

export const CANONICAL_TOPICS = [
  "SQL Fundamentals",
  "WHERE & Operators",
  "Sorting & Limiting",
  "Aggregate Functions",
  "GROUP BY",
  "HAVING",
  "SQL JOINs",
  "Subqueries",
  "CASE Expressions",
  "Interview Ready Questions",
  "Table & Schema Management (DDL)",
  "Data Modification (DML)"
];

const TOPIC_ICONS = {
  "SQL Fundamentals": Terminal,
  "WHERE & Operators": Filter,
  "Sorting & Limiting": TrendingUp,
  "Aggregate Functions": Layers,
  "GROUP BY": Database,
  "HAVING": Award,
  "SQL JOINs": Compass,
  "Subqueries": Sparkles,
  "CASE Expressions": GitFork,
  "Interview Ready Questions": BookOpen,
  "Table & Schema Management (DDL)": Layers,
  "Data Modification (DML)": Zap
};

export default function Dashboard({
  metrics,
  questions = [],
  onNavigateToQuestion,
  onNavigateToPractice,
  progressMap = {},
  bookmarks = []
}) {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'grid'
  const [collapsedSubtopics, setCollapsedSubtopics] = useState({});

  const {
    total = questions.length || 300,
    solved = 0,
    attempted = 0,
    pending = questions.length || 300,
    incorrectQuestionsCount = 0,
    needsReview = 0,
    solvedToday = 0,
    accuracy = 0,
    completionPercentage = 0,
    topicStats = {},
    difficultyStats = {}
  } = metrics;

  // Toggle subtopic collapse
  const toggleSubtopic = (key) => {
    setCollapsedSubtopics(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Group questions by canonical topics with active filters applied
  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = q.title.toLowerCase().includes(query);
        const matchesStatement = q.problemStatement?.toLowerCase().includes(query);
        const matchesNumber = String(q.id).includes(query);
        const matchesSubtopic = q.subtopic?.toLowerCase().includes(query);
        const matchesTags = q.tags?.some(t => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesStatement && !matchesNumber && !matchesSubtopic && !matchesTags) {
          return false;
        }
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

  // Group filtered questions by canonical topics
  const questionsByTopic = useMemo(() => {
    const grouped = {};
    CANONICAL_TOPICS.forEach((t) => {
      grouped[t] = [];
    });
    filteredQuestions.forEach((q) => {
      const topic = q.topic || 'SQL Fundamentals';
      if (!grouped[topic]) grouped[topic] = [];
      grouped[topic].push(q);
    });
    return grouped;
  }, [filteredQuestions]);

  // Find first unsolved or attempted question for "Resume Practice"
  const getResumeQuestion = () => {
    const firstAttempted = questions.find(q => progressMap[q.id]?.status === QUESTION_STATUS.ATTEMPTED);
    if (firstAttempted) return firstAttempted;
    const firstPending = questions.find(q => !progressMap[q.id] || progressMap[q.id]?.status === QUESTION_STATUS.NOT_STARTED);
    if (firstPending) return firstPending;
    return questions[0];
  };

  // Find first incorrect question
  const getFirstIncorrectQuestion = () => {
    return questions.find(q => progressMap[q.id]?.incorrectCount > 0 && progressMap[q.id]?.status !== QUESTION_STATUS.SOLVED) || questions[0];
  };

  const handleResume = () => {
    const q = getResumeQuestion();
    if (q) onNavigateToQuestion(q);
  };

  const handleReviewIncorrect = () => {
    const q = getFirstIncorrectQuestion();
    if (q) onNavigateToQuestion(q);
  };

  const getStatusIcon = (qid) => {
    const p = progressMap[qid];
    if (p?.status === QUESTION_STATUS.SOLVED) {
      return <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500/20 shrink-0" />;
    }
    if (p?.status === QUESTION_STATUS.ATTEMPTED) {
      return <Zap className="w-4 h-4 text-amber-500 shrink-0" />;
    }
    if (p?.status === QUESTION_STATUS.NEEDS_REVIEW) {
      return <BookMarked className="w-4 h-4 text-purple-400 fill-purple-400/20 shrink-0" />;
    }
    return <span className="w-3.5 h-3.5 rounded-full border border-panel-border bg-panel-light shrink-0 inline-block" />;
  };

  const getDifficultyBadge = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return (
          <span className="text-[10px] font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 rounded-md shadow-xs">
            Beginner
          </span>
        );
      case 'Easy':
        return (
          <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-md shadow-xs">
            Easy
          </span>
        );
      case 'Medium':
        return (
          <span className="text-[10px] font-bold text-amber-700 dark:text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-md shadow-xs">
            Medium
          </span>
        );
      case 'Hard':
        return (
          <span className="text-[10px] font-bold text-rose-700 dark:text-rose-300 bg-rose-500/10 border border-rose-500/30 px-2 py-0.5 rounded-md shadow-xs">
            Hard
          </span>
        );
      default:
        return null;
    }
  };

  const getStatusBadgeStyle = (qid) => {
    const p = progressMap[qid];
    if (!p || p.status === QUESTION_STATUS.NOT_STARTED) {
      return 'bg-panel-light hover:bg-panel-lighter text-text-primary hover:text-brand border-panel-border font-bold shadow-xs';
    }
    if (p.status === QUESTION_STATUS.SOLVED) {
      return 'bg-emerald-100 dark:bg-emerald-950/70 border-emerald-400 dark:border-emerald-500/60 text-emerald-900 dark:text-emerald-200 hover:bg-emerald-200 dark:hover:bg-emerald-900/80 shadow-sm font-bold';
    }
    if (p.status === QUESTION_STATUS.NEEDS_REVIEW) {
      return 'bg-purple-100 dark:bg-purple-950/70 border-purple-400 dark:border-purple-500/60 text-purple-900 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-900/80 shadow-sm font-bold';
    }
    return 'bg-amber-100 dark:bg-amber-950/70 border-amber-400 dark:border-amber-500/60 text-amber-900 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-900/80 shadow-sm font-bold';
  };

  // Determine active topics to display based on topic filter
  const activeTopics = useMemo(() => {
    if (selectedTopic === 'All') return CANONICAL_TOPICS;
    return [selectedTopic];
  }, [selectedTopic]);

  return (
    <div className="flex-1 overflow-y-auto bg-background px-4 sm:px-6 lg:px-8 py-6 space-y-6 w-full">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-panel border border-panel-border p-6 sm:p-8 shadow-xs bg-tech-grid">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand/30 text-xs font-bold text-emerald-800 dark:text-emerald-300">
              <Terminal className="w-3.5 h-3.5 text-brand" />
              <span>SQLForge — Forge Your SQL Skills</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
              Master SQL from Basics to Advanced ({questions.length} Verified Problems)
            </h1>
            <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
              Strong and developer-focused, ideal for mastering SQL from basics to advanced.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              Curated corporate SQL interview challenges organized across 12 core curriculum topics (including Table & Schema Management DDL, Data Modification DML, and CASE Expressions) with live WebAssembly execution, relational schema exploration, and automated answer validation.
            </p>
          </div>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap md:flex-col gap-3 shrink-0">
            <button
              onClick={handleResume}
              className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-brand hover:bg-brand-hover text-white font-semibold text-sm shadow-md shadow-brand/20 transition-all active:scale-95 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{solved > 0 ? 'Resume Practice' : 'Start Practicing'}</span>
            </button>

            <button
              onClick={() => { window.location.hash = '#interview'; }}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-bold transition-all shadow-xs cursor-pointer"
              title="Open the dedicated 50 Common SQL Interview Questions section"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>50 Interview Questions</span>
            </button>

            {incorrectQuestionsCount > 0 && (
              <button
                onClick={handleReviewIncorrect}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-panel-light hover:bg-panel-lighter border border-panel-border text-amber-700 dark:text-amber-300 hover:text-amber-800 dark:hover:text-amber-200 text-xs font-semibold transition-all shadow-xs cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry Incorrect ({incorrectQuestionsCount})</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main KPI Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
        <ProgressCard
          title="Total Bank"
          value={total}
          subtitle={`${total} Problems`}
          icon={HelpCircle}
          color="brand"
        />
        <ProgressCard
          title="Solved"
          value={solved}
          subtitle={`${completionPercentage}% completed`}
          icon={CheckCircle2}
          color="success"
        />
        <ProgressCard
          title="Attempted"
          value={attempted}
          subtitle="In progress"
          icon={Zap}
          color="warning"
        />
        <ProgressCard
          title="Pending"
          value={pending}
          subtitle="Remaining"
          icon={Compass}
          color="brand"
        />
        <ProgressCard
          title="Accuracy"
          value={`${accuracy}%`}
          subtitle="Precision rate"
          icon={TrendingUp}
          color="purple"
        />
        <ProgressCard
          title="Solved Today"
          value={solvedToday}
          subtitle="Today's sprint"
          icon={Calendar}
          color="success"
        />
      </div>

      {/* Overall Placement Readiness Progress Card */}
      <div className="p-6 rounded-2xl bg-panel border border-panel-border space-y-4 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>Overall Placement Readiness</span>
            </h3>
            <p className="text-xs text-text-secondary mt-0.5">
              Goal: Solve all 300 technical SQL interview challenges before on-campus and corporate hiring rounds
            </p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold font-mono text-brand">{completionPercentage}%</span>
            <span className="text-xs text-text-secondary block">{solved} / {total} Solved</span>
          </div>
        </div>

        <div className="w-full bg-panel-light h-3 rounded-full overflow-hidden border border-panel-border">
          <div
            className="bg-brand h-full rounded-full transition-all duration-700 ease-out"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>

        {/* Difficulty Breakdown Badges */}
        <div className="flex flex-wrap gap-3 pt-2 border-t border-panel-border/60 text-xs">
          {Object.entries(difficultyStats).map(([diff, s]) => {
            const pct = s.total > 0 ? Math.round((s.solved / s.total) * 100) : 0;
            return (
              <div key={diff} className="flex items-center gap-2 bg-panel-light px-3 py-1.5 rounded-lg border border-panel-border">
                {getDifficultyBadge(diff)}
                <span className="font-mono text-text-secondary font-medium">{s.solved}/{s.total}</span>
                <span className="text-[11px] text-brand font-semibold">({pct}%)</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Curriculum Mastery Modules Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
            <Layers className="w-4 h-4 text-brand" />
            <span>Curriculum Modules Overview</span>
          </h3>
          <span className="text-xs text-text-secondary font-medium">
            8 Topics • 300 Questions
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {CANONICAL_TOPICS.map((topic, idx) => {
            const stats = topicStats[topic] || { total: questionsByTopic[topic]?.length || 0, solved: 0, attempted: 0 };
            return (
              <TopicProgress
                key={topic}
                topic={`${idx + 1}. ${topic}`}
                stats={stats}
                onPracticeTopic={() => {
                  setSelectedTopic(topic);
                  const firstQ = questions.find(q => q.topic === topic);
                  if (firstQ) onNavigateToQuestion(firstQ);
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Main Interactive Topic-Wise Question Explorer */}
      <div className="p-6 rounded-2xl bg-panel border border-panel-border space-y-6 shadow-xs">
        {/* Explorer Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-panel-border">
          <div>
            <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-brand" />
              <span>Curriculum Question Explorer</span>
            </h3>
            <p className="text-xs text-text-secondary mt-0.5">
              Browse questions by topic & subtopic with difficulty levels, estimated times, and direct workspace links.
            </p>
          </div>

          {/* View Mode Toggle & Legend */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center bg-panel-light border border-panel-border rounded-lg p-0.5 shadow-xs">
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-panel text-brand shadow-xs border border-panel-border/80'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                title="Detailed list view with problem titles"
              >
                <List className="w-3.5 h-3.5" />
                <span>Problem List</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-panel text-brand shadow-xs border border-panel-border/80'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                title="Compact number matrix view"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Matrix Grid</span>
              </button>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2.5 text-[11px] text-text-secondary border-l border-panel-border/70 pl-3">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Solved
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span> Attempted
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span> Review
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></span> Pending
              </span>
            </div>
          </div>
        </div>

        {/* Filter and Search Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 p-3 bg-panel-light/60 rounded-xl border border-panel-border">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-3.5 h-3.5 text-text-muted absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search by problem title, keyword, or #ID (e.g. JOIN, bonus, #176)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-panel border border-panel-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2 text-xs text-text-muted hover:text-text-primary"
              >
                ×
              </button>
            )}
          </div>

          {/* Filter Dropdowns */}
          <div className="flex items-center gap-2">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-panel border border-panel-border text-xs text-text-secondary focus:outline-none focus:border-brand shadow-xs cursor-pointer"
            >
              <option value="All">All Difficulties</option>
              <option value="Beginner">Beginner</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-panel border border-panel-border text-xs text-text-secondary focus:outline-none focus:border-brand shadow-xs cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value={QUESTION_STATUS.SOLVED}>Solved</option>
              <option value={QUESTION_STATUS.ATTEMPTED}>Attempted</option>
              <option value={QUESTION_STATUS.NOT_STARTED}>Pending</option>
              <option value={QUESTION_STATUS.NEEDS_REVIEW}>Needs Review</option>
              <option value="bookmarked">Bookmarked</option>
            </select>
          </div>
        </div>

        {/* Topic Selector Tabs Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
          <button
            onClick={() => setSelectedTopic('All')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedTopic === 'All'
                ? 'bg-brand text-white shadow-xs'
                : 'bg-panel-light hover:bg-panel-lighter border border-panel-border text-text-secondary hover:text-text-primary'
            }`}
          >
            All Modules ({filteredQuestions.length})
          </button>

          {CANONICAL_TOPICS.map((topic, idx) => {
            const rawTopicCount = questions.filter(q => q.topic === topic).length;
            const filteredCount = questionsByTopic[topic]?.length || 0;
            const solvedInTopic = topicStats[topic]?.solved || 0;
            const isActive = selectedTopic === topic;
            const Icon = TOPIC_ICONS[topic] || BookOpen;

            return (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-brand text-white shadow-xs'
                    : 'bg-panel-light hover:bg-panel-lighter border border-panel-border text-text-secondary hover:text-text-primary'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{idx + 1}. {topic}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isActive ? 'bg-white/20 text-white' : 'bg-panel-border text-text-muted'
                }`}>
                  {solvedInTopic}/{rawTopicCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Topics Content */}
        {filteredQuestions.length === 0 ? (
          <div className="p-12 text-center rounded-xl bg-panel-light border border-panel-border space-y-3">
            <HelpCircle className="w-8 h-8 text-text-muted mx-auto" />
            <h4 className="text-sm font-bold text-text-primary">No questions match your current filters</h4>
            <p className="text-xs text-text-secondary max-w-sm mx-auto">
              Try adjusting your search terms, clearing difficulty filters, or switching to "All Modules".
            </p>
            <button
              onClick={() => {
                setSelectedTopic('All');
                setSelectedDifficulty('All');
                setSelectedStatus('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-brand text-white text-xs font-semibold shadow-xs hover:bg-brand-hover cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {activeTopics.map((topic) => {
              const topicQuestions = questionsByTopic[topic] || [];
              if (topicQuestions.length === 0) return null;

              const totalInTopic = questions.filter(q => q.topic === topic).length;
              const tStats = topicStats[topic] || { total: totalInTopic, solved: 0, attempted: 0 };
              const pct = totalInTopic > 0 ? Math.round((tStats.solved / totalInTopic) * 100) : 0;
              const topicOrder = CANONICAL_TOPICS.indexOf(topic) + 1;
              const TopicIcon = TOPIC_ICONS[topic] || BookOpen;

              // Group questions within this topic by subtopic
              const subtopicMap = {};
              topicQuestions.forEach((q) => {
                const sub = q.subtopic || 'General Practice';
                if (!subtopicMap[sub]) subtopicMap[sub] = [];
                subtopicMap[sub].push(q);
              });

              return (
                <div 
                  key={topic}
                  className="rounded-2xl bg-panel-light/30 border border-panel-border p-4 sm:p-5 space-y-4 shadow-2xs"
                >
                  {/* Topic Module Header Banner */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-panel-border/70">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-brand/10 border border-brand/20 text-brand font-bold text-xs shrink-0">
                        <TopicIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-text-primary flex items-center gap-2">
                          <span>{topicOrder}. {topic}</span>
                          <span className="text-xs font-normal text-text-muted">
                            ({topicQuestions.length} of {totalInTopic} Problems)
                          </span>
                        </h4>
                        <div className="text-[11px] text-text-secondary mt-0.5">
                          {tStats.solved} of {totalInTopic} solved ({pct}%) • {Object.keys(subtopicMap).length} Chapters
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Mini Progress Bar */}
                      <div className="w-28 bg-panel-light h-2 rounded-full overflow-hidden border border-panel-border hidden sm:block">
                        <div 
                          className="bg-brand h-full rounded-full transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        ></div>
                      </div>

                      <button
                        onClick={() => onNavigateToQuestion(topicQuestions[0])}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand/10 hover:bg-brand/20 text-brand text-xs font-semibold transition-all cursor-pointer shrink-0"
                      >
                        <span>Start Topic</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Subtopics Listing */}
                  <div className="space-y-4">
                    {Object.entries(subtopicMap).map(([subtopicName, subQuestions]) => {
                      const collapseKey = `${topic}-${subtopicName}`;
                      const isCollapsed = collapsedSubtopics[collapseKey];
                      const subSolved = subQuestions.filter(q => progressMap[q.id]?.status === QUESTION_STATUS.SOLVED).length;

                      return (
                        <div 
                          key={subtopicName} 
                          className="rounded-xl bg-panel border border-panel-border/80 overflow-hidden shadow-2xs"
                        >
                          {/* Subtopic Header Bar */}
                          <div
                            onClick={() => toggleSubtopic(collapseKey)}
                            className="flex items-center justify-between p-3 bg-panel-light/60 hover:bg-panel-light border-b border-panel-border/60 cursor-pointer select-none transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              {isCollapsed ? (
                                <ChevronRight className="w-3.5 h-3.5 text-text-muted" />
                              ) : (
                                <ChevronDown className="w-3.5 h-3.5 text-text-muted" />
                              )}
                              <span className="font-semibold text-xs text-text-primary">
                                {subtopicName}
                              </span>
                              <span className="text-[10px] text-text-muted font-normal px-2 py-0.5 rounded-full bg-panel-light border border-panel-border">
                                {subQuestions.length} Questions
                              </span>
                            </div>

                            <div className="text-[11px] font-mono font-medium text-text-secondary">
                              {subSolved}/{subQuestions.length} Solved
                            </div>
                          </div>

                          {/* Subtopic Questions Container */}
                          {!isCollapsed && (
                            <div className="p-3">
                              {viewMode === 'list' ? (
                                /* LeetCode-style Problem Rows */
                                <div className="divide-y divide-panel-border/50">
                                  {subQuestions.map((q) => {
                                    const status = progressMap[q.id]?.status || QUESTION_STATUS.NOT_STARTED;
                                    return (
                                      <div
                                        key={q.id}
                                        onClick={() => onNavigateToQuestion(q)}
                                        className="group flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-brand/[0.04] transition-all cursor-pointer -mx-1"
                                      >
                                        <div className="flex items-center gap-3 min-w-0 flex-1">
                                          <div className="shrink-0">{getStatusIcon(q.id)}</div>
                                          <span className="font-mono text-xs font-bold text-text-muted group-hover:text-brand transition-colors shrink-0 w-8">
                                            #{q.id}
                                          </span>
                                          <div className="min-w-0 pr-2">
                                            <h5 className="text-xs sm:text-sm font-semibold text-text-primary group-hover:text-brand transition-colors truncate">
                                              {q.title}
                                            </h5>
                                            <div className="flex items-center gap-2 mt-0.5 text-[10px] text-text-muted">
                                              <span>{q.tableName || 'Employees'}</span>
                                              {q.tags && q.tags.length > 0 && (
                                                <>
                                                  <span>•</span>
                                                  <span className="truncate">{q.tags.slice(0, 3).join(', ')}</span>
                                                </>
                                              )}
                                            </div>
                                          </div>
                                        </div>

                                        <div className="flex items-center gap-2.5 shrink-0">
                                          {getDifficultyBadge(q.difficulty)}
                                          <span className="text-[11px] text-text-muted hidden md:flex items-center gap-1 font-mono">
                                            <Clock className="w-3 h-3 text-text-muted" />
                                            {q.estimatedTimeMinutes || 3}m
                                          </span>
                                          <button className="flex items-center gap-1 text-xs font-semibold text-brand bg-brand/10 hover:bg-brand/20 px-2.5 py-1 rounded-md transition-all group-hover:translate-x-0.5 cursor-pointer">
                                            <span>Solve</span>
                                            <ArrowRight className="w-3 h-3" />
                                          </button>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              ) : (
                                /* Compact Matrix Grid */
                                <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-15 xl:grid-cols-20 gap-1.5">
                                  {subQuestions.map((q) => (
                                    <button
                                      key={q.id}
                                      onClick={() => onNavigateToQuestion(q)}
                                      title={`Q${q.id}: ${q.title} (${q.difficulty} • ${subtopicName})`}
                                      className={`h-8 sm:h-9 rounded-md border font-mono text-[11px] font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer ${getStatusBadgeStyle(q.id)}`}
                                    >
                                      {q.id}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
