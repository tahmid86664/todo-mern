import React, { useContext } from "react";
import "./TodoList.scss";
import { AppContext } from "../../context/AppContext";
import Todo from "../todo/Todo";

const TodoList = () => {
  const { todos } = useContext(AppContext);

  return (
    <div className="todoList">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          desc={todo.desc}
          reminder={todo.reminder}
        />
      ))}
    </div>
  );
};

export default TodoList;
