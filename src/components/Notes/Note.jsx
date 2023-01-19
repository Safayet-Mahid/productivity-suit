import React from "react";

const Note = ({ note }) => {
  return (
    <div className="border-2 flex justify-center items-center rounded-lg text-center border-gray-600 w-24 h-20 break-words p-2">
      {note.title}
    </div>
  );
};

export default Note;
