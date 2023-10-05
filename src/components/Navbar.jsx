import { navItemsArray } from "../navItems";
import { BsSun } from "react-icons/bs";
import { LuMoonStar } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import "./navStyles.css";
import { useEffect, useRef, useState } from "react";
import TransitionEffect from "./TransitionEffect";

const Navbar = ({ sticky, darkMode, dispatch, refArray }) => {
  const styles = { color: "#fff", backgroundColor: "#212121" };
  const [navbar, setNavbar] = useState(false);
  const [animate, setAnimate] = useState(false);

  //settimeout if it renders with animate true
  //use effect hook to clear the timeout timer for each render
  useEffect(() => {
    const id = setTimeout(() => {
      setAnimate(false);
      console.log(animate);
    }, 2900);

    return () => clearTimeout(id);
  }, [animate]);

  //adding animation on view using ref and useEffect
  const navRef = useRef(null);

  function handleDarkModeClick() {
    dispatch({ type: "toggleDarkMode" });
    setAnimate(true);
  }

  function handleScrollClick(e) {
    const val = e.target.innerText;

    switch (val) {
      case "Home":
        setNavbar(false);
        setAnimate(true);
        dispatch({ type: "disableScroll", payload: false });
        setTimeout(() => {
          refArray[0].current?.scrollIntoView({ behavior: "smooth" });
        }, 1900);
        break;
      case "About":
        setNavbar(false);
        dispatch({ type: "disableScroll", payload: false });
        setAnimate(true);
        setTimeout(() => {
          refArray[1].current?.scrollIntoView({ behavior: "smooth" });
        }, 1900);
        break;
      case "Skills":
        setNavbar(false);
        dispatch({ type: "disableScroll", payload: false });
        setAnimate(true);
        setTimeout(() => {
          refArray[2].current?.scrollIntoView({ behavior: "smooth" });
        }, 1900);
        break;
      case "Projects":
        setNavbar(false);
        dispatch({ type: "disableScroll", payload: false });
        setAnimate(true);
        setTimeout(() => {
          refArray[3].current?.scrollIntoView({ behavior: "smooth" });
        }, 1900);
        break;
      case "Contact Me":
        setNavbar(false);
        setAnimate(true);
        dispatch({ type: "disableScroll", payload: false });
        setTimeout(() => {
          refArray[4].current?.scrollIntoView({ behavior: "smooth" });
        }, 1900);
        break;
      default:
        return new Error("Unknown Click!");
    }
  }

  return (
    <header>
      <TransitionEffect animate={animate} />
      <div
        className={`container__header ${sticky ? "sticky-header" : ""}`}
        style={darkMode ? styles : {}}
      >
        <p className="logo">{`<AB />`}</p>
        <nav
          className={`navbar ${
            navbar ? (darkMode ? "navbar-active-dark" : "navbar-active") : ""
          }`}
        >
          <ul className="navlinks" ref={navRef}>
            {navItemsArray.map((item, index) => {
              return (
                <li key={index}>
                  <button
                    className={`link ${sticky ? "sticky-link" : ""}`}
                    style={
                      darkMode
                        ? {
                            ...styles,
                            animationDelay: `${(index + 1) * 0.2}s`,
                          }
                        : {
                            animationDelay: `${(index + 1) * 0.1}s`,
                            transition: "3.5s",
                          }
                    }
                    onClick={handleScrollClick}
                  >
                    {item.text}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        <button className="dark-mode-btn" onClick={handleDarkModeClick}>
          {darkMode ? (
            <LuMoonStar
              className={`dark-mode ${sticky ? "sticky-dark-mode" : ""}`}
              style={darkMode ? styles : {}}
            />
          ) : (
            <BsSun
              className={`dark-mode ${sticky ? "sticky-dark-mode" : ""}`}
            />
          )}
        </button>

        <div className="container__hamburger">
          {!navbar && (
            <button
              className="ham-btn open"
              onClick={() => {
                setNavbar(true);
                setTimeout(() => {
                  dispatch({ type: "disableScroll", payload: true });
                }, 400);
              }}
            >
              <RxHamburgerMenu
                className="ham-btn-icon"
                style={sticky || darkMode ? { color: "#fff" } : {}}
              />
            </button>
          )}
          {navbar && (
            <button
              className="ham-btn close"
              onClick={() => {
                setNavbar(false);
                dispatch({ type: "disableScroll", payload: false });
              }}
            >
              <CgClose
                className="ham-btn-icon"
                style={sticky || darkMode ? { color: "#fff" } : {}}
              />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
