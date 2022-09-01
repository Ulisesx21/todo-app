import React from 'react';
import Moon from "../icons/icon-moon.svg"
import "../styles/todoMode.css"

const TodoMode = () => {
    return (
        <div className='todo-mode-container'>
            <h1 className='mode-title'>T  O  D  O</h1>
            <img src={Moon} alt="asd" className='moon'></img>
        </div>
    );
}

export default TodoMode;
