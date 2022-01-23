import React from "react";
import "./TodoList.scss";
import Todo from "../todo/Todo";

const TodoList = () => {
  return (
    <div className="todoList">
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={4} />
      <Todo id={5} />
    </div>
  );
};

export default TodoList;
