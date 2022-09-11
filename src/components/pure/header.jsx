import React from 'react';
import imgLight from "../images/bg-desktop-light.jpg"
import imgDark from "../images/bg-desktop-dark.jpg"

const Header = ({ mode }) => {
    return (
        <div style={{height: "4vh", width: "100%"}}>
            <img src={mode ? imgDark : imgLight} alt="imgDark-imgLight" style={{width: "100%", height: "300px"}}></img>
        </div>
    );
}

export default Header;
