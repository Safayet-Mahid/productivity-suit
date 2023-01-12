import React, { useEffect, useState } from "react";
import ProgressBar from "react-customizable-progressbar";

const Pomodoro = () => {
  const initialTime = 10000;
  const [time, setTime] = useState(initialTime);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(100);
  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1000);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    !finished && setProgress(parseInt((time * 100) / initialTime));
    finished && setProgress(0);
  }, [time]);

  const getSeconds = (ms) => {
    return (ms / 1000) % 60;
  };

  const getMinutes = (ms) => {
    return parseInt(ms / 60000);
  };

  if (time === 0) {
    setRunning(false);
    setFinished(true);
    setTime(initialTime);
  }

  return (
    <div className="border-4 border-gray-500  p-4 md:p-12 rounded-2xl font-mono md:w-[80%] mx-auto flex flex-col gap-y-12">
      {/* Top */}

      <div className=" md:flex md:flex-row md:gap-x-10 justify-between mx-auto ">
        {/* Pomodoro clock */}
        <div className=" flex justify-center ">
          <div className="border-4 px-4 border-double border-gray-500 rounded-xl  lg:w-96 flex flex-col gap-y-4 py-5 justify-center items-center">
            {/* Clock */}

            <ProgressBar
              progress={progress}
              radius={100}
              trackStrokeWidth={10}
              strokeWidth={15}
              strokeColor={`${
                progress > 40 ? "green" : progress > 20 ? "orange" : "red"
              }`}
            >
              {/* indicator class is needed to set clock in progressbar  */}
              <div className="indicator flex flex-col justify-center text-2xl  rounded-full">
                {!finished ? (
                  <div>
                    <span>{("0" + getMinutes(time)).slice(-2)}:</span>
                    <span>{("0" + getSeconds(time)).slice(-2)}</span>
                  </div>
                ) : (
                  <div className="w-full">
                    <p className="text-green-500 w-full text-sm p-2">
                      Congratualations!
                    </p>
                  </div>
                )}
              </div>
            </ProgressBar>
            {/* Btn */}
            {!finished ? (
              <button
                className="border px-8 py-1.5 border-gray-500 rounded"
                onClick={() => setRunning((prev) => !prev)}
              >
                {running ? "Pause" : "Start"}
              </button>
            ) : (
              <button
                className="border px-8 py-1.5 border-gray-500 rounded"
                onClick={() => {
                  setFinished(false);
                  setProgress(100);
                }}
              >
                Reset
              </button>
            )}
          </div>
        </div>
        {/* Pomodoro History */}
        <div className="mt-10 w-40 mx-auto">
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
      <div className="lg:w-[75%] md:w-[100%] mx-auto ">
        <div className=" lg:px-12 mx-auto border-4 border-double border-gray-500 rounded-xl ">
          {/* all days container */}
          <div className=" w-64  md:w-full flex justify-start md:justify-center gap-x-3 px-4 py-8  overflow-x-scroll md:overflow-hidden">
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
