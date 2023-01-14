import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DatePicker = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="font-mono">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default DatePicker;
