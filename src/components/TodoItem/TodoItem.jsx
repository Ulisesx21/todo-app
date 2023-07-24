import iconCross from "../../assets/icons/icon-cross.svg";
import iconCheck from "../../assets/icons/icon-check.svg";
import { useTodos } from "../../hooks/useTodos";
import { useTheme } from "../../hooks/useTheme";
import "./TodoItem.css";

const TodoItem = ({ todo, provided, snapshot, destinationIdx }) => {
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
    <li
      className={`todocontainer ${isDark && "D"} ${
        (snapshot.isDragging && destinationIdx === 0) && "todocontainer-drag"
      }`}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
    >
      <div className="check-description-container">
        {todoComplete(toggleTodo)}
        {todo.completed ? (
          <p className={`complete ${isDark && "c-D"}`}>{todo.description}</p>
        ) : (
          <p className={`incomplete ${isDark && "incomplete-D"}`}>
            {todo.description}
          </p>
        )}
      </div>
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
