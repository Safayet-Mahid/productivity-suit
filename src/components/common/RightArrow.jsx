import React from "react";

const RightArrow = ({ setStart, setEnd, setCurrentPage }) => {
  const handleClick = () => {
    setStart((prev) => prev + 1);
    setEnd((prev) => prev + 1);
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <li onClick={handleClick}>
      <button className="h-10 px-5 text-green-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-green-100">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
    </li>
  );
};

export default RightArrow;
