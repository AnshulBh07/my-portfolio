import "./transitionStyles.css";

const TransitionEffect = ({ animate }) => {
  return (
    <div className="cards">
      <div className={`card-1 ${animate ? "card1animate" : ""}`}></div>
      <div className={`card-2 ${animate ? "card2animate" : ""}`}></div>
      <div className={`card-3 ${animate ? "card3animate" : ""}`}></div>
    </div>
  );
};

export default TransitionEffect;
