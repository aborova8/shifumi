/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({ score, myChoice, setScore, botScore, setBotScore }) => {
  const [bot, setBot] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const [counter, setCounter] = useState(3);

  const newBotPick = () => {
    const choices = ["rock", "paper", "scissors"];
    setBot(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newBotPick();
  }, []);

  const Result = () => {
    if (myChoice === "rock" && bot === "scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "rock" && bot === "paper") {
      setPlayerWin("lose");
      setBotScore(botScore + 1);
    } else if (myChoice === "scissors" && bot === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "scissors" && bot === "rock") {
      setPlayerWin("lose");
      setBotScore(botScore + 1);
    } else if (myChoice === "paper" && bot === "rock") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "paper" && bot === "scissors") {
      setPlayerWin("lose");
      setBotScore(botScore + 1);
    } else {
      setPlayerWin("draw");
    }
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : Result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, bot]);

  const renderPlayAgain = (label) => (
    <div className="game__play">
      <span className="text">{label}</span>
      <Link to="/" className="play-again" onClick={() => setBot()}>
        Play Again
      </Link>
    </div>
  );

  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You Picked</span>
        <div
          className={`icon icon--${myChoice} ${
            playerWin === "win" ? `icon icon--${myChoice}--winner` : ""
          }`}
        ></div>
      </div>
      {playerWin === "win" && renderPlayAgain("You Win")}
      {playerWin === "lose" && renderPlayAgain("You Lose")}
      {playerWin === "draw" && renderPlayAgain("Draw")}
      <div className="game__bot">
        <span className="text">The Bot Picked</span>
        {counter === 0 ? (
          <div
            className={`icon icon--${bot} ${
              playerWin === "lose" ? `icon icon--${bot}--winner` : ""
            }`}
          ></div>
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
    </div>
  );
};

export default Game;
