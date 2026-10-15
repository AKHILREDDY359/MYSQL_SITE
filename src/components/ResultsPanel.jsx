import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, AlertCircle, Clock, Copy, Download, 
  Terminal, ShieldCheck, Check, Sparkles, ChevronRight, 
  Database, Table, Search 
} from 'lucide-react';
import { getTableData } from '../services/databaseEngine.js';
import { useToast } from './Toast.jsx';

export default function ResultsPanel({
  queryResult,
  submissionResult,
  activeTab,
  setActiveTab,
  onNextQuestion,
  hasNext = false
}) {
  const [copied, setCopied] = useState(false);
  const [masterRows, setMasterRows] = useState({ columns: [], values: [] });
  const [masterSearch, setMasterSearch] = useState('');
  const { addToast } = useToast();

  useEffect(() => {
    async function fetchMaster() {
      try {
        const res = await getTableData('Employees');
        if (res.success) {
          setMasterRows(res);
        }
      } catch (err) {
        console.error('Failed to fetch master table in results panel:', err);
      }
    }
    fetchMaster();
  }, []);

  const handleCopyResults = () => {
    if (!queryResult?.values || queryResult.values.length === 0) {
      addToast('No data to copy', 'warning');
      return;
    }

    const headers = queryResult.columns.join('\t');
    const rows = queryResult.values.map(row => row.join('\t')).join('\n');
    const tsv = `${headers}\n${rows}`;

    navigator.clipboard.writeText(tsv);
    setCopied(true);
    addToast('Results copied to clipboard (TSV format)', 'info');
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredMasterValues = masterRows.values.filter(row => {
    if (!masterSearch) return true;
    const q = masterSearch.toLowerCase();
    return row.some(cell => String(cell).toLowerCase().includes(q));
  });

  return (
    <div className="h-full flex flex-col bg-panel overflow-hidden border-t border-panel-border select-none">
      {/* Panel Tab Header */}
      <div className="h-10 px-3 bg-panel-light/70 border-b border-panel-border flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setActiveTab('results')}
            className={`flex items-center gap-1.5 py-2 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'results'
                ? 'border-brand text-brand'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Query Results</span>
            {queryResult && (
              <span className={`w-2 h-2 rounded-full ${queryResult.success ? 'bg-success' : 'bg-danger'}`}></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('submission')}
            className={`flex items-center gap-1.5 py-2 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'submission'
                ? 'border-brand text-brand'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Test Feedback</span>
            {submissionResult && (
              <span className={`w-2 h-2 rounded-full ${submissionResult.isCorrect ? 'bg-success' : 'bg-danger'}`}></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('masterTable')}
            className={`flex items-center gap-1.5 py-2 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'masterTable'
                ? 'border-brand text-brand'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            <Database className="w-3.5 h-3.5 text-amber-400" />
            <span>Master Table (Employees)</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-panel border border-panel-border text-emerald-400 font-mono">
              20
            </span>
          </button>

          <button
            onClick={() => setActiveTab('safety')}
            className={`flex items-center gap-1.5 py-2 px-3 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'safety'
                ? 'border-brand text-brand'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Engine Info</span>
          </button>
        </div>

        {/* Right status metrics */}
        <div className="flex items-center gap-3 text-xs">
          {queryResult?.executionTimeMs !== undefined && activeTab === 'results' && (
            <div className="flex items-center gap-1 text-text-secondary">
              <Clock className="w-3.5 h-3.5 text-text-muted" />
              <span className="font-mono text-[11px]">{queryResult.executionTimeMs} ms</span>
            </div>
          )}

          {queryResult?.success && queryResult.rowCount !== undefined && activeTab === 'results' && (
            <div className="font-mono text-[11px] px-2 py-0.5 rounded bg-panel border border-panel-border text-text-secondary">
              {queryResult.rowCount} {queryResult.rowCount === 1 ? 'row' : 'rows'}
            </div>
          )}

          {queryResult?.success && queryResult.values?.length > 0 && activeTab === 'results' && (
            <button
              onClick={handleCopyResults}
              title="Copy results as TSV for spreadsheet paste"
              className="flex items-center gap-1 text-[11px] text-text-secondary hover:text-text-primary p-1 rounded hover:bg-panel-border transition-colors"
            >
              {copied ? <Check className="w-3 h-3 text-success" /> : <Copy className="w-3 h-3" />}
              <span className="hidden sm:inline">Copy</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="flex-1 overflow-auto p-3">
        {/* TAB 1: Query Execution Results */}
        {activeTab === 'results' && (
          <div>
            {!queryResult ? (
              <div className="flex flex-col items-center justify-center h-48 text-center text-text-muted space-y-2">
                <Terminal className="w-8 h-8 opacity-40 text-brand" />
                <p className="text-xs">Execute a query using <kbd className="px-1.5 py-0.5 bg-panel-light border border-panel-border rounded font-mono text-[11px] text-text-primary">Run Query</kbd> or press <kbd className="px-1.5 py-0.5 bg-panel-light border border-panel-border rounded font-mono text-[11px] text-text-primary">Cmd+Enter</kbd></p>
              </div>
            ) : !queryResult.success ? (
              /* SQL Error Display */
              <div className="p-4 rounded-lg bg-red-950/30 border border-red-500/30 text-xs space-y-2 text-red-200">
                <div className="flex items-center gap-2 font-semibold text-danger">
                  <AlertCircle className="w-4 h-4" />
                  <span>SQL Execution Error</span>
                </div>
                <pre className="font-mono bg-background/80 p-3 rounded border border-red-500/20 text-red-300 overflow-x-auto whitespace-pre-wrap">
                  {queryResult.error}
                </pre>
                <div className="text-[11px] text-text-secondary">
                  💡 Tip: Review SQL syntax, column spellings in the Schema Viewer, and ensure table names match.
                </div>
              </div>
            ) : queryResult.values?.length === 0 ? (
              /* 0 Rows Returned */
              <div className="text-center py-10 space-y-1">
                <p className="text-xs text-text-secondary">Query executed successfully, but returned <strong>0 rows</strong>.</p>
                {queryResult.columns?.length > 0 && (
                  <p className="text-[11px] text-text-muted">Columns: {queryResult.columns.join(', ')}</p>
                )}
              </div>
            ) : (
              /* Success Table Data */
              <div className="sql-table-container">
                <table className="sql-table">
                  <thead>
                    <tr>
                      {queryResult.columns.map((col, idx) => (
                        <th key={idx}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {queryResult.values.map((row, rowIdx) => (
                      <tr key={rowIdx}>
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx}>
                            {cell === null ? (
                              <span className="text-text-muted italic">NULL</span>
                            ) : typeof cell === 'number' ? (
                              <span className="text-emerald-300 font-mono">{cell}</span>
                            ) : (
                              String(cell)
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Submission Test Feedback */}
        {activeTab === 'submission' && (
          <div>
            {!submissionResult ? (
              <div className="flex flex-col items-center justify-center h-48 text-center text-text-muted space-y-2">
                <Sparkles className="w-8 h-8 opacity-40 text-amber-400" />
                <p className="text-xs">Click <strong className="text-brand">Submit Answer</strong> to validate your SQL query against the expected dataset.</p>
              </div>
            ) : (
              <div className={`p-4 rounded-lg border text-xs space-y-3 ${
                submissionResult.isCorrect
                  ? 'bg-emerald-950/20 border-emerald-500/40 text-green-200'
                  : 'bg-red-950/20 border-red-500/40 text-red-200'
              }`}>
                <div className="flex items-center gap-2">
                  {submissionResult.isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-success shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-danger shrink-0" />
                  )}
                  <h4 className="text-sm font-bold text-text-primary">
                    {submissionResult.isCorrect ? 'Accepted — Answer Correct!' : 'Validation Mismatch — Incorrect Result'}
                  </h4>
                </div>

                <p className="text-xs leading-relaxed text-text-primary">
                  {submissionResult.feedback}
                </p>

                {submissionResult.detailedReason && (
                  <div className="p-3 rounded bg-background/60 border border-panel-border font-mono text-[11px] text-text-secondary leading-relaxed">
                    {submissionResult.detailedReason}
                  </div>
                )}

                {submissionResult.isCorrect ? (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                    <div className="text-[11px] text-emerald-400 font-medium">
                      🎉 Excellent work! This question has been marked as <strong>Solved</strong> in your progress tracker.
                    </div>
                    {hasNext && (
                      <button
                        onClick={onNextQuestion}
                        className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md shadow-emerald-900/30 transition-all active:scale-95"
                      >
                        <span>Next Question</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="text-[11px] text-amber-300">
                    💡 Compare your actual query results with the <strong>Expected Output</strong> table in the left panel to identify discrepancies in rows or columns.
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: Master Table Explorer */}
        {activeTab === 'masterTable' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs text-text-secondary flex items-center gap-2">
                <Database className="w-4 h-4 text-amber-400" />
                <span>
                  Source Database: <strong className="font-mono text-text-primary">SQL_Interview_Practice</strong> • Table: <strong className="font-mono text-brand">Employees</strong>
                </span>
              </div>
              <div className="relative">
                <Search className="w-3 h-3 text-text-muted absolute left-2.5 top-2" />
                <input
                  type="text"
                  placeholder="Filter employees..."
                  value={masterSearch}
                  onChange={(e) => setMasterSearch(e.target.value)}
                  className="pl-7 pr-2.5 py-1 rounded bg-panel-light border border-panel-border text-[11px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand w-48"
                />
              </div>
            </div>

            <div className="sql-table-container">
              <table className="sql-table">
                <thead>
                  <tr>
                    {masterRows.columns.map((col) => (
                      <th key={col}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredMasterValues.length === 0 ? (
                    <tr>
                      <td colSpan={masterRows.columns.length || 8} className="text-center py-4 text-text-muted italic">
                        No employees match your filter.
                      </td>
                    </tr>
                  ) : (
                    filteredMasterValues.map((row, idx) => (
                      <tr key={idx}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx}>
                            {cell === null ? (
                              <span className="text-text-muted italic">NULL</span>
                            ) : typeof cell === 'number' ? (
                              <span className="text-emerald-300 font-mono">{cell}</span>
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

            <div className="text-[11px] text-text-secondary flex items-center justify-between pt-1">
              <span>Showing all 20 corporate seed records</span>
              <span>Columns: emp_id, emp_name, age, department, salary, experience, city, joining_year</span>
            </div>
          </div>
        )}

        {/* TAB 4: Engine Architecture & Safety Notice */}
        {activeTab === 'safety' && (
          <div className="space-y-3 text-xs text-text-secondary p-1">
            <div className="flex items-center gap-2 text-text-primary font-semibold">
              <ShieldCheck className="w-4 h-4 text-brand" />
              <span>Execution Engine & Safety Boundary</span>
            </div>

            <div className="p-3 rounded-lg bg-panel-light border border-panel-border space-y-2">
              <div className="font-semibold text-text-primary">🔒 Read-Only Sandbox Mode:</div>
              <p className="leading-relaxed">
                Queries are executed within an in-memory SQLite database powered by WebAssembly (SQL.js). State-modifying operations (such as <code className="text-red-400 font-mono">DROP</code>, <code className="text-red-400 font-mono">DELETE</code>, <code className="text-red-400 font-mono">UPDATE</code>, <code className="text-red-400 font-mono">ALTER</code>, <code className="text-red-400 font-mono">INSERT</code>) and multiple semicolon-separated statements are safely intercepted.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-panel-light border border-panel-border space-y-2">
              <div className="font-semibold text-text-primary">⚡ Dialect Notice (MySQL vs SQLite):</div>
              <p className="leading-relaxed">
                While this practice platform prepares you for standard MySQL technical interviews, queries are executed locally via SQLite WebAssembly for zero latency and offline privacy. Standard ANSI SQL queries (SELECT, WHERE, GROUP BY, HAVING, ORDER BY) execute identically. Dialect differences like <code className="text-brand font-mono">REGEXP</code> vs <code className="text-brand font-mono">LIKE</code> are documented in the Revision section.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
