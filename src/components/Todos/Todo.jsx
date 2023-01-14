import React, { useState } from "react";

const Todo = ({ task }) => {
  const [done, setDone] = useState(false);
  const handleDone = () => {
    setDone((prev) => !prev);
  };
  return (
    <div className="flex gap-x-2 w-full ">
      {/* {!done ? ( */}
      <>
        <p
          className={`${
            done && "line-through text-gray-400 border-gray-400"
          }text-start lg:w-64 w-44  border rounded px-3.5 py-1.5 border-gray-800`}
        >
          {task.taskName}
        </p>
        <button
          onClick={handleDone}
          className="border px-3 py-1.5  rounded border-gray-800"
        >
          {!done ? "Done" : "Undo"}
        </button>
      </>
    </div>
  );
};

export default Todo;
