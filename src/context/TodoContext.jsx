import { createContext, useEffect, useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";
import { get, set } from "../utils/localStorage";

export const TodoContext = createContext();

const INITIAL_STATE = get("Todos") || [
  { id: 1, description: "10 minutes meditation", completed: true },
  { id: 2, description: "Read for 1 hour", completed: false },
  {
    id: 3,
    description: "Complete Todo App on Frontend Mentor",
    completed: true,
  },
  { id: 4, description: "Pick up groceries", completed: false },
];

export const TodoProvider = ({ children }) => {
  // STATE TODOS
  const [todos, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  // FILTER
  const [filter, setFilter] = useState(get("Filter") || "All");
  // THEME MODE
  const [mode, setMode] = useState(get("Mode") || false);

  const addTodo = (todo) => {
    dispatch({ type: "addTodo", payload: todo });
  };

  const removeTodo = (id) => {
    dispatch({ type: "removeTodo", payload: id });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "toggleTodo", payload: id });
  };

  const removeCompleted = () => {
    dispatch({ type: "removeCompleted" });
  };

  const sortTodos = (drag, over) => {
    if (filter === "All") {
      dispatch({ type: "sortTodos", payload: { drag, over } });
    }
  };

  useEffect(() => {
    set("Todos", todos);
  }, [todos]);

  useEffect(() => {
    set("Filter", filter);
  }, [filter]);

  useEffect(() => {
    set("Mode", mode);
  }, [mode]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        dispatch,
        addTodo,
        removeTodo,
        toggleTodo,
        removeCompleted,
        sortTodos,
        filter,
        setFilter,
        mode,
        setMode,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
