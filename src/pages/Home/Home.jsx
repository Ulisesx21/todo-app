import TodoFilter from "../../components/TodoFilter/TodoFilter";
import TodoList from "../../components/TodoList/TodoList";
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoMode from "../../components/TodoMode/TodoMode";
import "./Home.css"

export const Home = () => {
  return (
    <main className="todoscontainer">
      <TodoMode />
      <TodoForm />
      <TodoList />
      <TodoFilter />
    </main>
  );
};
