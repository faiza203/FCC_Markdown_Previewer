import ToolBar from "./ToolBar";
import placeholder, { changePlaceHolder } from "./PlaceHolder";

function Editor() {
  return (
    <div className="editor">
      <ToolBar name="Editor" id="editTool" />
      <textarea
        id="editorText"
        type="text"
        defaultValue={placeholder}
        onChange={changePlaceHolder}
      ></textarea>
    </div>
  );
}

export default Editor;
