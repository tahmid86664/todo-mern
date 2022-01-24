export default (state, action) => {
  switch (action.type) {
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case "DONE_TODO":
      const compTodo = state.todos.filter(
        (todo) => todo.id === action.payload
      )[0];
      return {
        ...state,
        completedTodos: [compTodo, ...state.completedTodos],
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "DELETE_COMPLETED_TODO":
      return {
        ...state,
        completedTodos: state.completedTodos.filter(
          (todo) => todo.id !== action.payload
        ),
      };
    case "DELETE_ALL_COMPLETED_TODO":
      return {
        ...state,
        completedTodos: [],
      };
    case "UPDATE_TODO":
      const upTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      upTodos.push(action.payload);
      return {
        ...state,
        todos: upTodos,
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
