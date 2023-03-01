import React from "react";
import { RiKakaoTalkFill } from "react-icons/ri";

function Button(props) {
  return props.kakao ? (
    <button className="kakao button rowCenter" onClick={props.onClick}>
      <RiKakaoTalkFill />
      {props.children}
    </button>
  ) : (
    <button className="button rowCenter" onClick={props.onClick}>
      {props.children}
    </button>
  );
}
export default Button;
