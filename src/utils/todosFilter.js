export const todosFilter = (todos, filter) => {
  return todos.filter((todo) => {
    switch (filter) {
      case "All":
        return true;

      case "Completed":
        return todo.completed;

      case "Active":
        return !todo.completed;

      default:
        return todo;
    }
  });
};
