import React from "react";
import Todo from "./Todo";

const DemoTodos = () => {
  const demoTodos = [
    {
      taskName: "Demo Task 1..",
      taskDate: "",
    },
    {
      taskName: "Demo Task 2..",
      taskDate: "",
    },
    {
      taskName: "Demo Task 3..",
      taskDate: "",
    },
  ];
  const handleDelete = () => {
    console.log("deleted");
  };
  return (
    <div className="border-2 p-3 rounded-lg border-gray-500 space-y-2">
      <p className="mb-8"> Your task will be shown here...</p>
      {demoTodos.map((todo, index) => (
        <Todo key={index} task={todo} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default DemoTodos;
