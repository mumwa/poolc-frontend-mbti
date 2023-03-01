import React from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

function Result(props) {
  const navigate = useNavigate();
  const toMain = () => {
    navigate("/main");
  };
  return (
    <div className="columnCenter">
      <h2>당신은 '귀염둥이 개발자'입니다</h2>
      <img src="img/4.png" alt="main_image_developer" className="image" />
      <Button kakao>카카오톡으로 공유하기</Button>
      <Button onClick={toMain}>메인으로</Button>
    </div>
  );
}
export default Result;
