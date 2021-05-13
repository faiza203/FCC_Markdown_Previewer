import ToolBar from "./ToolBar";
import placeholder from "./PlaceHolder";
import marked from "marked";

function Previewer() {
  return (
    <div className="previewer" id="preview">
      <ToolBar name="Previewer" id="preTool" />
      <div className="previewerText"></div>
    </div>
  );
}

setTimeout(() => {
  const preText = document.querySelector(".previewerText");
  preText.innerHTML = marked(placeholder);
  document.querySelector(".loader").style.visibility = "hidden";
  document.getElementById("container").style.visibility = "visible";
}, 100);
export default Previewer;
