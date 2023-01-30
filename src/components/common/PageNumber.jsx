import React from "react";

const PageNumber = ({ pageNumber, setCurrentPage,currentPage }) => {

  return (
    <li onClick={() => setCurrentPage(pageNumber)}>
      <button
        class={`h-10 px-5 text-green-600 transition-colors duration-150 focus:shadow-outline  ${
          pageNumber ===currentPage ? "bg-green-600 text-white" : "hover:bg-green-100"
        }`}
      >
        {pageNumber}
      </button>
    </li>
  );
};

export default PageNumber;
