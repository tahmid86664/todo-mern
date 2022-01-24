import React from "react";
import AddTodo from "../../components/addTodo/AddTodo";
import TodoList from "../../components/todoList/TodoList";

const Home = () => {
  return (
    <div className="body">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Home;
