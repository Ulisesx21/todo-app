import React, { useRef } from 'react';
import "../styles/todoForm.css"

const TodoForm = ({ create, mode }) => {

    const inputRef = useRef()

    function addTodo(e){
        e.preventDefault()
        let inputValue = inputRef.current.value

        let todo = {
                    complete: false,
                    description: inputValue
                    }

        if(inputValue.length <= 40 && inputValue !== ""){
            create(todo)
        }else{
            
        }
        inputRef.current.value = ""
    }

    return (
        <div style={{margin: "20px 0"}} className="form-container">
            <form onSubmit={addTodo} className={`form ${mode && "D-form"}`}>
                <div className={`uncheckform ${mode && "D-uncheck"}`}></div>
                <input ref={inputRef} className={`inputform ${mode && "D-form"}`} placeholder='Create a new todo...'></input>
            </form>
        </div>
    );
}

export default TodoForm;
