import React from 'react';
import iconCross from "../icons/icon-cross.svg"
import iconCheck from "../icons/icon-check.svg"
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
        <div className='todocontainer'>
            {todoComplete()}
            {todo.complete ? 
                <h4 style={{textDecoration: "line-through", color: "hsl(236, 9%, 61%)", fontWeight: "400", fontSize: "1.1rem"}}>{todo.description}</h4> 
                : 
                <h4 style={{fontWeight: "400", fontSize: "1.1rem", color: "hsl(235, 19%, 35%)"}}>{todo.description}</h4>
            }
            <img src={iconCross} alt="asd" onClick={()=>remove(todo)} style={{cursor: "pointer"}}></img>
        </div>
    );
}

export default Todo;
