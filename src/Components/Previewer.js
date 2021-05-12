import ToolBar from "./ToolBar";

function Previewer() {
  return (
    <div className="previewer">
      <ToolBar name="Previewer" id="preTool" />
      <div className="previewerText"></div>
    </div>
  );
}

export default Previewer;
