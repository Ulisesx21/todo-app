import React from 'react';
import iconCross from "./icon-cross.svg"
import iconCheck from "./icon-check.svg"
import "../styles/todo.css"

const Todo = ({ todo, remove, complete }) => {

    function todoComplete(){
        if(todo.complete){
            return(<div className='check' onClick={() => complete(todo)}><img src={iconCheck} alt="check"></img></div>)
        }else{
            return(<div className='uncheck' onClick={() => complete(todo)}></div>)
        }
    }

    return (
        <div style={{width: "450px", background: "#eee", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid white", borderRadius: "5px", padding: "0 25px"}}>
            {todoComplete()}
            {todo.complete ? <h4 style={{textDecoration: "line-through", color: "#bbb"}}>{todo.description}</h4> : <h4>{todo.description}</h4>}
            <img src={iconCross} alt="asd" onClick={()=>remove(todo)} style={{cursor: "pointer"}}></img>
        </div>
    );
}

export default Todo;
