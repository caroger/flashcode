import React from "react";
import { Quill } from "react-quill";

const CustomUndo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
    <path
      className="ql-stroke"
      d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
    />
  </svg>
);

const CustomRedo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
    <path
      className="ql-stroke"
      d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
    />
  </svg>
);

function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}

const Size = Quill.import("formats/size");
Size.whitelist = ["small", "medium", "large"];
Quill.register(Size, true);

const Font = Quill.import("formats/font");
Font.whitelist = ["Sans-Serif", "Serif", "Verdana", "Monospace", "Script", "Arial"];
Quill.register(Font, true);

export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange
    }
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true
  }
};

export const formats = [
  "header",
  // "font",
  // "size",
  "bold",
  "italic",
  "underline",
  // "align",
  "strike",
  // "script",
  // "blockquote",
  // "background",
  "list",
  "bullet",
  // "indent",
  // "link",
  "image",
  "color",
  "code-block"
];

export const EditorToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <button className="ql-undo">
        <CustomUndo />
      </button>
      <button className="ql-redo">
        <CustomRedo />
      </button>
    </span>
    <span className="ql-formats">
      <select className="ql-header" defaultValue="3">
        <option value="1">Heading</option>
        <option value="2">Subheading</option>
        <option value="3">Normal</option>
      </select>
      {/* <select className="ql-font" defaultValue="Sans-Serif">
        <option value="Sans-Serif">Sans Serif</option>
        <option value="Serif">Serif</option>
        <option value="Monospace">Monospace</option>
        <option value="Script">Script</option>
        <option value="Arial">Arial</option>
        <option value="Verdana">Verdana</option>
      </select> */}
      {/* <select className="ql-size" defaultValue="medium">
        <option value="small">12</option>
        <option value="medium">16</option>
        <option value="large">24</option>
      </select> */}
    </span>
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
    </span>
    <span className="ql-formats">
      <select className="ql-color" />
      <select className="ql-background" />
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      {/* <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" />
      <select className="ql-align" /> */}
    </span>
    <span className="ql-formats">
      <button className="ql-script" value="super" />
      <button className="ql-script" value="sub" />
      {/* <button className="ql-blockquote" /> */}
    </span>
    {/* <span className="ql-formats">
      <button className="ql-link" />
      <button className="ql-image" />
    </span> */}
    <span className="ql-formats">
      <button className="ql-formula" />
      <button className="ql-code-block" />
      <button className="ql-clean" />
    </span>
  </div>
);

export default EditorToolbar;