export const todoReducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return [
        ...state,
        { id: Math.random(), description: action.payload, completed: false },
      ];

    case "removeTodo":
      return state.filter((todo) => todo.id !== action.payload);

    case "toggleTodo":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo = { ...todo };
          todo.completed = !todo.completed;
        }
        return todo;
      });

    case "removeCompleted":
      return state.filter((todo) => todo.completed !== true);

    case "sortTodos":
      const { drag, over } = action.payload;
      const todos = [...state];
      const dragItem = todos.splice(drag, 1)[0];
      todos.splice(over, 0, dragItem);
      return todos;

    default:
      return state;
  }
};
