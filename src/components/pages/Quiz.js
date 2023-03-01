import React, { useState } from "react";
import Pagination from "../common/Pagination";
import Select from "../common/Select";

function Quiz() {
  const [index, setIndex] = useState(0);
  const nextIndex = () => {
    setIndex(index + 1);
  };
  const prevIndex = () => {
    setIndex(index - 1);
  };

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
    setSelect(() => {
      return { ...select, [index]: { 0: true } };
    });
  };
  const update1 = () => {
    setSelect(() => {
      return { ...select, [index]: { 1: true } };
    });
  };
  const update2 = () => {
    setSelect(() => {
      return { ...select, [index]: { 2: true } };
    });
  };
  const update3 = () => {
    setSelect(() => {
      return { ...select, [index]: { 3: true } };
    });
  };
  return (
    <div>
      <h3>{index}번</h3>
      <h4>질문 블라블라블라</h4>
      <Select selected={select[index][0]} onClick={update0}>
        선택 안됨
      </Select>
      <Select selected={select[index][1]} onClick={update1}>
        선택됨
      </Select>
      <Select selected={select[index][2]} onClick={update2}>
        선택 안됨
      </Select>
      <Select selected={select[index][3]} onClick={update3}>
        선택 안됨
      </Select>
      <Pagination
        nextIndex={nextIndex}
        prevIndex={prevIndex}
        index={index}
      ></Pagination>
    </div>
  );
}
export default Quiz;
