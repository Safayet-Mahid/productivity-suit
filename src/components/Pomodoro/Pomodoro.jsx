import React from "react";

const Pomodoro = () => {
  return (
    <div className="border-4 border-gray-500  p-12 rounded-2xl font-mono w-[75%] mx-auto flex flex-col gap-y-12">
      {/* Top */}
      <div className=" flex gap-x-10 justify-between mx-auto ">
        {/* Pomodoro clock */}
        <div className=" flex justify-center ">
          <div className="border-4 border-double border-gray-500 rounded-xl w-96 h-72 flex flex-col gap-y-4 py-5 justify-center items-center">
            {/* Clock */}
            <div className="w-48 h-48 border-2 border-gray-500 rounded-full"></div>
            {/* Btn */}
            <button className="border px-8 py-1.5 border-gray-500 rounded">
              Start
            </button>
          </div>
        </div>
        {/* Pomodoro History */}
        <div className="mt-10 w-40">
          <div className="px-3 text-end border-4 border-double border-gray-500 rounded-xl  py-6">
            <div className="text-sm w-2/3 space-y-2">
              <p>Coding : 5</p>
              <p>Study : 3</p>
              <p>Coding : 5</p>
              <p>Study : 3</p>
              <p>Coding : 5</p>
              <p>Study : 3</p>
            </div>
          </div>
          <p className="mt-3 text-center">History</p>
        </div>
      </div>
      {/* Bottom */}
      <div className="w-[75%] mx-auto">
        <div className=" px-12 mx-auto border-4 border-double border-gray-500 rounded-xl">
          <div className="flex justify-center gap-x-3 py-8  ">
            <div className="space-y-2">
              <div className="border w-12 h-32 rounded-lg  border-gray-400 flex items-end">
                <div className="h-[28%] w-full px-4 bg-green-300 rounded-b-lg"></div>
              </div>
              <div>sun</div>
            </div>
            <div className="space-y-2">
              <div className="border w-12 h-32 rounded-lg  border-gray-400 flex items-end">
                <div className="h-[40%] w-full px-4 bg-green-300 rounded-b-lg"></div>
              </div>
              <div>mon</div>
            </div>
            <div className="space-y-2">
              <div className="border w-12 h-32 rounded-lg  border-gray-400 flex items-end">
                <div className="h-[50%] w-full px-4 bg-green-300 rounded-b-lg"></div>
              </div>
              <div>tue</div>
            </div>
            <div className="space-y-2">
              <div className="border w-12 h-32 rounded-lg  border-gray-400 flex items-end">
                <div className="h-[44%] w-full px-4 bg-green-300 rounded-b-lg"></div>
              </div>
              <div>wed</div>
            </div>
            <div className="space-y-2">
              <div className="border w-12 h-32 rounded-lg  border-gray-400 flex items-end">
                <div className="h-[75%] w-full px-4 bg-green-300 rounded-b-lg"></div>
              </div>
              <div>thu</div>
            </div>
            <div className="space-y-2">
              <div className="border w-12 h-32 rounded-lg  border-gray-400 flex items-end">
                <div className="h-[88%] w-full px-4 bg-green-300 rounded-b-lg"></div>
              </div>
              <div>fri</div>
            </div>
            <div className="space-y-2">
              <div className="border w-12 h-32 rounded-lg  border-gray-400 flex items-end">
                <div className="h-[28%] w-full px-4 bg-green-300 rounded-b-lg"></div>
              </div>
              <div>sat</div>
            </div>
          </div>
        </div>
        <p className=" mt-3 text-center">Weekly Reports</p>
      </div>
    </div>
  );
};

export default Pomodoro;
