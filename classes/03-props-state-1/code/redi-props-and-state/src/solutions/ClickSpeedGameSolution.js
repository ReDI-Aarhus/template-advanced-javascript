import React, { useState } from "react";

export const ClickSpeedGameSolution = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [bestScore, setBestScore] = useState(
    Number(localStorage.getItem("bestScore")) || 0
  );
  const [gameState, setGameState] = useState("idle"); // "idle" | "running" | "finished"
  const [timer, setTimer] = useState(null); // Store the timer ID in state

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setGameState("running");

    if (timer) clearInterval(timer); // Clear existing timer

    const newTimer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(newTimer);
          setTimer(null);
          setTimeout(() => {
            setGameState("finished"); // Add delay before switching to finished state
          }, 500);
        }
        return prev - 1;
      });
    }, 1000);

    setTimer(newTimer); // Store the timer ID in state
  };

  const handleClick = () => {
    if (gameState === "running" && timeLeft > 0) {
      setScore((prev) => {
        const newScore = prev + 1;
        if (newScore > bestScore) {
          setBestScore(newScore);
          localStorage.setItem("bestScore", newScore);
        }
        return newScore;
      });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Click Speed Challenge</h2>
      <p>Click as many times as you can in 10 seconds!</p>

      <button
        onClick={handleClick}
        disabled={gameState !== "running"} // Disable when not running
        style={{
          padding: "20px",
          fontSize: "20px",
          backgroundColor: gameState === "running" ? "blue" : "gray",
          color: "white",
          border: "none",
          cursor: gameState === "running" ? "pointer" : "not-allowed",
        }}
      >
        Click Me!
      </button>

      <br />

      <button
        onClick={startGame}
        disabled={gameState === "running"}
        style={{
          marginTop: "10px",
          padding: "15px",
          fontSize: "18px",
          backgroundColor: gameState === "running" ? "gray" :gameState === "finished" ? "red" : "green",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {gameState === "finished" ? "Restart Game" : "Start Game"}
      </button>

      <h3>Time Left: {timeLeft}s</h3>
      <h3>Score: {score}</h3>
      <h3>Best Score: {bestScore}</h3>
    </div>
  );
};
