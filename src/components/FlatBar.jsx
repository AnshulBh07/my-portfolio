import { useEffect, useRef } from "react";
import "./flatBarStyles.css";

const FlatBar = ({ icon, width, inview }) => {
  //hold the bar base in a ref
  const barRef = useRef(null);
  //   we will use useRef because it doesn't cause rendering of component again
  const progressRef = useRef(null);
  let progressVal = 0;

  //code for progress increase animation
  useEffect(() => {
    //side effect, only executed when component is in view
    const progress =
      inview &&
      setInterval(() => {
        progressVal++;

        progressRef.current.innerText = progressVal + "%";

        if (progressVal === width) {
          clearInterval(progress);
        }
      }, 8);

    //cleanup function for when the component unmounts
    return () => clearInterval(progress);
  }, [width, progressVal, inview]);

  return (
    <div className="container__flatbar">
      <img src={icon} alt="icon" className="bar-skill-icon" />
      <div className="bar">
        <div
          className="bar-base"
          style={{ width: `${inview ? width : 0}%` }}
          ref={barRef}
        >
          <div className={`${inview ? "bar-final" : ""}`}>
            <span ref={progressRef}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatBar;
