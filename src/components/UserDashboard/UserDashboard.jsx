import React from "react";

const UserDashboard = () => {
  return (

<div className="flex justify-center items-center container min-h-screen">

    <div className="container space-y-4 lg:border rounded-lg lg:p-8">
      {/* top  */}
      <div className="md:flex gap-x-3">
        {/* left  */}
        <div className="border rounded-lg flex flex-col-reverse md:flex-[3] md:flex lg:flex-row md:justify-between px-2 py-8 md:gap-y-6">
          {/* features  */}
          <div className="  flex-1 grid grid-cols-2 gap-2 px-3 lg:px-6 pt-10 md:py-0 lg:border-r-2">
            <div className="flex justify-center items-center border rounded-lg py-6 lg:p-2">Pomodoro</div>
            <div className="flex justify-center items-center border rounded-lg py-6 lg:p-2">Notes</div>
            <div className="flex justify-center items-center border rounded-lg py-6 lg:p-2">Parroto</div>
            <div className="flex justify-center items-center border rounded-lg py-6 lg:p-2">Flashcards</div>
          </div>
          {/* user info  */}
          <div className=" flex-1 space-y-2 px-3 lg:px-6">
            <p className="border rounded-lg p-2">username</p>
            <p className="border rounded-lg p-2">bio</p>
            <div className="border rounded-lg p-2 h-48">unknown</div>
          </div>
        </div>

        {/* right  */}
        <div className="border rounded-lg md:flex-1 py-6 mt-10 md:mt-0">
          <p>08/01/22</p>
          {/* todos */}
          <div className="p-2 ">
            <h4 className="border w-fit mx-auto px-6 py-1  rounded-lg">
              to-do's
            </h4>
            {/* todos list  */}
            <div></div>
          </div>
        </div>
      </div>

      {/* analytics  */}
      <div className="border rounded-lg h-80">analytics will be here</div>
    </div>
</div>
  );
};

export default UserDashboard;
