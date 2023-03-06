import React, { useState } from "react";
import Select from "../common/Select";
import Pagination from "../common/Pagination";
import question from "./question";
import calMbti from "./calMbti";
import { result } from "../../api";

function Quiz(props) {
  const [index, setIndex] = useState(0);
  const nextIndex = () => {
    setIndex(index + 1);
  };
  const prevIndex = () => {
    setIndex(index - 1);
  };
  const calAnswer = () => {
    return calMbti(select);
  };
  const sendResult = () => {
    console.log("api 보내는 작동");
    result(
      parseInt(Object.keys(select[0])),
      parseInt(Object.keys(select[1])),
      parseInt(Object.keys(select[2])),
      parseInt(Object.keys(select[3])),
      parseInt(Object.keys(select[4])),
      parseInt(Object.keys(select[5])),
      parseInt(Object.keys(select[6])),
      parseInt(Object.keys(select[7]))
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //이러면 순수함수가 아니게 되고 select state가 있는 부모 컴포넌트에 종속되어 버림.
  //인수로 받아서 쓰는게 나은데 저는 급해서 일단 ㅎㅎ^^
  const [select, setSelect] = useState({
    0: { 0: true },
    1: { 0: true },
    2: { 0: true },
    3: { 0: true },
    4: { 0: true },
    5: { 0: true },
    6: { 0: true },
    7: { 0: true },
  });
  const update0 = () => {
    setSelect((select) => {
      return { ...select, [index]: { 0: true } };
    });
  };
  const update1 = () => {
    setSelect((select) => {
      return { ...select, [index]: { 1: true } };
    });
  };
  const update2 = () => {
    setSelect((select) => {
      return { ...select, [index]: { 2: true } };
    });
  };
  const update3 = () => {
    setSelect((select) => {
      return { ...select, [index]: { 3: true } };
    });
  };
  return (
    <>
      <h3>{index}번</h3>
      <h4>{question[index].question}</h4>
      <img
        src={"img/q" + index + ".png"}
        alt="quiz_image_developer"
        className="image"
      />
      <Select selected={select[index][0]} onClick={update0}>
        {question[index][0]}
      </Select>
      <Select selected={select[index][1]} onClick={update1}>
        {question[index][1]}
      </Select>
      <Select selected={select[index][2]} onClick={update2}>
        {question[index][2]}
      </Select>
      <Select selected={select[index][3]} onClick={update3}>
        {question[index][3]}
      </Select>
      <Pagination
        nextIndex={nextIndex}
        prevIndex={prevIndex}
        index={index}
        calAnswer={calAnswer}
        sendResult={sendResult}
      ></Pagination>
    </>
  );
}
export default Quiz;
