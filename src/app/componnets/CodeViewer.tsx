import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { EditorView, highlightSpecialChars, drawSelection, highlightActiveLine } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { oneDark } from "@codemirror/theme-one-dark"; // optional, you can ignore if using custom
interface CodeViewerProps {
  codeString: string; // code from DB
}
const CodeViewer: React.FC<CodeViewerProps> = ({ codeString }) => {
  // Define a custom theme using your colors
  const customTheme = EditorView.theme({
    "&": {
      color: "var(--color-text)",
      backgroundColor: "var(--color-bg)",
      fontSize: "0.8rem", // smaller text
      fontFamily: "monospace",
    },
    ".cm-content": {
      caretColor: "var(--color-primary)",
    },
    "&.cm-focused .cm-cursor": { borderLeftColor: "var(--color-primary)" },
    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground": {
      backgroundColor: "var(--color-primary-light)",
    },
    ".cm-gutters": {
      backgroundColor: "var(--color-bg-light)",
      color: "var(--color-text)",
      border: "none",
    },
  });
  return (
    <CodeMirror
      value={codeString}
      height="400px"
      extensions={[javascript()]}
      readOnly={true}
      theme={customTheme}
    />
  );
};
export default CodeViewer;
