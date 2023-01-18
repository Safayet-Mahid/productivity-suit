import React, { useState } from "react";
import { TiEdit } from "react-icons/ti";
import { BiUndo, BiRedo } from "react-icons/bi";
import { GrTextAlignLeft, GrTextAlignCenter, GrTextAlignRight } from "react-icons/gr";
import { BsTypeUnderline, BsCircle, BsArrowBarRight } from "react-icons/bs";
import { FiItalic, FiMoreHorizontal } from "react-icons/fi";
import { FaBold } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Note from "./Note";

const Notes = () => {
    const [editBtn, setEditBtn] = useState(false)
    const [textBold, setTextBold] = useState(false)
    const [textItalic, setTextItalic] = useState(false)
    const [textUnderline, setTextUnderline] = useState(false)
    const [textCenter, setTextCenter] = useState(false)
    const [textRight, setTextRight] = useState(false)
    const [textLeft, setTextLeft] = useState(false)
    const [textDefault, setTextDefault] = useState(true)

    const notes = [
        { text: "Card 1", heading: "" },
        { text: "Card 2", heading: "" },
        { text: "Card 3", heading: "" },
        { text: "Card 4", heading: "" },
        { text: "Card 5", heading: "" },
        { text: "Card 6", heading: "" },
    ]
    
  return (
    <div className="flex flex-col justify-center items-center gap-y-10 mt-[10%] md:mt-[10%] lg:mt-[5%]">
      {/* Overview Card Section */}
      <div className="md:flex grid grid-cols-3 md:gap-x-4 gap-x-2 gap-y-4 justify-center">
        { notes.splice(0,5).map( (note, index) => (
            <Note note={note} key={index}/>
        ))}
        <button className="group hover:text-amber-500 flex justify-center items-center ">
            <span className=" seeMore text-sm -mt-1">See more</span>
            <span className=" seeMore group-hover:translate-x-1 group-hover:transition-all group-hover:delay-[10] text-gray-500 text-3xl"><IoIosArrowForward/></span>
        </button>
      </div>
      {/* Create Card Section */}
      <div className="relative border-double border-2 rounded w-fit p-10 border-gray-600 flex flex-col items-end gap-y-1">
        {/* ================ Edit Card ================ */}
        <div className={`${editBtn ? "border rounded-lg absolute md:top-10 md:-right-12 top-14 right-2 z-20 visible" : "border rounded-lg absolute md:top-10 md:-right-12 hidden"}`}>
          {/* Undo/Redo Changes */}
          <div className="border-b-2 bg-white space-x-4 px-3 py-1 hover:bg-slate-200">
            <button>
              <BiUndo />
            </button>
            <button>
              <BiRedo />
            </button>
          </div>
          {/* Text Formate */}
          <div className="border-b-2 bg-white space-x-4 px-3 py-1 hover:bg-slate-200">
            <button onClick={()=> setTextBold( prev => !prev )}>
              <FaBold />
            </button>
            <button onClick={()=> setTextItalic( prev => !prev )}>
              <FiItalic />
            </button>
            <button onClick={()=> setTextUnderline( prev => !prev )}>
              <BsTypeUnderline />
            </button>
          </div>
          {/* Font Style */}
          <div className="border-b-2 bg-white space-x-4 px-3 py-1 hover:bg-slate-200">
            <button onClick={()=>{
                setTextCenter(false)
                setTextLeft(true)
                setTextRight(false)
            }}>
              <GrTextAlignLeft />
            </button>
            <button onClick={()=>{
                setTextCenter(true)
                setTextLeft(false)
                setTextRight(false)
            }}>
              <GrTextAlignCenter />
            </button>
            <button onClick={()=>{
                setTextCenter(true)
                setTextLeft(false)
                setTextRight(true)
            }}>
              <GrTextAlignRight />
            </button>
          </div>
          {/* Card color */}
          <div className= "bg-white space-x-4 px-3 py-1">
            <button className="border-2 rounded-full border-blue-600 w-4 h-4 bg-white"></button>
            <button className="border-2 rounded-full w-4 h-4 bg-sky-200 border-sky-200"></button>
            <button className="border-2 rounded-full w-4 h-4 bg-green-200 border-green-200"></button>
          </div>
        </div>
        {/* ================ Create Card ================ */}
        <div className="relative mx-auto">
          <button onClick={()=> setEditBtn(true)} className="border-0 hover:shadow-md px-2.5 py-1.5 rounded-full hover:rounded absolute bg-white text-gray-700 hover:text-amber-600 right-3 -top-4 ">
            <TiEdit />
          </button>
          <textarea
            className={`${ textBold && "font-bold"} 
            ${ textItalic && "font-serif"} 
            ${ textUnderline && "underline"} 
            ${ textCenter && "text-center"}
            ${ textLeft && "text-left"}
            ${ textRight && "text-right"}
            ${ textDefault && "p-5 border rounded-2xl border-gray-500 md:w-96 w-48"}`}
            cols="10"
            rows="10"
          ></textarea>
        </div>
        <button className="border md:px-3 px-2 md:py-1.5 py-1 bg-gray-500 hover:bg-gray-600 text-gray-100 rounded md:text-base text-sm">
          Create Note
        </button>
      </div>
    </div>
  );
};

export default Notes;
