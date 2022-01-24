import React, { useContext } from "react";
import Todo from "../../components/todo/Todo";
import "./Dashboard.scss";

import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { user, completedTodos } = useContext(AppContext);
  return (
    <div className="dashboard">
      <div className="container">
        <div className="left">
          <div className="left__top">
            <div className="imageContainer">
              <img
                src="https://avatars.dicebear.com/api/human/1.svg"
                alt="user image"
              />
            </div>
            <p className="username">{user.username}</p>
            <button>Change Username</button>
            <button>Change Password</button>
            <button>Change Avatar</button>
          </div>
          <div className="left__bottom">
            <div className="total__todo">Total Todo: 5</div>
            <div className="completed__todo">Completed Todo: 2</div>
          </div>
        </div>
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
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
