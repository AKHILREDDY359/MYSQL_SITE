import React from 'react';
import { 
  Play, RotateCcw, AlertTriangle, CheckCircle2, 
  HelpCircle, BarChart3, TrendingUp, Calendar, Zap, 
  BookMarked, ArrowRight, Award, Compass
} from 'lucide-react';
import ProgressCard from '../components/ProgressCard.jsx';
import TopicProgress from '../components/TopicProgress.jsx';
import { QUESTION_STATUS } from '../services/progressService.js';

export default function Dashboard({
  metrics,
  questions,
  onNavigateToQuestion,
  onNavigateToPractice,
  progressMap,
  bookmarks
}) {
  const {
    total = 50,
    solved = 0,
    attempted = 0,
    pending = 50,
    incorrectQuestionsCount = 0,
    needsReview = 0,
    solvedToday = 0,
    accuracy = 0,
    completionPercentage = 0,
    topicStats = {},
    difficultyStats = {}
  } = metrics;

  // Find first unsolved or attempted question for "Resume Practice"
  const getResumeQuestion = () => {
    // 1. Check for attempted but unsolved question
    const firstAttempted = questions.find(q => progressMap[q.id]?.status === QUESTION_STATUS.ATTEMPTED);
    if (firstAttempted) return firstAttempted;
    // 2. Check for first not_started question
    const firstPending = questions.find(q => !progressMap[q.id] || progressMap[q.id]?.status === QUESTION_STATUS.NOT_STARTED);
    if (firstPending) return firstPending;
    // 3. Fallback to first question
    return questions[0];
  };

  // Find first incorrect question
  const getFirstIncorrectQuestion = () => {
    return questions.find(q => progressMap[q.id]?.incorrectCount > 0 && progressMap[q.id]?.status !== QUESTION_STATUS.SOLVED) || questions[0];
  };

  const handleResume = () => {
    const q = getResumeQuestion();
    onNavigateToQuestion(q);
  };

  const handleReviewIncorrect = () => {
    const q = getFirstIncorrectQuestion();
    onNavigateToQuestion(q);
  };

  const getStatusColor = (qid) => {
    const p = progressMap[qid];
    if (!p || p.status === QUESTION_STATUS.NOT_STARTED) {
      return 'bg-panel-light hover:bg-panel-border text-text-muted border-panel-border';
    }
    if (p.status === QUESTION_STATUS.SOLVED) {
      return 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300 hover:bg-emerald-900/60';
    }
    if (p.status === QUESTION_STATUS.NEEDS_REVIEW) {
      return 'bg-purple-950/60 border-purple-500/50 text-purple-300 hover:bg-purple-900/60';
    }
    return 'bg-amber-950/60 border-amber-500/50 text-amber-300 hover:bg-amber-900/60';
  };

  return (
    <div className="flex-1 overflow-y-auto bg-background p-6 space-y-8 max-w-7xl mx-auto w-full">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-panel via-panel-light to-panel border border-panel-border p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/30 text-xs font-semibold text-brand">
              <Compass className="w-3.5 h-3.5" />
              <span>Placement Preparation Hub</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Master SQL Technical Interviews with SQL Sprint
            </h1>
            <p className="text-sm text-text-secondary leading-relaxed">
              50 rigorously verified interview problems covering WHERE, Aggregates, GROUP BY, HAVING, and ORDER BY with live WebAssembly SQL execution against the corporate Employees dataset.
            </p>
          </div>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap md:flex-col gap-3 shrink-0">
            <button
              onClick={handleResume}
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand hover:bg-brand-hover text-white font-semibold text-sm shadow-lg shadow-brand/25 transition-all active:scale-95"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Resume Practice</span>
            </button>

            {incorrectQuestionsCount > 0 && (
              <button
                onClick={handleReviewIncorrect}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-panel-light hover:bg-panel-lighter border border-panel-border text-amber-300 hover:text-amber-200 text-xs font-medium transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry Incorrect ({incorrectQuestionsCount})</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main KPI Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <ProgressCard
          title="Total Questions"
          value={total}
          subtitle="Part A to Part F"
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
          subtitle="Work in progress"
          icon={Zap}
          color="warning"
        />
        <ProgressCard
          title="Pending"
          value={pending}
          subtitle="Not started yet"
          icon={Compass}
          color="brand"
        />
        <ProgressCard
          title="Accuracy"
          value={`${accuracy}%`}
          subtitle="Submission precision"
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

      {/* Overall Progress Bar Card */}
      <div className="p-6 rounded-2xl bg-panel border border-panel-border space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-text-primary flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Overall Placement Readiness</span>
            </h3>
            <p className="text-xs text-text-secondary mt-0.5">
              Target: Complete all 50 questions before technical placement rounds
            </p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold font-mono text-brand">{completionPercentage}%</span>
            <span className="text-xs text-text-secondary block">{solved} / {total} Problems</span>
          </div>
        </div>

        <div className="w-full bg-panel-light h-3 rounded-full overflow-hidden border border-panel-border">
          <div
            className="bg-gradient-to-r from-brand via-blue-400 to-emerald-400 h-full rounded-full transition-all duration-700 ease-out"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>

        {/* Difficulty Breakdown Badges */}
        <div className="flex flex-wrap gap-4 pt-2 border-t border-panel-border/60 text-xs">
          {Object.entries(difficultyStats).map(([diff, s]) => {
            const pct = s.total > 0 ? Math.round((s.solved / s.total) * 100) : 0;
            return (
              <div key={diff} className="flex items-center gap-2 bg-panel-light px-3 py-1.5 rounded-lg border border-panel-border">
                <span className="font-semibold text-text-primary">{diff}:</span>
                <span className="font-mono text-text-secondary">{s.solved}/{s.total}</span>
                <span className="text-[11px] text-brand font-medium">({pct}%)</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 50-Question Interactive Matrix */}
      <div className="p-6 rounded-2xl bg-panel border border-panel-border space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-text-primary">
              Question Navigator Grid (1 – 50)
            </h3>
            <p className="text-xs text-text-secondary mt-0.5">
              Click any question number to jump directly to its practice workspace
            </p>
          </div>
          {/* Legend */}
          <div className="hidden sm:flex items-center gap-3 text-[11px] text-text-secondary">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-emerald-500"></span> Solved
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-amber-500"></span> Attempted
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-purple-500"></span> Review
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-panel-lighter border border-panel-border"></span> Pending
            </span>
          </div>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
          {questions.map((q) => (
            <button
              key={q.id}
              onClick={() => onNavigateToQuestion(q)}
              title={`Q${q.id}: ${q.title} (${q.difficulty})`}
              className={`h-10 rounded-lg border font-mono text-xs font-bold transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center ${getStatusColor(q.id)}`}
            >
              {q.id}
            </button>
          ))}
        </div>
      </div>

      {/* Topic Mastery Progress Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-text-primary">
            Curriculum Mastery by Topic
          </h3>
          <span className="text-xs text-text-secondary">
            6 Core Placement Modules
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(topicStats).map(([topic, stats]) => (
            <TopicProgress
              key={topic}
              topic={topic}
              stats={stats}
              onPracticeTopic={(t) => {
                const firstQ = questions.find(q => q.topic === t);
                if (firstQ) onNavigateToQuestion(firstQ);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
