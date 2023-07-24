import { useContext } from "react";
import { TodoContext } from "../context/TodosContext";
import { todosFilter } from "../utils/todosFilter";

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

  const filteredTodos = () => {
    return todosFilter(todosState, filter);
  };

  return {
    todos: filteredTodos(),
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
