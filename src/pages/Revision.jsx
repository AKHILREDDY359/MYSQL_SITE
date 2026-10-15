import React, { useState } from 'react';
import { 
  BookOpen, Search, Copy, Check, AlertTriangle, 
  Code, ArrowRight, Sparkles, Filter 
} from 'lucide-react';
import { REVISION_TOPICS } from '../data/revisionNotes.js';
import { useToast } from '../components/Toast.jsx';

export default function Revision({ onNavigateToTopicQuestions }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopicId, setSelectedTopicId] = useState(REVISION_TOPICS[0].id);
  const [copiedSnippet, setCopiedSnippet] = useState(null);
  const { addToast } = useToast();

  const filteredTopics = REVISION_TOPICS.filter((topic) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      topic.title.toLowerCase().includes(q) ||
      topic.summary.toLowerCase().includes(q) ||
      topic.explanation.toLowerCase().includes(q)
    );
  });

  const activeTopic = REVISION_TOPICS.find((t) => t.id === selectedTopicId) || REVISION_TOPICS[0];

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    addToast('Code example copied to clipboard', 'info');
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-background">
      {/* Revision Sidebar / Topic Index */}
      <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-panel-border bg-panel flex flex-col select-none">
        {/* Search Header */}
        <div className="p-4 border-b border-panel-border space-y-3">
          <div className="flex items-center gap-2 text-text-primary font-bold text-sm">
            <BookOpen className="w-4 h-4 text-brand" />
            <span>Placement Revision Notes</span>
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-text-muted absolute left-2.5 top-2.5" />
            <input
              type="text"
              placeholder="Search concepts or syntax..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-panel-light border border-panel-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand"
            />
          </div>
        </div>

        {/* Topic Index List */}
        <div className="flex-1 overflow-y-auto divide-y divide-panel-border/50">
          {filteredTopics.map((topic) => {
            const isSelected = topic.id === activeTopic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className={`w-full text-left p-3.5 transition-colors flex flex-col gap-1 ${
                  isSelected
                    ? 'bg-brand/15 border-l-4 border-l-brand text-text-primary'
                    : 'text-text-secondary hover:bg-panel-light hover:text-text-primary'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-text-primary">
                    {topic.title}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-panel-light text-brand border border-brand/20">
                    {topic.badge}
                  </span>
                </div>
                <p className="text-[11px] text-text-muted line-clamp-1">
                  {topic.summary}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Revision Reader Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 w-full">
        {/* Topic Header */}
        <div className="space-y-2 border-b border-panel-border pb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-semibold text-brand">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{activeTopic.badge}</span>
          </div>
          <h1 className="text-2xl font-bold text-text-primary tracking-tight">
            {activeTopic.title}
          </h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            {activeTopic.summary}
          </p>
        </div>

        {/* Detailed Explanation */}
        <div className="prose dark:prose-invert max-w-none text-sm text-text-primary leading-relaxed whitespace-pre-line">
          {activeTopic.explanation}
        </div>

        {/* Canonical Syntax Block */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-text-secondary uppercase tracking-wider">
            <span>Canonical Syntax</span>
            <button
              onClick={() => handleCopy(activeTopic.syntax, 'syntax')}
              className="flex items-center gap-1 text-[11px] text-text-secondary hover:text-text-primary"
            >
              {copiedSnippet === 'syntax' ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
              <span>Copy</span>
            </button>
          </div>
          <pre className="p-4 rounded-xl bg-panel-light border border-panel-border font-mono text-xs text-blue-700 dark:text-blue-300 overflow-x-auto leading-relaxed font-semibold">
            {activeTopic.syntax}
          </pre>
        </div>

        {/* Code Examples */}
        {activeTopic.examples && activeTopic.examples.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
              <Code className="w-4 h-4 text-emerald-500" />
              <span>Production Interview Examples</span>
            </h3>

            {activeTopic.examples.map((eg, idx) => (
              <div key={idx} className="space-y-1.5">
                <span className="text-xs text-text-secondary font-medium">{eg.description}</span>
                <div className="relative group">
                  <pre className="p-4 rounded-xl bg-panel border border-panel-border font-mono text-xs text-emerald-800 dark:text-emerald-300 font-medium overflow-x-auto">
                    {eg.sql}
                  </pre>
                  <button
                    onClick={() => handleCopy(eg.sql, `eg-${idx}`)}
                    className="absolute top-3 right-3 p-1.5 rounded-md bg-panel-light border border-panel-border text-text-secondary hover:text-text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Copy snippet"
                  >
                    {copiedSnippet === `eg-${idx}` ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Common Placement Interview Mistakes & Traps */}
        {activeTopic.interviewMistakes && activeTopic.interviewMistakes.length > 0 && (
          <div className="p-4 sm:p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/30 space-y-3">
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Common Placement Traps & Mistakes</span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-xs text-amber-900 dark:text-amber-200/90 leading-relaxed font-normal">
              {activeTopic.interviewMistakes.map((mistake, i) => (
                <li key={i}>{mistake}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Button: Practice Relevant Questions */}
        <div className="pt-4 flex justify-end">
          <button
            onClick={() => onNavigateToTopicQuestions(activeTopic.title)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand hover:bg-brand-hover text-white text-xs font-semibold shadow-lg shadow-brand/20 transition-all"
          >
            <span>Practice {activeTopic.title} Questions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
