import React from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { CgDanger } from "react-icons/cg";
import { AiFillHeart } from "react-icons/ai";

import mbti from "./mbti";

function Result(props) {
  const navigate = useNavigate();
  const toMain = () => {
    navigate("/main");
  };
  return (
    <div className="columnCenter">
      <h2>
        당신은{" "}
        <b>
          {mbti[props.mbti].name} 개발자({props.mbti})
        </b>
        입니다
      </h2>
      <img
        src={"img/a_" + props.mbti + ".png"}
        alt="main_image_developer"
        className="image"
      />
      <div className="resultWrapper">{mbti[props.mbti].content}</div>
      <div className="resultWrapper">
        <b className="rowCenter">
          <CgDanger />
          주의
        </b>
        <div className="resultWrapper"></div>
        {mbti[props.mbti].caution}
      </div>
      <br />
      <div className="comment">버튼 햄버거!</div>
      <Button
        onClick={() => {
          window.open("https://poolc.org/");
        }}
      >
        <AiFillHeart /> 풀씨 지원하기
        <AiFillHeart />
      </Button>
      <Button kakao={"true"}>카카오톡으로 공유하기</Button>
      <Button onClick={toMain}>메인으로</Button>
    </div>
  );
}
export default Result;
