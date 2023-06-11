import { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { TodoContext } from "./context/TodoContext";

function App() {
  const { mode } = useContext(TodoContext);

  return (
    <div className={`App ${mode && "D-app"}`}>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
