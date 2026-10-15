import React, { useState, useEffect } from 'react';
import { Database, Table, ChevronRight, ChevronDown, Eye, FileCode, RefreshCw, Copy, Check } from 'lucide-react';
import SchemaViewer from './SchemaViewer.jsx';
import { getTableData, getTablesInfo } from '../services/databaseEngine.js';
import { useToast } from './Toast.jsx';

export default function DatabaseExplorer({ onInsertSql, onResetDb, isDbResetting }) {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [activeTab, setActiveTab] = useState('data'); // 'data' | 'schema' | 'ddl'
  const [tableData, setTableData] = useState({ columns: [], values: [] });
  const [isTreeExpanded, setIsTreeExpanded] = useState(true);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const { addToast } = useToast();

  const loadData = async () => {
    try {
      setLoading(true);
      const tablesList = await getTablesInfo();
      setTables(tablesList);
      if (tablesList.length > 0) {
        setSelectedTable(tablesList[0]);
        const data = await getTableData(tablesList[0].name);
        if (data.success) {
          setTableData(data);
        }
      }
    } catch (err) {
      console.error('Failed to load database explorer data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [isDbResetting]);

  const handleSelectTable = async (table) => {
    setSelectedTable(table);
    const data = await getTableData(table.name);
    if (data.success) {
      setTableData(data);
    }
  };

  const handleCopyTableName = (name, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(name);
    setCopied(true);
    addToast(`Copied table name "${name}" to clipboard`, 'info');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInsertSelect = (name, e) => {
    e.stopPropagation();
    if (onInsertSql) {
      onInsertSql(`SELECT * FROM ${name};`);
      addToast(`Inserted "SELECT * FROM ${name};" into editor`, 'info');
    }
  };

  return (
    <div className="h-full flex flex-col bg-panel border-r border-panel-border overflow-hidden select-none">
      {/* Explorer Header */}
      <div className="p-3 border-b border-panel-border bg-panel-light flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-brand" />
          <span className="text-xs font-semibold uppercase tracking-wider text-text-primary">
            Database Explorer
          </span>
        </div>
        <button
          onClick={onResetDb}
          disabled={isDbResetting}
          title="Reset Seed Database"
          className="text-text-secondary hover:text-text-primary p-1 rounded hover:bg-panel-border transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isDbResetting ? 'animate-spin text-brand' : ''}`} />
        </button>
      </div>

      {/* Tree Structure */}
      <div className="p-2 border-b border-panel-border bg-panel text-xs">
        <div
          onClick={() => setIsTreeExpanded(!isTreeExpanded)}
          className="flex items-center gap-1.5 px-2 py-1.5 rounded cursor-pointer hover:bg-panel-light text-text-primary font-medium transition-colors"
        >
          {isTreeExpanded ? <ChevronDown className="w-3.5 h-3.5 text-text-secondary" /> : <ChevronRight className="w-3.5 h-3.5 text-text-secondary" />}
          <Database className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-mono text-xs">SQL_Interview_Practice</span>
        </div>

        {isTreeExpanded && (
          <div className="ml-5 mt-1 space-y-1">
            {tables.map((t) => (
              <div
                key={t.name}
                onClick={() => handleSelectTable(t)}
                className={`flex items-center justify-between px-2 py-1.5 rounded cursor-pointer transition-colors group ${
                  selectedTable?.name === t.name
                    ? 'bg-brand/15 text-brand border border-brand/30'
                    : 'text-text-secondary hover:bg-panel-light hover:text-text-primary'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Table className="w-3.5 h-3.5 text-blue-400" />
                  <span className="font-mono text-xs font-medium">{t.name}</span>
                  <span className="text-[10px] text-text-muted px-1.5 py-0.2 rounded bg-panel-light border border-panel-border">
                    {t.rowCount} rows
                  </span>
                </div>

                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => handleInsertSelect(t.name, e)}
                    title="Paste SELECT query into editor"
                    className="p-1 rounded hover:bg-panel-border text-text-secondary hover:text-text-primary"
                  >
                    <FileCode className="w-3 h-3" />
                  </button>
                  <button
                    onClick={(e) => handleCopyTableName(t.name, e)}
                    title="Copy table name"
                    className="p-1 rounded hover:bg-panel-border text-text-secondary hover:text-text-primary"
                  >
                    {copied ? <Check className="w-3 h-3 text-success" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Table Details Sub-tabs */}
      {selectedTable && (
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex items-center border-b border-panel-border bg-panel-light px-3">
            <button
              onClick={() => setActiveTab('data')}
              className={`flex items-center gap-1.5 py-2 px-3 text-xs font-medium border-b-2 transition-colors ${
                activeTab === 'data'
                  ? 'border-brand text-brand'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Records ({tableData.values.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('schema')}
              className={`flex items-center gap-1.5 py-2 px-3 text-xs font-medium border-b-2 transition-colors ${
                activeTab === 'schema'
                  ? 'border-brand text-brand'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>Columns</span>
            </button>
            <button
              onClick={() => setActiveTab('ddl')}
              className={`flex items-center gap-1.5 py-2 px-3 text-xs font-medium border-b-2 transition-colors ${
                activeTab === 'ddl'
                  ? 'border-brand text-brand'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>DDL</span>
            </button>
          </div>

          <div className="flex-1 overflow-auto p-3">
            {activeTab === 'data' && (
              <div className="space-y-2">
                <div className="text-[11px] text-text-secondary flex justify-between items-center">
                  <span>Showing all {tableData.values.length} records in <span className="font-mono text-brand font-medium">{selectedTable.name}</span></span>
                </div>
                <div className="sql-table-container max-h-[360px] overflow-auto">
                  <table className="sql-table">
                    <thead>
                      <tr>
                        {tableData.columns.map((c) => (
                          <th key={c}>{c}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.values.map((row, idx) => (
                        <tr key={idx}>
                          {row.map((val, cellIdx) => (
                            <td key={cellIdx}>
                              {val === null ? <span className="text-text-muted italic">NULL</span> : String(val)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'schema' && <SchemaViewer table={selectedTable} />}

            {activeTab === 'ddl' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span>DDL CREATE Statement</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(selectedTable.createSql);
                      addToast('Copied DDL to clipboard', 'info');
                    }}
                    className="flex items-center gap-1 hover:text-text-primary text-[11px]"
                  >
                    <Copy className="w-3 h-3" /> Copy DDL
                  </button>
                </div>
                <pre className="p-3 rounded-lg bg-panel-light border border-panel-border font-mono text-xs text-blue-300 overflow-x-auto">
                  {selectedTable.createSql}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
