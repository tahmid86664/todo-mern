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

  return (
    <AppContext.Provider
      value={{
        user: state.user,
        todos: state.todos,
        completedTodos: state.completedTodos,
        deleteTodo,
        addTodo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
