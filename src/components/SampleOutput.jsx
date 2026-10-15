import React, { useState } from 'react';
import { Table, ChevronDown, ChevronUp, CheckCircle, Info, Maximize2, Minimize2 } from 'lucide-react';

export default function SampleOutput({ expectedOutput, explanation, questionNumber }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isFullView, setIsFullView] = useState(false);

  if (!expectedOutput) return null;

  const { columns = [], values = [], rowCount = 0 } = expectedOutput;

  return (
    <div className={`border border-panel-border rounded-lg bg-panel overflow-hidden transition-all duration-200 ${isFullView ? 'fixed inset-4 z-50 shadow-2xl flex flex-col bg-panel-light p-4' : ''}`}>
      {/* Header */}
      <div className="p-2.5 bg-panel-light border-b border-panel-border flex items-center justify-between">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-left group focus:outline-none flex-1"
        >
          {isExpanded ? (
            <ChevronUp className="w-3.5 h-3.5 text-text-secondary group-hover:text-text-primary" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-text-secondary group-hover:text-text-primary" />
          )}
          <span className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-success" />
            Expected Output
          </span>
          <span className="text-[11px] font-mono px-1.5 py-0.2 rounded bg-panel border border-panel-border text-text-secondary">
            {rowCount} {rowCount === 1 ? 'row' : 'rows'}
          </span>
        </button>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsFullView(!isFullView)}
            title={isFullView ? "Exit Fullscreen" : "Expand Expected Output"}
            className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-panel-border transition-colors"
          >
            {isFullView ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className={`p-3 space-y-3 ${isFullView ? 'flex-1 overflow-auto' : ''}`}>
          {/* Explanation Callout */}
          {explanation && (
            <div className="flex items-start gap-2 p-2.5 rounded-md bg-brand/10 border border-brand/20 text-xs text-blue-900 dark:text-blue-200">
              <Info className="w-4 h-4 text-brand shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="font-semibold text-brand">Requirement logic: </span>
                {explanation}
              </div>
            </div>
          )}

          {/* Data Table */}
          <div className="sql-table-container max-h-56 overflow-auto border border-panel-border rounded">
            <table className="sql-table">
              <thead>
                <tr>
                  {columns.map((col) => (
                    <th key={col}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {values.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length} className="text-center py-4 text-text-muted italic">
                      No rows returned for this criteria
                    </td>
                  </tr>
                ) : (
                  values.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx}>
                          {cell === null ? (
                            <span className="text-text-muted italic">NULL</span>
                          ) : typeof cell === 'number' ? (
                            <span className="text-emerald-700 dark:text-emerald-300 font-mono font-medium">{cell}</span>
                          ) : (
                            String(cell)
                          )}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="text-[11px] text-text-secondary flex items-center justify-between">
            <span>Expected schema: <span className="font-mono text-text-primary">{columns.join(', ')}</span></span>
            <span>Total: <strong className="text-text-primary">{rowCount}</strong> rows</span>
          </div>
        </div>
      )}
    </div>
  );
}
