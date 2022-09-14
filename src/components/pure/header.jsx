import React from 'react';
import imgLight from "../images/bg-desktop-light.jpg"
import imgDark from "../images/bg-desktop-dark.jpg"
import imgLightMobile from "../images/bg-mobile-light.jpg"
import imgDarkMobile from "../images/bg-mobile-dark.jpg"
import "../styles/header.css"

const Header = ({ mode }) => {
    return (
        <div style={{height: "4vh", width: "100%"}}>
            <img src={mode ? imgDark : imgLight} alt="imgDark-imgLight" className="img-change-max"></img>
            <img src={mode ? imgDarkMobile : imgLightMobile} alt="imgDark-imgLight" className="img-change-min"></img>
        </div>
    );
}

export default Header;
