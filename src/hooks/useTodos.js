import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodos = () => {
  const {
    todos,
    dispatch,
    addTodo,
    removeTodo,
    toggleTodo,
    removeCompleted,
    sortTodos,
    filter,
    setFilter,
  } = useContext(TodoContext);

  const todosFiltered = () => {
    return todos.filter((todo) => {
      switch (filter) {
        case "All":
          return true;

        case "Completed":
          return todo.completed;

        case "Active":
          return !todo.completed;

        default:
          return todos;
      }
    });
  };

  return {
    todosState: todosFiltered(),
    dispatch,
    addTodo,
    removeTodo,
    toggleTodo,
    removeCompleted,
    sortTodos,
    filter,
    setFilter,
  };
};
