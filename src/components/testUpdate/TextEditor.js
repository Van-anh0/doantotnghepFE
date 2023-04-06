import React, { useState } from "react";
import { FaBold, FaItalic } from "react-icons/fa";

const TextEditor = () => {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [fontSize, setFontSize] = useState("16px");

  const handleBoldClick = () => {
    setBold(!bold);
  };

  const handleItalicClick = () => {
    setItalic(!italic);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (selection.type === "Range") {
      const selectedText = selection.toString();
      const range = selection.getRangeAt(0);
      const span = document.createElement("span");
      if (bold) {
        span.style.fontWeight = "bold";
      }
      if (italic) {
        span.style.fontStyle = "italic";
      }
      span.style.fontSize = fontSize;
      range.surroundContents(span);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleBoldClick}>
          <FaBold />
        </button>
        <button onClick={handleItalicClick}>
          <FaItalic />
        </button>
        <select value={fontSize} onChange={handleFontSizeChange}>
          <option value="16px">16px</option>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
        </select>
      </div>
      <textarea onMouseUp={handleTextSelection}></textarea>
    </div>
  );
};

export default TextEditor;
