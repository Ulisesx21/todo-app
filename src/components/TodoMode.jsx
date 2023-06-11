import Moon from "../assets/icons/icon-moon.svg";
import Sun from "../assets/icons/icon-sun.svg";
import "../styles/todoMode.css";
import { useTodos } from "../hooks/useTodos";

const TodoMode = () => {

  const { mode, setMode } = useTodos();

  return (
    <div className="todo-mode-container">
      <h1 className="mode-title">T O D O</h1>
      <img
        src={mode ? Sun : Moon}
        alt="Sun-Moon"
        className="moon"
        onClick={() => setMode(!mode)}
      ></img>
    </div>
  );
};

export default TodoMode;
