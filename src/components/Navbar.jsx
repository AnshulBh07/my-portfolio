import { navItemsArray } from "../navItems";
import { BsSun } from "react-icons/bs";
import { LuMoonStar } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import "./navStyles.css";

const Navbar = ({ sticky, darkMode, dispatch }) => {
  const styles = { color: "#fff" };

  return (
    <div
      className={`container__header ${sticky ? "sticky-header" : ""}`}
      style={darkMode ? styles : {}}
    >
      <p className="logo">{`<AB />`}</p>
      <nav className="navbar">
        <ul className="navlinks">
          {navItemsArray.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href={`${item.link}`}
                  className={`link ${sticky ? "sticky-link" : ""}`}
                  style={darkMode ? styles : {}}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <button
        className="dark-mode-btn"
        onClick={() => dispatch({ type: "toggleDarkMode" })}
      >
        {darkMode ? (
          <LuMoonStar
            className={`dark-mode ${sticky ? "sticky-dark-mode" : ""}`}
            style={darkMode ? styles : {}}
          />
        ) : (
          <BsSun className={`dark-mode ${sticky ? "sticky-dark-mode" : ""}`} />
        )}
      </button>

      <div className="container__hamburger">
        <button className="ham-btn open">
          <RxHamburgerMenu className="ham-btn-icon" />
        </button>
        <button className="ham-btn close">
          <CgClose className="ham-btn-icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
