import React from "react";

const HeaderBox = ({ score, label }) => (
  <div className="header">
    <div className="text">
      <span>Rock</span>
      <span>Paper</span>
      <span>Scissors</span>
    </div>
    <div className="score-box">
      <span>{label}</span>
      <div className="score-box__score">{score}</div>
    </div>
  </div>
);

const Header = ({ score, botScore }) => {
  return (
    <div className="header-wrapper">
      <HeaderBox score={score} label="Your Score" />
      <HeaderBox score={botScore} label="Bot Score" />
    </div>
  );
};

export default Header;
