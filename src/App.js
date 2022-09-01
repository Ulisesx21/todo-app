
import './App.css';
import Todolist from './components/container/todolist';
import Header from './components/pure/header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
