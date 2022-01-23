import React from "react";
import "./App.scss";

import Header from "./components/header/Header";
import AddTodo from "./components/addTodo/AddTodo";
import TodoList from "./components/todoList/TodoList";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
