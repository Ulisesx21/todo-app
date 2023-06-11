import iconCross from "../assets/icons/icon-cross.svg";
import iconCheck from "../assets/icons/icon-check.svg";
import "../styles/todo.css";
import { useTodos } from "../hooks/useTodos";

const TodoItem = ({ todo, ...props }) => {
  const { toggleTodo, removeTodo, mode } = useTodos();

  function todoComplete() {
    if (todo.completed) {
      return (
        <div className="check" onClick={() => toggleTodo(todo.id)}>
          <img src={iconCheck} alt="check" className="img-check"></img>
        </div>
      );
    } else {
      return (
        <div
          className={`uncheck ${mode && "uncheck-D"}`}
          onClick={() => toggleTodo(todo.id)}
        >
          <div className={`uncheck-inside ${mode && "uncheck-inside-D"}`}></div>
        </div>
      );
    }
  }

  return (
    <div className={`todocontainer ${mode && "D"}`} {...props}>
      {todoComplete(toggleTodo)}
      {todo.completed ? (
        <h4 className={`complete ${mode && "c-D"}`}>{todo.description}</h4>
      ) : (
        <h4 className={`incomplete ${mode && "incomplete-D"}`}>
          {todo.description}
        </h4>
      )}
      <img
        src={iconCross}
        alt="cross"
        onClick={() => removeTodo(todo.id)}
        className="cross"
      ></img>
    </div>
  );
};

export default TodoItem;
