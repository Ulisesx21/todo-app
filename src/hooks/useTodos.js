import { useContext } from "react";
import { TodoContext } from "../context/TodosContext";

export const useTodos = () => {
  const {
    todosState,
    dispatch,
    addTodo,
    removeTodo,
    toggleTodo,
    removeCompleted,
    sortTodos,
    filter,
    setFilter,
  } = useContext(TodoContext);

  const todosFilter = () => {
    return todosState.filter((todo) => {
      switch (filter) {
        case "All":
          return true;

        case "Completed":
          return todo.completed;

        case "Active":
          return !todo.completed;

        default:
          return todo;
      }
    });
  };

  return {
    todos: todosFilter(),
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
