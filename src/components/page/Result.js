import React from "react";
import Button from "../common/Button";
import { useNavigate, useParams } from "react-router-dom";
import { CgDanger } from "react-icons/cg";
import { AiFillHeart } from "react-icons/ai";
import mbtiList from "./mbtiList";
function Result(props) {
  const navigate = useNavigate();
  const { mbti } = useParams();
  const toMain = () => {
    navigate("/main");
  };
  return (
    <div className="columnCenter">
      <h2>
        당신은{" "}
        <b>
          {mbtiList[mbti].name} 개발자({mbti})
        </b>
        입니다
      </h2>
      <img
        src={"/img/" + mbti + ".png"}
        alt="main_image_developer"
        className="image"
      />
      <div className="resultWrapper">{mbtiList[mbti].content}</div>
      <div className="resultWrapper">
        <b className="rowCenter">
          <CgDanger />
          주의
        </b>
        <div className="resultWrapper"></div>
        {mbtiList[mbti].caution}
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
