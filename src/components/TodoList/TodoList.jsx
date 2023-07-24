import { useRef } from "react";
import { useTodos } from "../../hooks/useTodos";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
// This is because a problem with React.StrictMode
import { StrictModeDroppable } from "../StrictModeDroppable";

const TodoList = () => {
  const destinationIdx = useRef();
  const { todos, sortTodos } = useTodos();

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }

    sortTodos(source.index, destination.index);
  };

  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
      onDragUpdate={(e) => {
        if (e.destination) {
          destinationIdx.current = e.destination.index;
        }
      }}
    >
      <StrictModeDroppable droppableId="todos">
        {(droppableProvided) => (
          <ul
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className="list-container"
          >
            {todos.map((todo, index) => (
              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                  <TodoItem
                    provided={draggableProvided}
                    snapshot={draggableSnapshot}
                    todo={todo}
                    destinationIdx={destinationIdx.current}
                  />
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </ul>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
};

export default TodoList;
