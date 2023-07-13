import { useEffect, useReducer, useState } from "react";
import { getItem, setItem } from "../utils/localStorage";
import { todosInitialState } from "../mocks/todosInitialState";
import { todosReducer } from "./todosReducer"
import { TodoContext } from "./TodosContext";

const INITIAL_STATE = getItem("Todos") || todosInitialState

export const TodoProvider = ({ children }) => {
  // STATE TODOS
  const [todosState, dispatch] = useReducer(todosReducer, INITIAL_STATE);
  // FILTER
  const [filter, setFilter] = useState(getItem("Filter") || "All");

  const addTodo = (todo) => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const removeCompleted = () => {
    dispatch({ type: "REMOVE_COMPLETED" });
  };

  const sortTodos = (drag, over) => {
    if (filter === "All") {
      dispatch({ type: "SORT_TODOS", payload: { drag, over } });
    }
  };

  useEffect(() => {
    setItem("Todos", todosState);
  }, [todosState]);

  return (
    <TodoContext.Provider
      value={{
        todosState,
        dispatch,
        addTodo,
        removeTodo,
        toggleTodo,
        removeCompleted,
        sortTodos,
        filter,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};