import React, { useContext } from "react";
import Todo from "../../components/todo/Todo";
import "./Dashboard.scss";

import UserPanel from "../../components/userpanel/UserPanel";

import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { completedTodos, deleteAllCompletedTodo } = useContext(AppContext);

  const handleDeleteAll = () => {
    if (completedTodos.length > 0) {
      deleteAllCompletedTodo();
    }
  };

  return (
    <div className="dashboard">
      <div className="container">
        <UserPanel />
        <div className="divider"></div>
        <div className="right">
          <div className="todosContainer">
            {completedTodos.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                desc={todo.desc}
                reminder={todo.reminder}
                dashboard
              />
            ))}
          </div>
          <button className="deleteAll__button" onClick={handleDeleteAll}>
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
