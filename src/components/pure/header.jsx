import React from 'react';
import img from "../images/bg-desktop-light.jpg"

const Header = () => {
    return (
        <div style={{height: "5vh", width: "100%"}}>
            <img src={img} alt="asd" style={{width: "100%"}}></img>
        </div>
    );
}

export default Header;
