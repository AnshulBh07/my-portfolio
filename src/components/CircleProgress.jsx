import { useContext, useEffect, useRef } from "react";
import "./circleProgress.css";
import { PortfolioContext } from "../App";

const CircleProgress = ({ name, prof }) => {
  const { inview, darkMode } = useContext(PortfolioContext);
  //again using ref to store the element and then to add increasing bar effect we use useEffect
  //to change the css property at every given interval

  const circleRef = useRef(null);
  const percent = useRef(null);

  let start = 0;

  useEffect(() => {
    //side effect
    const progress_circle =
      inview &&
      setInterval(() => {
        circleRef.current.style.background = `conic-gradient(#ff613e ${start}%, rgb(241, 241, 241) 0deg)`;
        percent.current.innerText = start + "%";
        start = start + 1;

        if (start === prof) {
          clearInterval(progress_circle);
        }
      }, 9);

    if (!inview) clearInterval(progress_circle);
    //cleanup function
    return () => clearInterval(progress_circle);
  }, [prof, inview, start]);

  return (
    <div className="container__circle">
      <div className="span__container">
        <div
          className="base"
          ref={percent}
          style={
            darkMode ? { color: "#d5d5d5", backgroundColor: "#212121" } : {}
          }
        ></div>
      </div>
      <div className="circle__progress" ref={circleRef}></div>

      <span
        className="progress__title"
        style={darkMode ? { color: "#d5d5d5" } : {}}
      >
        {name}
      </span>
    </div>
  );
};

export default CircleProgress;
