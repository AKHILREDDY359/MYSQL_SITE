import React, { useState, useRef } from 'react';
import { 
  Download, Upload, Trash2, CheckCircle2, AlertCircle, 
  Clock, Bookmark, Search, RotateCcw, ArrowRight, 
  BarChart3, RefreshCw, FileText 
} from 'lucide-react';
import ConfirmDialog from '../components/ConfirmDialog.jsx';
import { exportProgressData, importProgressData } from '../utils/exportImport.js';
import { QUESTION_STATUS, resetProgress } from '../services/progressService.js';
import { useToast } from '../components/Toast.jsx';

export default function ProgressDashboard({
  metrics,
  questions,
  progressMap,
  bookmarks,
  onNavigateToQuestion,
  onRefreshData
}) {
  const [searchFilter, setSearchFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);
  const fileInputRef = useRef(null);
  const { addToast } = useToast();

  const handleExport = () => {
    try {
      exportProgressData();
      addToast('Progress successfully exported as JSON file', 'success');
    } catch (err) {
      addToast('Failed to export progress: ' + err.message, 'error');
    }
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        const res = importProgressData(content);
        if (res.success) {
          addToast('Progress imported successfully!', 'success');
          onRefreshData();
        } else {
          addToast('Import failed: ' + res.error, 'error');
        }
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleConfirmReset = () => {
    resetProgress();
    setIsResetDialogOpen(false);
    onRefreshData();
    addToast('All practice progress and saved drafts have been reset.', 'info');
  };

  const filteredQuestions = questions.filter((q) => {
    if (searchFilter) {
      const qText = searchFilter.toLowerCase();
      if (!q.title.toLowerCase().includes(qText) && !String(q.id).includes(qText)) {
        return false;
      }
    }

    if (statusFilter !== 'All') {
      const status = progressMap[q.id]?.status || QUESTION_STATUS.NOT_STARTED;
      if (statusFilter === 'bookmarked') {
        if (!bookmarks.includes(q.id)) return false;
      } else if (status !== statusFilter) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="flex-1 overflow-y-auto bg-background px-6 lg:px-8 xl:px-10 py-6 space-y-6 w-full">
      {/* Hidden File Input for JSON Import */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".json"
        className="hidden"
      />

      {/* Header and Action Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-panel-border pb-5">
        <div>
          <h1 className="text-2xl font-bold text-text-primary tracking-tight flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-brand" />
            <span>Placement Progress & Audit Trail</span>
          </h1>
          <p className="text-xs text-text-secondary mt-1">
            Detailed log of submissions, attempts, error history, and local persistence backup.
          </p>
        </div>

        {/* Data Management Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleExport}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-panel-light hover:bg-panel-lighter border border-panel-border text-xs font-semibold text-text-primary transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-brand" />
            <span>Export JSON</span>
          </button>

          <button
            onClick={handleImportClick}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-panel-light hover:bg-panel-lighter border border-panel-border text-xs font-semibold text-text-primary transition-colors shadow-sm"
          >
            <Upload className="w-3.5 h-3.5 text-emerald-400" />
            <span>Import JSON</span>
          </button>

          <button
            onClick={() => setIsResetDialogOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-danger/10 hover:bg-danger/20 border border-danger/30 text-xs font-semibold text-danger transition-colors shadow-sm"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Reset Progress</span>
          </button>
        </div>
      </div>

      {/* Summary Stat Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-panel border border-panel-border">
          <span className="text-xs text-text-secondary font-medium">Solved Questions</span>
          <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1">
            {metrics.solved} / {metrics.total}
          </div>
          <span className="text-[11px] text-text-muted">{metrics.completionPercentage}% Complete</span>
        </div>

        <div className="p-4 rounded-xl bg-panel border border-panel-border">
          <span className="text-xs text-text-secondary font-medium">In Progress (Attempted)</span>
          <div className="text-2xl font-bold font-mono text-amber-600 dark:text-amber-400 mt-1">
            {metrics.attempted}
          </div>
          <span className="text-[11px] text-text-muted">Requires further attempts</span>
        </div>

        <div className="p-4 rounded-xl bg-panel border border-panel-border">
          <span className="text-xs text-text-secondary font-medium">Incorrect Submissions</span>
          <div className="text-2xl font-bold font-mono text-red-600 dark:text-red-400 mt-1">
            {metrics.incorrectQuestionsCount}
          </div>
          <span className="text-[11px] text-text-muted">Questions with logged errors</span>
        </div>

        <div className="p-4 rounded-xl bg-panel border border-panel-border">
          <span className="text-xs text-text-secondary font-medium">Submission Accuracy</span>
          <div className="text-2xl font-bold font-mono text-brand mt-1">
            {metrics.accuracy}%
          </div>
          <span className="text-[11px] text-text-muted">Precision rate</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-panel rounded-xl border border-panel-border">
        <div className="relative w-full sm:w-80">
          <Search className="w-3.5 h-3.5 text-text-muted absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-panel-light border border-panel-border text-xs text-text-primary focus:outline-none focus:border-brand"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full sm:w-44 px-3 py-1.5 rounded-lg bg-panel-light border border-panel-border text-xs text-text-secondary focus:outline-none focus:border-brand"
          >
            <option value="All">All Statuses</option>
            <option value={QUESTION_STATUS.SOLVED}>Solved Only</option>
            <option value={QUESTION_STATUS.ATTEMPTED}>Attempted Only</option>
            <option value={QUESTION_STATUS.NOT_STARTED}>Not Started Only</option>
            <option value={QUESTION_STATUS.NEEDS_REVIEW}>Needs Review</option>
            <option value="bookmarked">Bookmarked</option>
          </select>
        </div>
      </div>

      {/* Comprehensive Audit Table */}
      <div className="rounded-xl border border-panel-border overflow-hidden bg-panel shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-panel-light text-text-secondary border-b border-panel-border font-medium">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Question Title</th>
                <th className="py-3 px-4">Topic</th>
                <th className="py-3 px-4">Difficulty</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Attempts</th>
                <th className="py-3 px-4">Last Activity</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-panel-border/60">
              {filteredQuestions.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-8 text-text-muted">
                    No questions found matching your filter criteria.
                  </td>
                </tr>
              ) : (
                filteredQuestions.map((q) => {
                  const p = progressMap[q.id];
                  const status = p?.status || QUESTION_STATUS.NOT_STARTED;
                  const isBookmarked = bookmarks.includes(q.id);

                  return (
                    <tr key={q.id} className="hover:bg-panel-light transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-text-primary">
                        #{q.id}
                      </td>
                      <td className="py-3 px-4 font-medium text-text-primary">
                        <div className="flex items-center gap-1.5">
                          <span>{q.title}</span>
                          {isBookmarked && <Bookmark className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-text-secondary text-[11px]">
                        {q.topic}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${
                          q.difficulty === 'Easy'
                            ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
                            : q.difficulty === 'Medium'
                            ? 'text-amber-700 dark:text-amber-400 bg-amber-500/10 border-amber-500/30'
                            : 'text-red-700 dark:text-red-400 bg-red-500/10 border-red-500/30'
                        }`}>
                          {q.difficulty}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        {status === QUESTION_STATUS.SOLVED ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-success" /> Solved
                          </span>
                        ) : status === QUESTION_STATUS.ATTEMPTED ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 dark:text-amber-400">
                            <AlertCircle className="w-3.5 h-3.5 text-warning" /> Attempted
                          </span>
                        ) : status === QUESTION_STATUS.NEEDS_REVIEW ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-700 dark:text-purple-400">
                            <Bookmark className="w-3.5 h-3.5 text-purple-400" /> Review
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] text-text-muted">
                            <Clock className="w-3.5 h-3.5 text-text-muted" /> Pending
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 font-mono text-text-secondary text-[11px]">
                        {p?.attempts || 0} {p?.incorrectCount > 0 ? `(${p.incorrectCount} err)` : ''}
                      </td>
                      <td className="py-3 px-4 text-text-muted text-[11px]">
                        {p?.lastAttemptAt ? new Date(p.lastAttemptAt).toLocaleDateString() : '—'}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => onNavigateToQuestion(q)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-hover hover:underline"
                        >
                          <span>Solve</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmation Dialog for Reset Progress */}
      <ConfirmDialog
        isOpen={isResetDialogOpen}
        title="Reset All Practice Progress?"
        message="This action will permanently delete all completed question marks, attempt counts, and saved SQL query drafts. This action cannot be undone. We recommend exporting your progress first."
        confirmText="Yes, Reset Everything"
        cancelText="Cancel"
        isDanger={true}
        onConfirm={handleConfirmReset}
        onCancel={() => setIsResetDialogOpen(false)}
      />
    </div>
  );
}
