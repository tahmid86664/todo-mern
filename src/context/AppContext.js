import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { initialState } from "./InitialState";

// create context
export const AppContext = createContext(initialState);

// provider
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // action
  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  const addTodo = (todo) => {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  };

  const doneTodo = (id) => {
    dispatch({
      type: "DONE_TODO",
      payload: id,
    });
  };

  const deleteCompletedTodo = (id) => {
    dispatch({
      type: "DELETE_COMPLETED_TODO",
      payload: id,
    });
  };

  const deleteAllCompletedTodo = () => {
    dispatch({
      type: "DELETE_ALL_COMPLETED_TODO",
    });
  };

  const updateTodo = (todo) => {
    dispatch({
      type: "UPDATE_TODO",
      payload: todo,
    });
  };

  const updateUser = (user) => {
    dispatch({
      type: "UPDATE_USER",
      payload: user,
    });
  };

  return (
    <AppContext.Provider
      value={{
        user: state.user,
        todos: state.todos,
        completedTodos: state.completedTodos,
        deleteTodo,
        addTodo,
        doneTodo,
        deleteCompletedTodo,
        deleteAllCompletedTodo,
        updateTodo,
        updateUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
