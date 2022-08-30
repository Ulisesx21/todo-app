import React, { useRef } from 'react';

const TodoForm = ({ create }) => {

    const inputRef = useRef()

    function addTodo(e){
        e.preventDefault()
        let todo = {
                    complete: false,
                    description: inputRef.current.value
                    }
        create(todo)
        inputRef.current.value = ""
    }

    return (
        <div style={{margin: "20px"}}>
            <form onSubmit={addTodo}>
                <input ref={inputRef}></input>
            </form>
        </div>
    );
}

export default TodoForm;
