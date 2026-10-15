import React from 'react';
import { 
  Play, Send, RotateCcw, AlignLeft, Copy, Trash2, 
  Lightbulb, Eye, Check, ChevronLeft, ChevronRight, ArrowLeft,
  Sun, Moon 
} from 'lucide-react';
import { useToast } from './Toast.jsx';

export default function QueryToolbar({
  onRunQuery,
  onSubmitAnswer,
  onResetQuery,
  onFormatSql,
  onClearQuery,
  onCopyQuery,
  onPrevQuestion,
  onNextQuestion,
  hasPrev = false,
  hasNext = false,
  currentQuestionId = 1,
  totalQuestions = 50,
  isRunning = false,
  isSubmitting = false,
  onNavigateToDashboard,
  editorTheme = 'auto',
  effectiveEditorTheme = 'dark',
  onToggleEditorTheme
}) {
  const [copied, setCopied] = React.useState(false);
  const { addToast } = useToast();

  const handleCopy = () => {
    onCopyQuery();
    setCopied(true);
    addToast('SQL query copied to clipboard', 'info');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-11 px-3 bg-panel-light border-b border-panel-border flex items-center justify-between select-none">
      {/* Left primary execution controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={onRunQuery}
          disabled={isRunning}
          title="Run SQL Query (Cmd+Enter or Ctrl+Enter)"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-brand hover:bg-brand-hover text-white font-semibold text-xs transition-all shadow-xs active:scale-95 disabled:opacity-50 cursor-pointer"
        >
          <Play className={`w-3.5 h-3.5 fill-current ${isRunning ? 'animate-spin' : ''}`} />
          <span>Run Query</span>
          <kbd className="hidden sm:inline-block ml-1 text-[10px] bg-black/20 px-1 py-0.5 rounded text-white font-mono">
            ⌘↵
          </kbd>
        </button>

        <button
          onClick={onSubmitAnswer}
          disabled={isSubmitting}
          title="Submit answer for validation against expected result"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#3563A9] hover:bg-[#2B528E] text-white font-semibold text-xs transition-all shadow-xs active:scale-95 disabled:opacity-50 cursor-pointer"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Submit Answer</span>
        </button>

        <div className="h-4 w-px bg-panel-border mx-1"></div>

        <button
          onClick={onFormatSql}
          title="Format SQL query with clean indentation"
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-panel border border-transparent hover:border-panel-border transition-colors"
        >
          <AlignLeft className="w-3.5 h-3.5 text-text-muted" />
          <span className="hidden sm:inline">Format</span>
        </button>

        <button
          onClick={onResetQuery}
          title="Reset query draft to initial template"
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-panel border border-transparent hover:border-panel-border transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 text-text-muted" />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>

      {/* Right controls: Forward / Backward navigation + Editor actions */}
      <div className="flex items-center gap-2">
        {/* Forward & Backward Navigator in Toolbar */}
        <div className="flex items-center gap-1 bg-panel border border-panel-border rounded-lg p-0.5">
          {onNavigateToDashboard && (
            <button
              onClick={onNavigateToDashboard}
              title="Return to Dashboard (Esc)"
              className="p-1 px-1.5 rounded text-text-secondary hover:text-brand hover:bg-panel-light transition-colors flex items-center gap-1 text-[11px] font-medium cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-brand group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden xl:inline">Dashboard</span>
            </button>
          )}

          {onNavigateToDashboard && <div className="h-3 w-px bg-panel-border"></div>}

          <button
            onClick={onPrevQuestion}
            disabled={!hasPrev}
            title="Previous question (Alt + Left)"
            className="p-1 rounded text-text-secondary hover:text-text-primary hover:bg-panel-light disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span className="text-[11px] font-mono px-1.5 text-text-primary font-semibold select-none">
            #{currentQuestionId}/{totalQuestions}
          </span>
          <button
            onClick={onNextQuestion}
            disabled={!hasNext}
            title="Next question (Alt + Right)"
            className="p-1 rounded text-text-secondary hover:text-text-primary hover:bg-panel-light disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="h-4 w-px bg-panel-border"></div>

        {/* Independent Editor Theme Toggle Button */}
        {onToggleEditorTheme && (
          <button
            onClick={onToggleEditorTheme}
            title={`Code Editor Theme: ${editorTheme === 'auto' ? `Auto (matches ${effectiveEditorTheme})` : editorTheme}. Click to cycle: Auto → Dark → White.`}
            className="flex items-center gap-1.5 px-2 py-1 rounded bg-panel hover:bg-panel-light border border-panel-border text-text-secondary hover:text-text-primary transition-all text-xs cursor-pointer shadow-xs"
          >
            {effectiveEditorTheme === 'dark' ? (
              <Moon className="w-3.5 h-3.5 text-brand" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-amber-500" />
            )}
            <span className="text-[11px] font-mono hidden sm:inline">
              Editor: {editorTheme === 'auto' ? `Auto (${effectiveEditorTheme})` : editorTheme}
            </span>
          </button>
        )}

        <button
          onClick={handleCopy}
          title="Copy SQL to clipboard"
          className="p-1.5 rounded text-text-secondary hover:text-text-primary hover:bg-panel border border-transparent hover:border-panel-border transition-colors cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={onClearQuery}
          title="Clear editor contents"
          className="p-1.5 rounded text-text-secondary hover:text-danger hover:bg-panel border border-transparent hover:border-panel-border transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
