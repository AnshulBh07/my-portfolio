import { useEffect, useReducer, useRef } from "react";
import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";
import TransitionEffect from "./components/TransitionEffect";
import Projects from "./components/Projects";

//let's use useReducer instead of useState
const initialState = {
  sticky: false,
  darkMode: false,
  inview: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "setSticky":
      return { ...state, sticky: action.payload };
    case "toggleDarkMode":
      return { ...state, darkMode: state.darkMode ? false : true };
    case "inView":
      return { ...state, inview: action.payload };
    default:
      return state;
  }
}

function App() {
  const [{ sticky, darkMode, inview }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function handleScroll() {
    if (window.scrollY > 0) dispatch({ type: "setSticky", payload: true });

    if (window.scrollY === 0) dispatch({ type: "setSticky", payload: false });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // effect to animate element when it falls into view
  //store the component in a ref
  const graphRef = useRef(null);

  useEffect(() => {
    // entries is an array that contains the elements that we told observer to observe
    const observer = new IntersectionObserver((entries) => {
      //loop over the entries
      entries.forEach((entry) => {
        //if the element is visible set the animation/inview to true
        if (entry.isIntersecting) {
          dispatch({ type: "inView", payload: true });
          return; //return from function
        }

        //if it goes out of view
        dispatch({ type: "inView", payload: false });
      });
    });

    //observe the dom element stored in this ref
    observer.observe(graphRef.current);
  }, [inview]);

  return (
    <div className="App">
      {/* <TransitionEffect /> */}
      <header>
        <Navbar sticky={sticky} darkMode={darkMode} dispatch={dispatch} />
      </header>
      <HeroSection darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills graphRef={graphRef} inview={inview} darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <footer>
        <ContactMe darkMode={darkMode} />
      </footer>
    </div>
  );
}

export default App;
