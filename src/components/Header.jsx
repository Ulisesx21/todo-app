import imgLight from "../assets/images/bg-desktop-light.jpg";
import imgDark from "../assets/images/bg-desktop-dark.jpg";
import imgLightMobile from "../assets/images/bg-mobile-light.jpg";
import imgDarkMobile from "../assets/images/bg-mobile-dark.jpg";
import "../styles/header.css";
import { useTodos } from "../hooks/useTodos";


const Header = () => {

  const { mode } = useTodos();

  return (
    <div style={{ height: "4vh", width: "100%" }}>
      <img
        src={mode ? imgDark : imgLight}
        alt="imgDark-imgLight"
        className="img-change-max"
      ></img>
      <img
        src={mode ? imgDarkMobile : imgLightMobile}
        alt="imgDark-imgLight"
        className="img-change-min"
      ></img>
    </div>
  );
};

export default Header;
