import React from 'react';
import "../styles/todoFilter.css"

const Filter = ({ filter, clear, todo, filterType }) => {

    return (
        <div className='filtercontainer'>
            <h5 className='items-left'>{todo.length} item{`${todo.length === 1 ? "" : "s"}`} left</h5>
            <div style={{display: "flex", justifyContent: "center"}}>
                <h5 className={`filter ${filterType === "all" && "selected"} `} onClick={()=>filter("all")} >All</h5>
                <h5 className={`filter ${filterType === "active" && "selected"} `} onClick={()=>filter("active")} >Active</h5>
                <h5 className={`filter ${filterType === "complete" && "selected"} `} onClick={()=>filter("complete")} >Completed</h5>
            </div>
            <h5 className='clear-complete' onClick={()=>clear()} >Clear Completed</h5>
        </div>
    );
}

export default Filter;
