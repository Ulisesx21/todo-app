import React from 'react';
import Moon from "../icons/icon-moon.svg"
import Sun from "../icons/icon-sun.svg"
import "../styles/todoMode.css"

const TodoMode = ({ changeMode, mode }) => {
    return (
        <div className='todo-mode-container'>
            <h1 className='mode-title'>T  O  D  O</h1>
            <img src={mode ? Sun : Moon} alt="asd" className='moon' onClick={()=> changeMode()}></img>
        </div>
    );
}

export default TodoMode;
