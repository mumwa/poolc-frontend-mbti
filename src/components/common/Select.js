import React from "react";
import { ImRadioChecked2, ImRadioUnchecked } from "react-icons/im";

function Select(props) {
  return (
    <div onClick={props.onClick} className="select rowCenter">
      <div>{props.selected ? <ImRadioChecked2 /> : <ImRadioUnchecked />}</div>
      <div className="text">{props.children}</div>
    </div>
  );
}
export default Select;
