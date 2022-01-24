import React, { useContext } from "react";
import "./TodoList.scss";
import { AppContext } from "../../context/AppContext";
import Todo from "../todo/Todo";

const TodoList = () => {
  const { todos } = useContext(AppContext);

  // sort desc by timestamp
  todos.sort((t1, t2) => {
    return new Date(t2.timestamp) - new Date(t1.timestamp);
  });

  return (
    <div className="todoList">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          desc={todo.desc}
          reminder={todo.reminder}
          updateStatus={todo.updateStatus}
        />
      ))}
    </div>
  );
};

export default TodoList;
