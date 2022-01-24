import React, { useContext } from "react";
import "./Todo.scss";

import { AppContext } from "../../context/AppContext";

const Todo = ({ id, title, desc, reminder }) => {
  const { deleteTodo } = useContext(AppContext);

  const timeConvert = (time) => {
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      time = time.slice(1);
      time[5] = +time[0] < 12 ? " AM" : " PM";
      time[0] = +time[0] % 12 || 12;
    }
    return time.join("");
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <div className="todo">
      <h3 className="todo__title">{title}</h3>
      <div className="todo__desc">{desc}</div>
      <div className="todo__reminder">Reminder: {timeConvert(reminder)}</div>
      <div className="todo__buttons">
        <button className="todo__delButton" onClick={handleDelete}>
          Delete
        </button>
        <button className="todo__editButton">Edit</button>
        <button className="todo__doneButton">Done</button>
      </div>
    </div>
  );
};

export default Todo;
