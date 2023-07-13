import iconCross from "../../assets/icons/icon-cross.svg";
import iconCheck from "../../assets/icons/icon-check.svg";
import { useTodos } from "../../hooks/useTodos";
import { useTheme } from "../../hooks/useTheme";
import "./TodoItem.css";

const TodoItem = ({ todo, ...props }) => {

  const { toggleTodo, removeTodo } = useTodos();
  const { isDark } = useTheme();

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
          className={`uncheck ${isDark && "uncheck-D"}`}
          onClick={() => toggleTodo(todo.id)}
        >
          <div
            className={`uncheck-inside ${isDark && "uncheck-inside-D"}`}
          ></div>
        </div>
      );
    }
  }

  return (
    <li className={`todocontainer ${isDark && "D"}`} {...props}>
      {todoComplete(toggleTodo)}
      {todo.completed ? (
        <h4 className={`complete ${isDark && "c-D"}`}>{todo.description}</h4>
      ) : (
        <h4 className={`incomplete ${isDark && "incomplete-D"}`}>
          {todo.description}
        </h4>
      )}
      <img
        src={iconCross}
        alt="cross"
        onClick={() => removeTodo(todo.id)}
        className="cross"
      ></img>
    </li>
  );
};

export default TodoItem;
