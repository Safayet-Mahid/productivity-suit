import React, { useState } from "react";
import { TiEdit } from "react-icons/ti";
import { BiUndo, BiRedo } from "react-icons/bi";
import {
  GrTextAlignLeft,
  GrTextAlignCenter,
  GrTextAlignRight,
} from "react-icons/gr";
import { BsTypeUnderline, BsCircle, BsArrowBarRight } from "react-icons/bs";
import { FiItalic, FiMoreHorizontal } from "react-icons/fi";
import { FaBold } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Note from "./Note";
import { Link } from "react-router-dom";

const Notes = () => {
  const [editBtn, setEditBtn] = useState(false);
  const [noteCard, setNoteCard] = useState([]);
  const [noteCardActive, setNoteCardActive] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [alignment, setAlignment] = useState("left");
  const [style, setStyle] = useState({
    bold: false,
    italic: false,
    underline: false,
  });

  const notes = [
    { title: "Card 1" },
    { title: "Card 2" },
    { title: "Card 3" },
    { title: "Card 4" },
    { title: "Card 5" },
    { title: "Card 6" },
  ];

  const handleAddCard = (e) => {
    const notes = {
      title: noteTitle,
      text: noteText,
    };
    setNoteCard((prev) => [...prev, notes]);
    setNoteText("");
    setNoteTitle("");
    setNoteCardActive(false);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-y-10 mt-[10%] md:mt-[10%] lg:mt-[5%]">
      {/* Overview Card Section */}
      <div className="md:flex grid grid-cols-3 md:gap-x-4 gap-x-2 gap-y-4 justify-center">
        {noteCard.length ? (
          <>
            {noteCard.map(
              (note, index) =>
                noteCard.indexOf(note) < 5 && <Note note={note} key={index} />
            )}
          </>
        ) : (
          <>
            {notes.map(
              (note, index) =>
                notes.indexOf(note) < 5 && <Note note={note} key={index} />
            )}
          </>
        )}
        {/* {noteCard.length > 5 && ( */}
        {notes.length > 5 && (
          <Link to="/notes" className="group hover:text-amber-500 flex justify-center items-center ">
            <span className=" seeMore text-sm -mt-1"
            
            >See more</span>
            <span className=" seeMore group-hover:translate-x-1 group-hover:transition-all group-hover:delay-[10] text-gray-500 text-3xl">
              <IoIosArrowForward />
            </span>
          </Link>
        )}
      </div>
      {/* Create Card Section */}
      <div className="relative border-double border-2 rounded w-fit p-10 border-gray-600 flex flex-col items-end gap-y-1">
        {/* ================ Edit Card ================ */}
        <div
          className={`${
            editBtn
              ? "border rounded-lg absolute md:top-10 md:-right-12 top-14 right-2 z-20 visible"
              : "border rounded-lg absolute md:top-10 md:-right-12 hidden"
          }`}
        >
          {/* Text Formate */}
          <div className="border-b-2 bg-white space-x-4 px-3 py-1 hover:bg-slate-200">
            <button
              onClick={() =>
                setStyle((prev) => ({ ...prev, bold: !prev.bold }))
              }
              className={`${style.bold && "text-blue-500"}`}
            >
              <FaBold />
            </button>
            <button
              onClick={() =>
                setStyle((prev) => ({ ...prev, italic: !prev.italic }))
              }
              className={` ${style.italic && "text-blue-500"}`}
            >
              <FiItalic />
            </button>
            <button
              className={`${style.underline && "text-blue-500"}`}
              onClick={() =>
                setStyle((prev) => ({ ...prev, underline: !prev.underline }))
              }
            >
              <BsTypeUnderline />
            </button>
          </div>
          {/* Font Style */}
          <div className="border-b-2 bg-white space-x-4 px-3 py-1 hover:bg-slate-200">
            <button
              onClick={() => setAlignment("left")}
              className={`${alignment === "left" && "text-blue-400"}`}
            >
              <GrTextAlignLeft />
            </button>
            <button
              className={`${alignment === "center" && "text-blue-400"}`}
              onClick={() => setAlignment("center")}
            >
              <GrTextAlignCenter />
            </button>
            <button
              className={`${alignment === "right" && "text-blue-400"}`}
              onClick={() => setAlignment("right")}
            >
              <GrTextAlignRight />
            </button>
          </div>
          {/* Card color */}
          <div className="bg-white space-x-4 px-3 py-1">
            <button className="border-2 rounded-full border-blue-600 w-4 h-4 bg-white"></button>
            <button className="border-2 rounded-full w-4 h-4 bg-sky-200 border-sky-200"></button>
            <button className="border-2 rounded-full w-4 h-4 bg-green-200 border-green-200"></button>
          </div>
        </div>
        {/* ================ Create Card ================ */}
        <div className="relative mx-auto">
          <button
            onClick={() => setEditBtn((prev) => !prev)}
            className="border-0 hover:shadow-md px-2.5 py-1.5 rounded-full hover:rounded absolute bg-white text-gray-700 hover:text-amber-600 right-3 -top-4 "
          >
            <TiEdit />
          </button>
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            className={`${style.bold && "font-bold"} 
      
            ${style.underline && "underline"} 
            ${style.italic && "italic"} 
            p-5 border rounded-2xl border-gray-500 md:w-96 w-48
            text-${alignment}`}
            cols="10"
            rows="10"
          ></textarea>
        </div>
        <button
          onClick={() => setNoteCardActive(true)}
          disabled={noteText ? false : true}
          className={`border md:px-3 px-2 md:py-1.5 py-1 rounded md:text-base text-sm ${
            !noteText
              ? "bg-gray-400 cursor-not-allowed text-gray-50"
              : "hover:bg-gray-600 bg-gray-500 text-gray-100"
          }`}
        >
          Create Note
        </button>

        <div
          className={`${
            noteCardActive
              ? "absolute top-28 -left-14 shadow-2xl visible flex flex-col items-end gap-y-1 bg-white px-10 py-5 border-0 w-96 rounded-lg"
              : "absolute top-28 -left-14 shadow-2xl hidden bg-white px-10 py-5 border-0 w-96 rounded-lg"
          }`}
        >
          <p className="w-full text-start text-lg">Card Title</p>
          <input
            onChange={(e) => setNoteTitle(e.target.value)}
            className="w-full border-2 border-gray-500 px-3 py-1.5"
            type="text"
            value={noteTitle}
          />
          <button
            onClick={handleAddCard}
            className={`border-0 px-3.5 py-1.5   rounded md:text-base text-sm ${
              noteTitle
                ? "bg-slate-700 hover:bg-slate-800 text-gray-100"
                : "text-gray-50 cursor-not-allowed bg-slate-400"
            }`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
