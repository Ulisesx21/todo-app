import { useRef } from "react";
import { useTodos } from "../hooks/useTodos";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoMode from "./TodoMode";
import TodoItem from "./TodoItem";
import "../styles/todoList.css";


const TodoList = () => {
  const { todosState, sortTodos } = useTodos();

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  return (
    <div className="todoscontainer">
      <TodoMode />
      <TodoForm />
      {todosState.map((todo, index) => (
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
      <TodoFilter />
    </div>
  );
};

export default TodoList;
