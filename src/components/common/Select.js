import React from "react";

import { ImRadioChecked2, ImRadioUnchecked } from "react-icons/im";

function Select(props) {
  return (
    <div onClick={props.onClick} className="select rowCenter">
      <div className="rowCenter">
        <div>{props.selected ? <ImRadioChecked2 /> : <ImRadioUnchecked />}</div>
        <div className="text">{props.children}</div>
      </div>
    </div>
  );
}
export default Select;

// const Space = styled.div`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
// `;

// const Text = styled.div`
//   font-size: 1em;
//   margin-left: 10px;
// `;
