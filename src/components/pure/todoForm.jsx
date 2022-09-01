import React, { useRef } from 'react';
import "../styles/todoForm.css"

const TodoForm = ({ create }) => {

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
        <div style={{margin: "20px 0"}}>
            <form onSubmit={addTodo} className="form">
                <div className='uncheckform'></div>
                <input ref={inputRef} className="inputform" placeholder='Create a new todo...'></input>
            </form>
        </div>
    );
}

export default TodoForm;
