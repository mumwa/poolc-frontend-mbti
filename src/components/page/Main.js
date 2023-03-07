import React from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

function Main() {
  let navigate = useNavigate();
  function clickStart() {
    navigate("/quiz");
  }
  return (
    <div className="columnCenter">
      <h1>PoolC 개발자 테스트</h1>
      <img
        src={process.env.PUBLIC_URL + "/img/0.png"}
        alt="main_image_developer"
        className="image"
      />
      <Button onClick={clickStart}>시작하기</Button>
    </div>
  );
}
export default Main;
