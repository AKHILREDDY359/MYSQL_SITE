import React, { useState, useEffect } from 'react';
import { Database, Table, X, Search, Key, Copy, Check, RefreshCw } from 'lucide-react';
import { getTableData } from '../services/databaseEngine.js';
import { TABLES_SCHEMA } from '../data/schema.js';
import { useToast } from './Toast.jsx';

export default function MasterDatabaseModal({ isOpen, onClose, onResetDb, isDbResetting }) {
  const [activeTab, setActiveTab] = useState('data'); // 'data' | 'schema' | 'ddl'
  const [tableData, setTableData] = useState({ columns: [], values: [] });
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const { addToast } = useToast();

  const currentSchema = TABLES_SCHEMA[0];

  useEffect(() => {
    if (isOpen) {
      getTableData('Employees').then(res => {
        if (res.success) setTableData(res);
      });
    }
  }, [isOpen, isDbResetting]);

  if (!isOpen) return null;

  const filteredValues = tableData.values.filter(row => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return row.some(cell => String(cell).toLowerCase().includes(q));
  });

  const handleCopyTsv = () => {
    const headers = tableData.columns.join('\t');
    const rows = tableData.values.map(r => r.join('\t')).join('\n');
    navigator.clipboard.writeText(`${headers}\n${rows}`);
    setCopied(true);
    addToast('Master database table copied to clipboard', 'info');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-panel border border-panel-border rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-panel-border bg-panel-light flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-text-primary">Master Database Inspector</h3>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-brand/10 border border-brand/20 text-brand">
                  SQL_Interview_Practice
                </span>
              </div>
              <p className="text-xs text-text-secondary mt-0.5">
                Active Table: <span className="font-mono text-emerald-400 font-semibold">Employees</span> (20 Rows, 8 Columns)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyTsv}
              title="Copy table data"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-panel hover:bg-panel-border border border-panel-border text-xs text-text-secondary hover:text-text-primary transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">Copy Table</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-text-secondary hover:text-text-primary rounded-lg hover:bg-panel-border transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sub-Tabs & Filter Bar */}
        <div className="p-3 border-b border-panel-border bg-panel-light/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setActiveTab('data')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'data'
                  ? 'bg-brand text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary hover:bg-panel-light'
              }`}
            >
              Records Grid ({tableData.values.length})
            </button>
            <button
              onClick={() => setActiveTab('schema')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'schema'
                  ? 'bg-brand text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary hover:bg-panel-light'
              }`}
            >
              Table Schema ({currentSchema.columns.length} cols)
            </button>
            <button
              onClick={() => setActiveTab('ddl')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'ddl'
                  ? 'bg-brand text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary hover:bg-panel-light'
              }`}
            >
              DDL SQL
            </button>
          </div>

          {activeTab === 'data' && (
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-text-muted absolute left-2.5 top-2" />
              <input
                type="text"
                placeholder="Filter 20 employee records..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1 rounded-lg bg-panel border border-panel-border text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand w-56"
              />
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-4">
          {activeTab === 'data' && (
            <div className="sql-table-container">
              <table className="sql-table">
                <thead>
                  <tr>
                    {tableData.columns.map((c) => (
                      <th key={c}>{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredValues.length === 0 ? (
                    <tr>
                      <td colSpan={tableData.columns.length || 8} className="text-center py-8 text-text-muted italic">
                        No employees found matching "{searchQuery}"
                      </td>
                    </tr>
                  ) : (
                    filteredValues.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx}>
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
          )}

          {activeTab === 'schema' && (
            <div className="border border-panel-border rounded-xl overflow-hidden bg-panel">
              <table className="w-full text-left text-xs">
                <thead className="bg-panel-light text-text-secondary border-b border-panel-border font-medium">
                  <tr>
                    <th className="py-2.5 px-4">Column Name</th>
                    <th className="py-2.5 px-4">Data Type</th>
                    <th className="py-2.5 px-4">Key / Constraint</th>
                    <th className="py-2.5 px-4">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-panel-border/60">
                  {currentSchema.columns.map((col) => (
                    <tr key={col.name} className="hover:bg-panel-light/60">
                      <td className="py-2 px-4 font-mono font-bold text-text-primary">
                        {col.name}
                      </td>
                      <td className="py-2 px-4 font-mono text-text-secondary">
                        {col.type}
                      </td>
                      <td className="py-2 px-4">
                        {col.isPrimary ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded">
                            <Key className="w-3 h-3" /> PRIMARY KEY
                          </span>
                        ) : (
                          <span className="text-text-muted">{col.nullable ? 'NULL' : 'NOT NULL'}</span>
                        )}
                      </td>
                      <td className="py-2 px-4 text-text-secondary">
                        {col.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'ddl' && (
            <div className="space-y-2">
              <pre className="p-4 rounded-xl bg-background border border-panel-border font-mono text-xs text-blue-300 overflow-x-auto leading-relaxed">
                {currentSchema.createSql}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 border-t border-panel-border bg-panel-light flex items-center justify-between text-xs text-text-secondary">
          <span>Table <strong className="text-text-primary">Employees</strong> in <strong className="text-text-primary">SQL_Interview_Practice</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-panel hover:bg-panel-border text-text-primary border border-panel-border font-medium text-xs transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
