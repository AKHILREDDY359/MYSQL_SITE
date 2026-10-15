import React, { useRef, useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';

export default function SQLEditor({ value, onChange, onRunQuery, fontSize = 14, theme = 'dark' }) {
  const editorRef = useRef(null);
  const monacoRef = useRef(null);
  const [useFallback, setUseFallback] = useState(false);

  // If Monaco CDN is blocked or offline, fallback smoothly after 6s timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!editorRef.current) {
        setUseFallback(true);
      }
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  // Update Monaco theme whenever the active theme prop changes
  useEffect(() => {
    if (monacoRef.current) {
      monacoRef.current.editor.setTheme(theme === 'dark' ? 'sqlSprintDark' : 'sqlSprintLight');
    }
  }, [theme]);

  const handleBeforeMount = (monaco) => {
    try {
      // 1. Dark Developer Theme
      monaco.editor.defineTheme('sqlSprintDark', {
        base: 'vs-dark',
        inherit: true,
        rules: [
          { token: 'keyword', foreground: '4F8CFF', fontStyle: 'bold' },
          { token: 'string', foreground: '4ADE80' },
          { token: 'number', foreground: 'FBBF24' },
          { token: 'comment', foreground: '64748B', fontStyle: 'italic' },
          { token: 'operator.sql', foreground: '38BDF8' },
          { token: 'identifier', foreground: 'E5E7EB' }
        ],
        colors: {
          'editor.background': '#0E1526',
          'editor.foreground': '#E5E7EB',
          'editorCursor.foreground': '#4F8CFF',
          'editor.lineHighlightBackground': '#16223B',
          'editorLineNumber.foreground': '#475569',
          'editorLineNumber.activeForeground': '#94A3B8',
          'editor.selectionBackground': '#2563EB40',
          'editor.inactiveSelectionBackground': '#2563EB20'
        }
      });

      // 2. Clean White / Light Theme
      monaco.editor.defineTheme('sqlSprintLight', {
        base: 'vs',
        inherit: true,
        rules: [
          { token: 'keyword', foreground: '1D4ED8', fontStyle: 'bold' },
          { token: 'string', foreground: '15803D' },
          { token: 'number', foreground: 'B45309' },
          { token: 'comment', foreground: '64748B', fontStyle: 'italic' },
          { token: 'operator.sql', foreground: '0369A1' },
          { token: 'identifier', foreground: '0F172A' }
        ],
        colors: {
          'editor.background': '#FFFFFF',
          'editor.foreground': '#0F172A',
          'editorCursor.foreground': '#2563EB',
          'editor.lineHighlightBackground': '#F1F5F9',
          'editorLineNumber.foreground': '#94A3B8',
          'editorLineNumber.activeForeground': '#0F172A',
          'editor.selectionBackground': '#BFDBFE',
          'editor.inactiveSelectionBackground': '#E2E8F0'
        }
      });
    } catch (e) {
      console.warn('Monaco defineTheme error:', e);
    }
  };

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    try {
      monaco.editor.setTheme(theme === 'dark' ? 'sqlSprintDark' : 'sqlSprintLight');

      // Register Cmd+Enter / Ctrl+Enter keybinding
      editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
        if (onRunQuery) {
          onRunQuery();
        }
      });
    } catch (e) {
      console.warn('Monaco mount setup notice:', e);
    }
  };

  const handleKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      if (onRunQuery) onRunQuery();
    }
  };

  if (useFallback) {
    return (
      <div className="w-full h-full relative overflow-hidden bg-panel p-3 flex flex-col">
        <div className="flex items-center justify-between text-[11px] text-text-muted mb-1 select-none">
          <span>SQL Editor (Standard Mode • Cmd+Enter to Run)</span>
          <button 
            onClick={() => setUseFallback(false)} 
            className="text-brand hover:underline"
          >
            Retry Monaco
          </button>
        </div>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="-- Write your SQL query here... (e.g. SELECT * FROM Employees;)"
          style={{ fontSize: `${fontSize}px` }}
          className="flex-1 w-full bg-panel font-mono text-text-primary p-2 border border-panel-border rounded-md resize-none focus:outline-none focus:border-brand selection:bg-brand selection:text-white leading-relaxed"
          spellCheck="false"
        />
      </div>
    );
  }

  return (
    <div className={`w-full h-full relative overflow-hidden ${theme === 'dark' ? 'bg-[#0E1526]' : 'bg-white'}`}>
      <Editor
        height="100%"
        defaultLanguage="sql"
        language="sql"
        theme={theme === 'dark' ? 'sqlSprintDark' : 'sqlSprintLight'}
        value={value}
        onChange={(val) => onChange(val || '')}
        beforeMount={handleBeforeMount}
        onMount={handleEditorDidMount}
        loading={
          <div className="flex items-center justify-center h-full text-xs text-text-secondary gap-2 bg-panel">
            <span className="w-3 h-3 rounded-full border-2 border-brand border-t-transparent animate-spin"></span>
            <span>Initializing SQL Editor...</span>
          </div>
        }
        options={{
          fontSize,
          fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
          lineNumbers: 'on',
          roundedSelection: false,
          scrollBeyondLastLine: false,
          readOnly: false,
          automaticLayout: true,
          minimap: { enabled: false },
          tabSize: 2,
          wordWrap: 'on',
          lineDecorationsWidth: 10,
          lineNumbersMinChars: 3,
          padding: { top: 12, bottom: 12 },
          suggestOnTriggerCharacters: true,
          formatOnPaste: true,
          renderWhitespace: 'none',
          renderLineHighlight: 'all',
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: 'on'
        }}
      />
    </div>
  );
}
