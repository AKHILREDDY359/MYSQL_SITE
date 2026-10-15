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
      monacoRef.current.editor.setTheme(theme === 'dark' ? 'sqlForgeDark' : 'sqlForgeLight');
    }
  }, [theme]);

  const handleBeforeMount = (monaco) => {
    try {
      // 1. SQLForge Dark Developer Theme
      const forgeDarkTheme = {
        base: 'vs-dark',
        inherit: true,
        rules: [
          { token: 'keyword', foreground: '60A5FA', fontStyle: 'bold' },
          { token: 'string', foreground: '4ADE80' },
          { token: 'number', foreground: 'FBBF24' },
          { token: 'comment', foreground: '94A3B8', fontStyle: 'italic' },
          { token: 'operator.sql', foreground: '20C58B' },
          { token: 'identifier', foreground: 'F8FAFC' }
        ],
        colors: {
          'editor.background': '#0F172A',
          'editor.foreground': '#F8FAFC',
          'editorCursor.foreground': '#20C58B',
          'editor.lineHighlightBackground': '#1E293B',
          'editorLineNumber.foreground': '#64748B',
          'editorLineNumber.activeForeground': '#F8FAFC',
          'editor.selectionBackground': '#20C58B30',
          'editor.inactiveSelectionBackground': '#33415550'
        }
      };

      // 2. SQLForge Clean White / Light Theme (#FFFFFF, #20C58B cursor, #3563A9 keywords)
      const forgeLightTheme = {
        base: 'vs',
        inherit: true,
        rules: [
          { token: 'keyword', foreground: '3563A9', fontStyle: 'bold' },
          { token: 'string', foreground: '16A34A' },
          { token: 'number', foreground: 'D97706' },
          { token: 'comment', foreground: '64748B', fontStyle: 'italic' },
          { token: 'operator.sql', foreground: '20C58B' },
          { token: 'identifier', foreground: '202630' }
        ],
        colors: {
          'editor.background': '#FFFFFF',
          'editor.foreground': '#202630',
          'editorCursor.foreground': '#20C58B',
          'editor.lineHighlightBackground': '#F8FAFC',
          'editorLineNumber.foreground': '#94A3B8',
          'editorLineNumber.activeForeground': '#202630',
          'editor.selectionBackground': '#E8F8F1',
          'editor.inactiveSelectionBackground': '#F1F5F9'
        }
      };

      monaco.editor.defineTheme('sqlForgeDark', forgeDarkTheme);
      monaco.editor.defineTheme('sqlForgeLight', forgeLightTheme);
      // Backwards-compatible aliases
      monaco.editor.defineTheme('sqlSprintDark', forgeDarkTheme);
      monaco.editor.defineTheme('sqlSprintLight', forgeLightTheme);
    } catch (e) {
      console.warn('Monaco defineTheme error:', e);
    }
  };

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    try {
      monaco.editor.setTheme(theme === 'dark' ? 'sqlForgeDark' : 'sqlForgeLight');

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
          <span>SQLForge Editor (Standard Mode • Cmd+Enter to Run)</span>
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
