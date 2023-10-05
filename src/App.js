import { useEffect, useReducer, useRef } from "react";
import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

//let's use useReducer instead of useState
const initialState = {
  sticky: false,
  darkMode: false,
  inview: false,
  scrlDisable: false,
  animate: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "setSticky":
      return { ...state, sticky: action.payload };
    case "toggleDarkMode":
      return { ...state, darkMode: state.darkMode ? false : true };
    case "inView":
      return { ...state, inview: action.payload };
    case "disableScroll":
      return { ...state, scrlDisable: action.payload };
    case "transitionAnimation":
      return { ...state, animate: action.payload };
    default:
      return state;
  }
}

function App() {
  const [{ sticky, darkMode, inview, scrlDisable }, dispatch] = useReducer(
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

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  //push all refs into an array
  const refArray = [heroRef, aboutRef, skillsRef, projectsRef, contactRef];

  return (
    <div className={`App ${scrlDisable ? "scroll-disable" : ""}`}>
      <Navbar
        darkMode={darkMode}
        sticky={sticky}
        dispatch={dispatch}
        refArray={refArray}
      />
      <HeroSection
        darkMode={darkMode}
        sticky={sticky}
        dispatch={dispatch}
        heroRef={heroRef}
        refArray={refArray}
      />
      <About darkMode={darkMode} aboutRef={aboutRef} />
      <Skills
        graphRef={graphRef}
        inview={inview}
        darkMode={darkMode}
        skillsRef={skillsRef}
      />
      <Projects darkMode={darkMode} projectsRef={projectsRef} />
      <ContactMe darkMode={darkMode} contactRef={contactRef} />
    </div>
  );
}

export default App;
