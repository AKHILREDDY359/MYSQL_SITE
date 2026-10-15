import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TopicProgress({ topic, stats, onPracticeTopic }) {
  const { total = 0, solved = 0, attempted = 0 } = stats || {};
  const percentage = total > 0 ? Math.round((solved / total) * 100) : 0;

  return (
    <div className="p-4 rounded-xl bg-panel border border-panel-border space-y-3 hover:border-panel-lighter transition-all">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-sm font-semibold text-text-primary">
            {topic}
          </h4>
          <span className="text-[11px] text-text-secondary">
            {solved} of {total} solved ({percentage}%)
          </span>
        </div>
        <button
          onClick={() => onPracticeTopic(topic)}
          className="flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-hover hover:underline transition-colors pt-0.5"
        >
          <span>Practice</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-panel-light h-2 rounded-full overflow-hidden border border-panel-border">
        <div
          className="bg-brand h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-text-muted">
        <span>Attempted: {attempted}</span>
        {percentage === 100 && (
          <span className="text-success flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" /> Mastered
          </span>
        )}
      </div>
    </div>
  );
}
