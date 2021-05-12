import ToolBar from "./ToolBar";
function Editor() {
  return (
    <div className="editor">
      <ToolBar name="Editor" id="editTool" />
      <textarea id="editorText" type="">
      </textarea>
    </div>
  );
}

export default Editor;
