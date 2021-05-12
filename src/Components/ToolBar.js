function ToolBar({ name, id }) {
  return (
    <div className="toolbar" id={id}>
      <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
      {name}<i className="fa fa-arrows-alt"></i>
    </div>
  );
}

export default ToolBar;
