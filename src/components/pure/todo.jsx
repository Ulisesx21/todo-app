import React from 'react';
import iconCross from "../../icons/icon-cross.svg"
import iconCheck from "../../icons/icon-check.svg"
import "../../styles/todo.css"

const Todo = ({ todo, remove, complete, mode, ...props }) => {

    function todoComplete(){
        if(todo.complete){
            return(<div className='check' onClick={() => complete(todo)}><img src={iconCheck} alt="check" className='img-check'></img></div>)
        }else{
            return(<div className={`uncheck ${mode && "uncheck-D"}`} onClick={() => complete(todo)}><div className={`uncheck-inside ${mode && "uncheck-inside-D"}`}></div></div>)
        }
    }

    return (
        <div className={`todocontainer ${mode && "D"}`} {...props}>
            {todoComplete()}
            {todo.complete ? 
                <h4 className={`complete ${mode && "c-D"}`}>{todo.description}</h4> 
                : 
                <h4 className={`incomplete ${mode && "incomplete-D"}`}>{todo.description}</h4>
            }
            <img src={iconCross} alt="cross" onClick={()=>remove(todo)} className="cross"></img>
        </div>
    );
}

export default Todo;
