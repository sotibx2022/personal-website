'use client';
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from '@codemirror/view';
// Custom theme
const customTheme = EditorView.theme({
  '&': {
    backgroundColor: '#f5f5f5', // light gray background
    color: '#333',              // text color
    fontFamily: 'monospace',
    fontSize: '14px',
  },
  '.cm-content': {
    caretColor: '#000', // cursor color
  },
  '&.cm-focused': {
    outline: 'none', // remove focus outline
  },
});
interface CodeSnippetEditorProps {
  value: string;
  onChange: (code: string) => void;
}
const CodeSnippetEditor: React.FC<CodeSnippetEditorProps> = ({ value, onChange }) => {
  return (
    <div className="form-textarea">
      <CodeMirror
        value={value}
        height="200px"
        extensions={[javascript(), customTheme]}
        onChange={(value) => onChange(value)}
      />
    </div>
  );
};
export default CodeSnippetEditor;
