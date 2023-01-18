import React from "react";

const Note = ({ note }) => {
  return (
    <div className="border-2 rounded-lg text-center border-gray-600 w-20 h-24">
      {note.text}
    </div>
  );
};

export default Note;
