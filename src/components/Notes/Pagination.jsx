import React from "react";
import { useState } from "react";
import LeftArrow from "../common/LeftArrow";
import PageNumber from "../common/PageNumber";
import RightArrow from "../common/RightArrow";

const Pagination = ({ notes, setCurrentPage, currentPage }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);

  const totalPage = notes.length / 2;
  const totlaPageArr = Array(totalPage)
    .fill({ id: 1 })
    .map((e, i) => (e.id = i + 1));

  return (
    <div class="bg-white p-4 flex items-center flex-wrap justify-center ">
      <nav aria-label="Page navigation">
        <ul class="inline-flex">
          {start > 0 && (
            <LeftArrow
              setStart={setStart}
              setEnd={setEnd}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          )}

          {totlaPageArr.slice(start, end).map((sdata, index) => (
            <PageNumber
              pageNumber={sdata}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ))}

          {end < totlaPageArr.length && (
            <RightArrow
              setStart={setStart}
              setEnd={setEnd}
              setCurrentPage={setCurrentPage}
            />
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

