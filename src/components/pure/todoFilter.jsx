import React from 'react';

const Filter = ({ filter }) => {
    return (
        <div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <h5 onClick={()=>filter("all")} >All-</h5>
                <h5 onClick={()=>filter("active")} >Active-</h5>
                <h5 onClick={()=>filter("complete")}>Completed</h5>
            </div>
        </div>
    );
}

export default Filter;
