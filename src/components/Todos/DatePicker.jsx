import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DatePicker = ({ setDate }) => {
  const [value] = useState(new Date());
  const [data, setData] = useState(true);

 

  return (
    <div className="font-mono">
      <Calendar
        onClickDay={(value) => {
          setDate(value);
        }}
        value={value}
      />
  
    </div>
  );
};

export default DatePicker;
