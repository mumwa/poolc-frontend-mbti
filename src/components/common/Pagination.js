import React from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Pagination(props) {
  const navigate = useNavigate();
  const toMain = () => {
    navigate("/main");
  };
  const toResult = () => {
    navigate("/result");
  };
  return (
    <div className="pagination">
      <button
        className="nextprev rowCenter"
        onClick={props.index === 0 ? toMain : props.prevIndex}
      >
        <MdOutlineNavigateBefore />
        {props.index === 0 ? "메인" : "이전"}
      </button>
      <button
        className="nextprev rowCenter"
        onClick={props.index === 7 ? toResult : props.nextIndex}
      >
        {props.index === 7 ? "완료" : "다음"}
        <MdOutlineNavigateNext />
      </button>
    </div>
  );
}
export default Pagination;
