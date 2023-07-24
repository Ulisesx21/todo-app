import { useRef } from "react";
import { useTodos } from "../../hooks/useTodos";
import { useTheme } from "../../hooks/useTheme";
import "./TodoForm.css";

const TodoForm = () => {
  const { addTodo } = useTodos();
  const { isDark } = useTheme();

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { value } = inputRef.current;

    if (!value.includes(" ") && value.length <= 25) {
      e.currentTarget[0].value = "";
      addTodo(value);
      return;
    }

    if (value.length <= 40 && value !== "") {
      addTodo(value);
    }

    e.currentTarget[0].value = "";
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className={`form ${isDark && "D-form"}`}>
        <div className={`uncheckform ${isDark && "D-uncheck"}`}></div>
        <input
          ref={inputRef}
          className={`inputform ${isDark && "D-form"}`}
          placeholder="Create a new todo..."
        ></input>
      </form>
    </div>
  );
};

export default TodoForm;
