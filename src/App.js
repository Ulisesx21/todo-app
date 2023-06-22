import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { useTheme } from "./context/ThemeContext";

function App() {
  
  const { isDark } = useTheme();

  return (
    <div className={`App ${isDark && "D-app"}`}>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
