import React from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

function Pagination(props) {
  return (
    <div className="pagination">
      <button className="nextprev rowCenter">
        <MdOutlineNavigateBefore />
        이전
      </button>
      <button className="nextprev rowCenter">
        다음
        <MdOutlineNavigateNext />
      </button>
    </div>
  );
}
export default Pagination;
