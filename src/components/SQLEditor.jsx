import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';

export default function SQLEditor({ value, onChange, onRunQuery, fontSize = 14 }) {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;

    // Define custom dark theme matching SQL Sprint palette
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

    monaco.editor.setTheme('sqlSprintDark');

    // Register Cmd+Enter / Ctrl+Enter keybinding
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      if (onRunQuery) {
        onRunQuery();
      }
    });
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#0E1526]">
      <Editor
        height="100%"
        defaultLanguage="sql"
        language="sql"
        value={value}
        onChange={(val) => onChange(val || '')}
        onMount={handleEditorDidMount}
        loading={
          <div className="flex items-center justify-center h-full text-xs text-text-secondary gap-2 bg-[#0E1526]">
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
