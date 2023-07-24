import { ActionTypes } from "../models/actionTypes.enum";
import { Todo } from "../models/todo.class";
import { ramdomId } from "../utils/ramdomId";

export const todosReducer = (state, action) => {
  const { type, payload } = action;
  const { id, description, drag, over } = payload;

  switch (type) {
    case ActionTypes.ADD_TODO:
      const newTodo = new Todo(ramdomId(), description);
      return [...state, newTodo];

    case ActionTypes.REMOVE_TODO:
      return state.filter((todo) => todo.id !== id);

    case ActionTypes.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

    case ActionTypes.REMOVE_COMPLETED:
      return state.filter((todo) => todo.completed !== true);

    case ActionTypes.SORT_TODOS:
      const todos = [...state];
      const dragItem = todos.splice(drag, 1)[0];
      todos.splice(over, 0, dragItem);
      return todos;

    default:
      return state;
  }
};
