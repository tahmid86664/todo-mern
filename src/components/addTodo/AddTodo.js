import React from "react";
import "./AddTodo.scss";

const AddTodo = () => {
  return (
    <div className="addTodo">
      <form>
        <span>Title</span>
        <input type="text" required placeholder="Enter To Do title" />
        <span>Description</span>
        <textarea type="text" rows={5} placeholder="Write about To Do" />
        <span>Reminder Time (hh:mm AM/PM)</span>
        <input type="time" placeholder="Enter time" />
        <button>Add To Do</button>
      </form>
    </div>
  );
};

export default AddTodo;
