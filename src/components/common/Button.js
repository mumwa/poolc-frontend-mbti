import React from "react";
import { RiKakaoTalkFill } from "react-icons/ri";

function Button(props) {
  return props.kakao ? (
    <button
      onClick={props.onClick}
      {...props}
      href={props.href}
      className="button rowCenter kakao"
    >
      <RiKakaoTalkFill />
      {props.children}
    </button>
  ) : (
    <button
      onClick={props.onClick}
      {...props}
      href={props.href}
      className="button rowCenter"
    >
      {props.children}
    </button>
  );
}
export default Button;
