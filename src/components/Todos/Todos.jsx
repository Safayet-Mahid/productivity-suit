import React from "react";
import DatePicker from "./DatePicker";

const Todos = () => {
  return (
    <div className="text-sm font-mono space-y-10 flex flex-col justify-center items-center border border-gray-500 rounded-xl py-10">
      <div className="md:flex gap-x-28 mx-auto space-y-10">
        {/* Calendar */}
        <div className="">
          <DatePicker />
        </div>
        {/* Todos */}
        <div className=" space-y-10 self-center">
          {/* Create Todo */}
          <div className="space-x-2 border-2 rounded-md p-2 w-fit mx-auto border-gray-500 border-double">
            <input
              type="text"
              name=""
              id=""
              placeholder="add task.."
              className="border lg:w-64 px-2 py-1 border-gray-800 rounded-md"
            />
            <button className="border px-2.5 py-1 border-gray-800 rounded-md">
              Add
            </button>
          </div>
          {/* Listed Todo Container */}
          <div className="mx-auto w-fit ">
            <p className="border px-4 py-1 mb-1 w-fit rounded border-gray-700 ml-auto">
              08/01/23
            </p>
            {/* Todo's Container */}
            <div className="border-2 p-3 rounded-lg border-gray-500 space-y-2">
              {/* Single Todo */}
              <div className="flex gap-x-2 w-full ">
                <p className="text-start lg:w-64 w-44  border rounded px-3.5 py-1.5 border-gray-800">
                  task 1...
                </p>
                <button className="border px-3 py-1.5  rounded border-gray-800">
                  Done
                </button>
              </div>
              <div className="flex gap-x-2">
                <p className="text-start lg:w-64 w-44 border rounded px-3.5 py-1.5 border-gray-800">
                  task 1...
                </p>
                <button className="border px-3 py-1.5 rounded border-gray-800">
                  Done
                </button>
              </div>
              <div className="flex gap-x-2">
                <p className="text-start lg:w-64 w-44 border rounded px-3.5 py-1.5 border-gray-800">
                  task 1...
                </p>
                <button className="border px-3 py-1.5 rounded border-gray-800">
                  Done
                </button>
              </div>
            </div>
            <p className="mt-2">Todo's</p>
          </div>
        </div>
      </div>

      {/* Weekly Todos */}
      <div className="space-y-2">
        <div className="border-2 rounded-xl  p-4 mx-auto border-gray-500 flex gap-x-2 w-5/6 md:w-fit  ">
          <div className="border w-16 h-16 flex justify-center items-center rounded-lg border-gray-600">
            14/01
          </div>
          <div className="border w-16 h-16 flex justify-center items-center rounded-lg border-gray-600">
            14/01
          </div>
          <div className="border w-16 h-16 flex justify-center items-center rounded-lg border-gray-600">
            14/01
          </div>
          <div className="border w-16 h-16 flex justify-center items-center rounded-lg border-gray-600">
            14/01
          </div>
        </div>
        <p>Last week</p>
      </div>
    </div>
  );
};

export default Todos;
