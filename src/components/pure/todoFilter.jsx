import React from 'react';

const Filter = ({ filter, clear, todo }) => {
    return (
        <div style={{display: "flex", justifyContent: "space-between", width: "400px"}}>
            <h5>{todo.length} items left</h5>
            <div style={{display: "flex", justifyContent: "center"}}>
                <h5 onClick={()=>filter("all")} >All-</h5>
                <h5 onClick={()=>filter("active")} >Active-</h5>
                <h5 onClick={()=>filter("complete")}>Completed</h5>
            </div>
            <h5 onClick={()=>clear()}>Clear Completed</h5>
        </div>
    );
}

export default Filter;
