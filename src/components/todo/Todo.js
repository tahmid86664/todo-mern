import React from "react";
import "./Todo.scss";

const Todo = ({ id }) => {
  return (
    <div className="todo">
      <h3 className="todo__title">To Do {id}</h3>
      <div className="todo__desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div className="todo__reminder">Reminder: 12:34 AM</div>
      <div className="todo__buttons">
        <button className="todo__delButton">Delete</button>
        <button className="todo__editButton">Edit</button>
        <button className="todo__doneButton">Done</button>
      </div>
    </div>
  );
};

export default Todo;
