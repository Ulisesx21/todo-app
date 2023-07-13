import { useRef } from "react";
import { useTodos } from "../../hooks/useTodos";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const { todos, sortTodos } = useTodos();

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  return (
    <ul className="list-container">
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          key={index}
          draggable
          onDragStart={() => (dragItem.current = index)}
          onDragEnter={() => (dragOverItem.current = index)}
          onDragEnd={() => sortTodos(dragItem.current, dragOverItem.current)}
          onDragOver={(e) => e.preventDefault()}
        />
      ))}
    </ul>
  );
};

export default TodoList;
