import React, { useState, useEffect } from 'react';
import { 
  Database, Table, ChevronDown, ChevronUp, Key, 
  Hash, Type, Copy, Maximize2, Minimize2, Eye, FileCode 
} from 'lucide-react';
import { getTableData, getTablesInfo } from '../services/databaseEngine.js';
import { TABLES_SCHEMA } from '../data/schema.js';
import { useToast } from './Toast.jsx';

export default function TablePreviewCard({ tableName = 'Employees', defaultExpanded = true }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [viewMode, setViewMode] = useState('data'); // 'data' | 'schema'
  const [tableData, setTableData] = useState({ columns: [], values: [] });
  const [loading, setLoading] = useState(true);
  const [searchFilter, setSearchFilter] = useState('');
  const [isFullView, setIsFullView] = useState(false);
  const { addToast } = useToast();

  const tableSchema = TABLES_SCHEMA.find(t => t.name === tableName) || TABLES_SCHEMA[0];

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await getTableData(tableName);
      if (res.success) {
        setTableData(res);
      }
    } catch (err) {
      console.error('Failed to load table preview:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [tableName]);

  const filteredValues = tableData.values.filter(row => {
    if (!searchFilter) return true;
    const query = searchFilter.toLowerCase();
    return row.some(cell => String(cell).toLowerCase().includes(query));
  });

  return (
    <div className={`border border-panel-border rounded-lg bg-panel overflow-hidden transition-all duration-200 ${
      isFullView ? 'fixed inset-4 z-50 shadow-2xl flex flex-col bg-panel-light p-4' : ''
    }`}>
      {/* Header */}
      <div className="p-2.5 bg-panel-light/80 border-b border-panel-border flex items-center justify-between">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-left group focus:outline-none flex-1"
        >
          {isExpanded ? (
            <ChevronUp className="w-3.5 h-3.5 text-text-secondary group-hover:text-text-primary" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-text-secondary group-hover:text-text-primary" />
          )}
          <div className="flex items-center gap-2">
            <Database className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
              <span>Master Table:</span>
              <span className="font-mono text-brand font-bold">{tableName}</span>
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-panel border border-panel-border text-emerald-400 font-medium">
              {tableData.values.length} records
            </span>
          </div>
        </button>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center bg-panel border border-panel-border rounded p-0.5 text-[10px]">
            <button
              onClick={() => { setViewMode('data'); setIsExpanded(true); }}
              className={`px-2 py-0.5 rounded transition-colors ${
                viewMode === 'data' ? 'bg-brand text-white font-semibold' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Records
            </button>
            <button
              onClick={() => { setViewMode('schema'); setIsExpanded(true); }}
              className={`px-2 py-0.5 rounded transition-colors ${
                viewMode === 'schema' ? 'bg-brand text-white font-semibold' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Schema
            </button>
          </div>

          <button
            onClick={() => setIsFullView(!isFullView)}
            title={isFullView ? "Exit Fullscreen" : "Expand Table"}
            className="p-1 text-text-secondary hover:text-text-primary rounded hover:bg-panel-border transition-colors"
          >
            {isFullView ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className={`p-3 space-y-3 ${isFullView ? 'flex-1 overflow-auto' : ''}`}>
          {viewMode === 'data' ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] text-text-secondary">
                <span>
                  Source dataset in <span className="font-mono text-text-primary">SQL_Interview_Practice</span>:
                </span>
                <input
                  type="text"
                  placeholder="Filter records..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="px-2 py-0.5 rounded bg-panel-light border border-panel-border text-[11px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand w-32 sm:w-40"
                />
              </div>

              {/* Data Table */}
              <div className="sql-table-container max-h-56 overflow-auto border border-panel-border rounded">
                <table className="sql-table">
                  <thead>
                    <tr>
                      {tableData.columns.map((col) => (
                        <th key={col}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredValues.length === 0 ? (
                      <tr>
                        <td colSpan={tableData.columns.length || 8} className="text-center py-4 text-text-muted italic">
                          No matching records
                        </td>
                      </tr>
                    ) : (
                      filteredValues.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((val, cIdx) => (
                            <td key={cIdx}>
                              {val === null ? (
                                <span className="text-text-muted italic">NULL</span>
                              ) : typeof val === 'number' ? (
                                <span className="text-emerald-300 font-mono">{val}</span>
                              ) : (
                                String(val)
                              )}
                            </td>
                          ))}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* Schema View */
            <div className="border border-panel-border rounded overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-panel-light text-text-secondary border-b border-panel-border">
                  <tr>
                    <th className="py-2 px-3">Column</th>
                    <th className="py-2 px-3">Type</th>
                    <th className="py-2 px-3">Constraint</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-panel-border/60">
                  {tableSchema.columns.map((col) => (
                    <tr key={col.name} className="hover:bg-panel-light/60">
                      <td className="py-1.5 px-3 font-mono font-medium text-text-primary">
                        {col.name}
                      </td>
                      <td className="py-1.5 px-3 font-mono text-[11px] text-text-secondary">
                        {col.type}
                      </td>
                      <td className="py-1.5 px-3">
                        {col.isPrimary ? (
                          <span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-1 py-0.5 rounded">
                            PRIMARY KEY
                          </span>
                        ) : (
                          <span className="text-[11px] text-text-muted">{col.nullable ? 'NULL' : 'NOT NULL'}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="flex items-center justify-between text-[11px] text-text-secondary pt-1 border-t border-panel-border/60">
            <span>Table: <strong className="font-mono text-text-primary">{tableName}</strong></span>
            <span>Total: <strong className="text-text-primary">{tableData.values.length}</strong> rows, <strong className="text-text-primary">{tableData.columns.length}</strong> columns</span>
          </div>
        </div>
      )}
    </div>
  );
}
