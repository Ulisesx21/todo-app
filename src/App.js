import { useState } from 'react';
import './App.css';
import Todolist from './components/container/todolist';
import Header from './components/pure/header';

function App() {
  const [mode, setMode] = useState(false)
  return (
    <div className={`App ${mode && "D-app"}`}>
      <Header mode={mode}></Header>
      <Todolist changeModeApp={(mode)=>setMode(!mode)}></Todolist>
    </div>
  );
}

export default App;
