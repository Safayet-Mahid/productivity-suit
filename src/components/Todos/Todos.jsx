import React, { useState } from "react";
import DatePicker from "./DatePicker";
import Todo from "./Todo";
import { format } from "date-fns";
import DemoTodos from "./DemoTodos";
import { v4 as uuidv4 } from "uuid";

const Todos = () => {
  const [allTodos, setAllTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [date, setDate] = useState(new Date());

  const formateDate = (date) => {
    return format(date, "dd LLL , yyyy");
  };

  const handleAddTodo = (e) => {
    if (todoInput) {
      const todo = {
        taskName: todoInput,
        taskDate: formateDate(date),
        id: uuidv4(),
      };
      setAllTodos((prev) => [...prev, todo]);
      setTodoInput("");
    }
  };

  const handleTodoInput = (e) => {
    if (e.key == "Enter") {
      handleAddTodo();
    }
  };

  const handleDelete = (id) => {
    setAllTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="text-sm font-mono space-y-10 flex flex-col justify-center items-center border border-gray-500 rounded-xl py-10">
      <div className="md:flex gap-x-14 mx-auto space-y-10">
        {/* Calendar */}
        <div className="">
          <DatePicker setDate={setDate} />
        </div>
        {/* Todos */}
        <div className=" space-y-10 self-center">
          {/* Create Todo */}
          <div className="space-x-2 border-2 rounded-md p-2 w-fit mx-auto border-gray-500 border-double">
            <input
              type="text"
              placeholder="add task.."
              value={todoInput}
              className="border lg:w-64 px-2 py-1 border-gray-800 rounded-md"
              onChange={(e) => setTodoInput(e.target.value)}
              onKeyUp={(e) => handleTodoInput(e)}
            />
            <button
              className="border px-2.5 py-1 border-gray-800 rounded-md"
              onClick={(e) => handleAddTodo(e)}
            >
              Add
            </button>
          </div>
          {/* Listed Todo Container */}
          {allTodos.length > 0 ? (
            <div className="mx-auto w-fit ">
              <p className="border px-4 py-1 mb-1 w-fit rounded border-gray-700 ml-auto">
                {formateDate(date)}
              </p>
              {/* Todo's Container */}
              <div className="border-2 p-3 rounded-lg border-gray-500 space-y-2">
                {/* Single Todo */}
                {allTodos.map((todo, index) => (
                  <Todo key={index} task={todo} handleDelete={handleDelete} />
                ))}
              </div>
              <p className="mt-2">Todo's</p>
            </div>
          ) : (
            <DemoTodos />
          )}
        </div>
      </div>

      {/* Weekly Todos */}
      <div className="space-y-2 w-screen md:w-fit p-4 ">
        <div className="border-2 rounded-xl  p-4 px-3 mx-auto border-gray-500 flex gap-x-2 w-5/6 sm:w-fit overflow-x-scroll sm:overflow-hidden  ">
          <div className="border px-2  w-16 h-16 flex justify-center items-center rounded-lg border-gray-600">
            14/01
          </div>
          <div className="border px-2 w-16 h-16 flex justify-center items-center rounded-lg border-gray-600">
            14/01
          </div>
          <div className="border px-2 w-16 h-16 flex justify-center items-center rounded-lg border-gray-600">
            14/01
          </div>
          <div className="border px-2 w-16 h-16 flex justify-center items-center rounded-lg border-gray-600">
            14/01
          </div>
          <div className="border px-2 w-16 h-16 flex justify-center items-center rounded-lg border-gray-600">
            14/01
          </div>
          <div className="border px-2 w-16 h-16 flex justify-center items-center rounded-lg border-gray-600">
            14/01
          </div>
          <div className="border px-2 w-16 h-16 flex justify-center items-center rounded-lg border-gray-600">
            14/01
          </div>
        </div>
        <p>Last week</p>
      </div>
    </div>
  );
};

export default Todos;
