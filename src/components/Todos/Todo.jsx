import React, { useState } from "react";
import { TiEdit } from "react-icons/ti";
import { MdDeleteSweep } from "react-icons/md";

const Todo = ({ task, handleDelete }) => {
  const [done, setDone] = useState(false);
  const handleDone = () => {
    setDone((prev) => !prev);
  };

  const delShaddow = {
    boxShadow:
      "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
  };

  return (
    <div className="flex gap-x-2 w-fit mx-auto  transition-all   ">
      <div className="group relative flex ">
        <p
          className={`${
            done && "task line-through text-gray-400 border-gray-400"
          } text-start lg:w-64 w-44  border rounded px-3.5 py-1.5 border-gray-800 group-hover:opacity-50  `}
        >
          {task.taskName}
        </p>
        <button
          // onClick={() => handleDelete(task.id)}
          className="border delete px-3 py-1.5 invisible rounded hover:border-orange-500 hover:text-orange-500 group-hover:visible absolute bg-white right-11 -top-4 "
          style={delShaddow}
        >
          <TiEdit />
        </button>
        <button
          onClick={() => handleDelete(task.id)}
          className="border delete px-3 py-1.5 invisible rounded  hover:border-red-500 hover:text-red-500 group-hover:visible absolute bg-white -right-0 -top-4 "
          style={delShaddow}
        >
          <MdDeleteSweep />
        </button>
      </div>
      <button
        onClick={handleDone}
        className="border px-3 py-1.5  rounded border-gray-800"
      >
        {!done ? "Done" : "Undo"}
      </button>
    </div>
  );
};

export default Todo;
