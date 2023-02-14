import React from "react";
import Select from "../common/Select";
import Pagination from "../common/Pagination";

function Quiz(props) {
  return (
    <>
      <h3>좌표를 계산하는 기능을 하는 함수가 있다. 이름을 짓는다면?</h3>
      <img src="img/1.png" alt="quiz_image_developer" className="image" />
      <Select selected>CalculateCoordinate</Select>
      <Select selected>calculate_coordinate</Select>
      <Select selected>calculateCoordinate</Select>
      <Select selected>cc</Select>
      <Pagination></Pagination>
    </>
  );
}
export default Quiz;
