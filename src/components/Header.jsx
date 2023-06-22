import imgLight from "../assets/images/bg-desktop-light.jpg";
import imgDark from "../assets/images/bg-desktop-dark.jpg";
import imgLightMobile from "../assets/images/bg-mobile-light.jpg";
import imgDarkMobile from "../assets/images/bg-mobile-dark.jpg";
import { useTheme } from "../context/ThemeContext";
import "../styles/header.css";


const Header = () => {

  const { isDark } = useTheme();

  return (
    <div style={{ height: "4vh", width: "100%" }}>
      <img
        src={ isDark ? imgDark : imgLight}
        alt="imgDark-imgLight"
        className="img-change-max"
      ></img>
      <img
        src={ isDark ? imgDarkMobile : imgLightMobile }
        alt="imgDark-imgLight"
        className="img-change-min"
      ></img>
    </div>
  );
};

export default Header;
