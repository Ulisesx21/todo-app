import Moon from "../../assets/icons/icon-moon.svg";
import Sun from "../../assets/icons/icon-sun.svg";
import { useTheme } from "../../hooks/useTheme";
import "./TodoMode.css";

const TodoMode = () => {

  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="todo-mode-container">
      <h1 className="mode-title">T O D O</h1>
      <img
        src={isDark ? Sun : Moon}
        alt="Sun-Moon"
        className="moon"
        onClick={() => toggleTheme()}
      ></img>
    </div>
  );
};

export default TodoMode;
