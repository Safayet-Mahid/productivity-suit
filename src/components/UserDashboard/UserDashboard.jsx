import React from "react";

const UserDashboard = () => {
  return (

<div className="flex justify-center items-center container min-h-screen">

    <div className="container space-y-4 border rounded-lg p-8">
      {/* top  */}
      <div className=" flex gap-x-3">
        {/* left  */}
        <div className="border rounded-lg flex-[3] flex justify-between px-2 py-8  ">
          {/* features  */}
          <div className="  flex-1 grid grid-cols-2 gap-2 px-6 border-r-2">
            <div className="border rounded-lg p-2">Pomodoro</div>
            <div className="border rounded-lg p-2">Notes</div>
            <div className="border rounded-lg p-2">Parroto</div>
            <div className="border rounded-lg p-2">Flashcards</div>
          </div>
          {/* user info  */}
          <div className=" flex-1 space-y-2 px-6">
            <p className="border rounded-lg p-2">username</p>
            <p className="border rounded-lg p-2">bio</p>
            <div className="border rounded-lg p-2 h-48">unknown</div>
          </div>
        </div>

        {/* right  */}
        <div className="border rounded-lg flex-1 py-6">
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
