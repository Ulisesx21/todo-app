import React from 'react';
import "../styles/todoFilter.css"

const Filter = ({ filter, clear, todo, filterType, mode }) => {

    return (
        <>
        <div className={`filtercontainer ${mode && "D-filter"}`}>
            <h5 className='items-left'>{todo.length} item{`${todo.length === 1 ? "" : "s"}`} left</h5>
            <div style={{display: "flex", justifyContent: "center"}}>
                <h5 className={`filter ${filterType === "all" && "selected"} ${mode && "filter-D"}`} onClick={()=>filter("all")} >All</h5>
                <h5 className={`filter ${filterType === "active" && "selected"} ${mode && "filter-D"}`} onClick={()=>filter("active")} >Active</h5>
                <h5 className={`filter ${filterType === "complete" && "selected"} ${mode && "filter-D"}`} onClick={()=>filter("complete")} >Completed</h5>
            </div>
            <h5 className={`${mode ? "clear-complete-D" : "clear-complete"}`} onClick={()=>clear()} >Clear Completed</h5>
        </div>
            <div className='dndAdvise'>Drag and drop to reorder list</div>
        </>
    );
}

export default Filter;
