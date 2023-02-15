import React from "react";

function Wrapper(props) {
  return (
    <div className="wrapper leftCenter">
      <div className="content">{props.children}</div>
    </div>
  );
}
export default Wrapper;
