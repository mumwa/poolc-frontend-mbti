import React from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("/");
  };
  return (
    <div className="columnCenter">
      <h2>당신은 '귀염둥이 개발자'입니다</h2>
      <Button
        kakao
        onClick={() => {
          alert("바밤바");
        }}
      >
        카카오톡으로 공유하기
      </Button>
      <Button onClick={goMain}>메인으로 돌아가기</Button>
    </div>
  );
}
export default Result;
