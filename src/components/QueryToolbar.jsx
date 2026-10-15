import React from 'react';
import { Play, Send, RotateCcw, AlignLeft, Copy, Trash2, Lightbulb, Eye, Check } from 'lucide-react';
import { useToast } from './Toast.jsx';

export default function QueryToolbar({
  onRunQuery,
  onSubmitAnswer,
  onResetQuery,
  onFormatSql,
  onClearQuery,
  onCopyQuery,
  onToggleHint,
  onToggleSolution,
  isRunning = false,
  isSubmitting = false
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
    <div className="h-11 px-3 bg-panel-light/90 border-b border-panel-border flex items-center justify-between select-none">
      {/* Left primary execution controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={onRunQuery}
          disabled={isRunning}
          title="Run SQL Query (Cmd+Enter or Ctrl+Enter)"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md shadow-emerald-900/30 active:scale-95 disabled:opacity-50"
        >
          <Play className={`w-3.5 h-3.5 fill-current ${isRunning ? 'animate-spin' : ''}`} />
          <span>Run Query</span>
          <kbd className="hidden sm:inline-block ml-1 text-[10px] bg-emerald-700/60 px-1 py-0.5 rounded text-emerald-100 font-mono">
            ⌘↵
          </kbd>
        </button>

        <button
          onClick={onSubmitAnswer}
          disabled={isSubmitting}
          title="Submit answer for validation against expected result"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-brand hover:bg-brand-hover text-white font-semibold text-xs transition-all shadow-md shadow-brand/20 active:scale-95 disabled:opacity-50"
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

      {/* Right editor actions */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={handleCopy}
          title="Copy SQL to clipboard"
          className="p-1.5 rounded text-text-secondary hover:text-text-primary hover:bg-panel border border-transparent hover:border-panel-border transition-colors"
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
