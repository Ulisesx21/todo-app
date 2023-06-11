import { useRef } from "react";
import "../styles/todoForm.css";
import { useTodos } from "../hooks/useTodos";


const TodoForm = () => {
  const { addTodo, mode } = useTodos();

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { value } = inputRef.current;
    if (value.length <= 40 && value !== "") {
      addTodo(value);
    }
    inputRef.current.value = "";
  };

  return (
    <div style={{ margin: "20px 0" }} className="form-container">
      <form onSubmit={handleSubmit} className={`form ${mode && "D-form"}`}>
        <div className={`uncheckform ${mode && "D-uncheck"}`}></div>
        <input
          ref={inputRef}
          className={`inputform ${mode && "D-form"}`}
          placeholder="Create a new todo..."
        ></input>
      </form>
    </div>
  );
};

export default TodoForm;
