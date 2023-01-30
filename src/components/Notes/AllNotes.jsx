import { data } from "autoprefixer";
import React, { useState } from "react";
import Pagination from "./Pagination";

const notes = [
  {
    id: 1,
    title: "nckjsncnszio oij ioj poij",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, mollitia?",
  },
  {
    id: 2,
    title: "nckjsncnszio oij ioj poij",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, mollitia?",
  },
  {
    id: 3,
    title: "nckjsncnszio oij ioj poij",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, mollitia?",
  },
  {
    id: 4,
    title: "nckjsncnszio oij ioj poij",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, mollitia?",
  },
  {
    id: 5,
    title: "nckjsncnszio oij ioj poij",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, mollitia?",
  },
  {
    id: 6,
    title: "nckjsncnszio oij ioj poij",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, mollitia?",
  },
  {
    id: 7,
    title: "nckjsncnszio oij ioj poij",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, mollitia?",
  },
  {
    id: 8,
    title: "nckjsncnszio oij ioj poij",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, mollitia?",
  },
  {
    id: 9,
    title: "nckjsncnszio oij ioj poij",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, mollitia?",
  },
  {
    id: 10,
    title: "nckjsncnszio oij ioj poij",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, mollitia?",
  },
];

const AllNotes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const noteNumber = 2;

  const start = currentPage * noteNumber - noteNumber;
  const end = currentPage * noteNumber;

  return (
    <div className="border-2 p-4 md:p-10  rounded-md text-start">
      AllNotes
      {notes.slice(start, end).map((note) => (
        <div
          key={note.id}
          className="my-4 bg-green-100 p-3 md:p-4 hover:-translate-y-0.5 hover:translate-x-0.5 transition-all delay-500"
        >
          <h3 className="font-semibold">
            {note.id}.{note.title}
          </h3>
          <p className="text-slate-500">{note.desc.substring(0, 25) + "..."}</p>
          <hr />
        </div>
      ))}
      <Pagination notes={notes} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default AllNotes;
// 1 -- 1,10
// 2 --- 11,20
// 3 ---21,30

// 1 -- 1,2 start- currentPage*notenumber-(noteNumber-1) end - currentPage * noteNumber
// 2 --- 3,4
// 3 ---5,6
