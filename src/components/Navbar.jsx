import { navItemsArray } from "../navItems";
import { BsSun } from "react-icons/bs";
import { LuMoonStar } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import "./navStyles.css";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ sticky, darkMode, dispatch }) => {
  const styles = { color: "#fff", backgroundColor: "#212121" };
  const [navbar, setNavbar] = useState(false);

  //adding animation on view using ref and useEffect
  const navRef = useRef(null);
  // const btnRef = useRef([]);

  useEffect(() => {
    // btnRef.current = btnRef.current.slice(0, navItemsArray.length);
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       console.log(btnRef.current);
    //       return;
    //     }
    //   });
    // });
    // observer.observe(navRef.current);
  }, []);

  return (
    <div
      className={`container__header ${sticky ? "sticky-header" : ""}`}
      style={darkMode ? styles : {}}
    >
      <p className="logo">{`<AB />`}</p>
      <nav className={`navbar ${navbar ? "navbar-active" : ""}`}>
        <ul className="navlinks" ref={navRef}>
          {navItemsArray.map((item, index) => {
            return (
              <li key={index}>
                <button
                  className={`link ${sticky ? "sticky-link" : ""}`}
                  style={
                    darkMode
                      ? { ...styles, animationDelay: `${(index + 1) * 0.2}s` }
                      : { animationDelay: `${(index + 1) * 0.1}s` }
                  }
                >
                  {item.text}
                  <hr />
                </button>
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
        {!navbar && (
          <button
            className="ham-btn open"
            onClick={() => {
              setNavbar(true);
              console.log("open");
            }}
          >
            <RxHamburgerMenu
              className="ham-btn-icon"
              style={sticky || darkMode ? { color: "#fff" } : {}}
            />
          </button>
        )}
        {navbar && (
          <button className="ham-btn close" onClick={() => setNavbar(false)}>
            <CgClose className="ham-btn-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
