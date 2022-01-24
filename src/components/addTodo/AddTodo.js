import React, { useContext, useState } from "react";
import "./AddTodo.scss";
import { AppContext } from "../../context/AppContext";

const AddTodo = () => {
  const { addTodo } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [reminder, setReminder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: Math.floor(Math.random() * 100000),
      title: title,
      desc: desc,
      reminder: reminder,
    };

    addTodo(todo);

    setTitle("");
    setDesc("");
    setReminder("");
  };

  return (
    <div className="addTodo">
      <form onSubmit={handleSubmit}>
        <span>Title</span>
        <input
          type="text"
          required
          placeholder="Enter To Do title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <span>Description</span>
        <textarea
          type="text"
          rows={5}
          placeholder="Write about To Do"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <span>Reminder Time (hh:mm AM/PM)</span>
        <input
          type="time"
          placeholder="Enter time"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
        />
        <button type="submit">Add To Do</button>
      </form>
    </div>
  );
};

export default AddTodo;
