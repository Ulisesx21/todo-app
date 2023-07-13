import Header from "./common/Header/Header";
import { useTheme } from "./hooks/useTheme";
import { Home } from "./pages/Home/Home";
import "./App.css";


function App() {
  
  const { isDark } = useTheme();

  return (
    <div className={`App ${isDark && "D-app"}`}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
