import React, { useContext, useEffect, useState } from "react";
import "./Todo.scss";

import { AppContext } from "../../context/AppContext";

const Todo = ({ id, title, desc, reminder, dashboard, updateStatus }) => {
  const { deleteTodo, doneTodo, deleteCompletedTodo, updateTodo } =
    useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editReminder, setEditReminder] = useState("");
  const [isUpdateButtonActive, setIsUpdateButtonActive] = useState(false);

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

  const handleDone = () => {
    doneTodo(id);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);

    setEditTitle(title);
    setEditDesc(desc);
    setEditReminder(reminder);
  };

  const handleDeleteCompleted = () => {
    deleteCompletedTodo(id);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const todo = {
      id: id,
      title: editTitle,
      desc: editDesc,
      reminder: editReminder,
      timestamp: new Date().toLocaleString(),
      updateStatus: "updated",
    };

    console.log(new Date().toLocaleString());
    updateTodo(todo);
    setIsEdit(false);
  };

  useEffect(() => {
    if (editTitle === title && editDesc === desc && editReminder === reminder) {
      setIsUpdateButtonActive(false);
    } else {
      setIsUpdateButtonActive(true);
    }
  });
  return (
    <>
      <div className="todo">
        <h3 className="todo__title">{title}</h3>
        <div className="todo__desc">{desc}</div>
        <div className="todo__bottom">
          <div className="todo__updateStatus">{updateStatus}</div>
          <div className="todo__reminder">
            Reminder: {timeConvert(reminder)}
          </div>
        </div>
        <div className="todo__buttons">
          {dashboard ? (
            <button className="todo__delButton" onClick={handleDeleteCompleted}>
              Delete
            </button>
          ) : (
            <>
              <button className="todo__delButton" onClick={handleDelete}>
                Delete
              </button>
              <button className="todo__editButton" onClick={handleEdit}>
                Edit
              </button>
              <button className="todo__doneButton" onClick={handleDone}>
                Done
              </button>
            </>
          )}
        </div>
      </div>
      <form
        className="editForm"
        style={{ display: `${isEdit ? "flex" : "none"}` }}
        onSubmit={handleUpdate}
      >
        <span>Title</span>
        <input
          type="text"
          required
          placeholder="Enter To Do title"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <span>Description</span>
        <textarea
          type="text"
          rows={5}
          placeholder="Write about To Do"
          value={editDesc}
          onChange={(e) => setEditDesc(e.target.value)}
        />
        <span>Reminder Time (hh:mm AM/PM)</span>
        <input
          type="time"
          placeholder="Enter time"
          value={editReminder}
          onChange={(e) => setEditReminder(e.target.value)}
        />
        <button
          type="submit"
          disabled={!isUpdateButtonActive}
          className={isUpdateButtonActive ? "" : "disabled"}
        >
          Update
        </button>
      </form>
    </>
  );
};

export default Todo;
