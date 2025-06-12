# ✅ Speed Click Game – Solution

## 📁 Overview

This solution builds a **Speed Click Game** in React where the player has 10 seconds to click as many times as possible. It uses multiple state variables and handles timing with `setInterval`.

---

## 🧠 Key Concepts

* `useState` and `useEffect`
* DOM event handling
* Timer management with `setInterval` / `clearInterval`
* `localStorage` persistence
* Conditional rendering and button disabling

---

## 🔧 Full Implementation

```jsx
import React, { useState, useEffect } from "react";

export const SpeedGame = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameState, setGameState] = useState("idle");
  const [timer, setTimer] = useState(null);

  // Load best score from localStorage
  useEffect(() => {
    const storedBest = localStorage.getItem("bestScore");
    if (storedBest) setBestScore(parseInt(storedBest));
  }, []);

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setGameState("running");

    if (timer) clearInterval(timer);

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          setTimeout(() => setGameState("finished"), 200);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    setTimer(intervalId);
  };

  const handleClick = () => {
    if (gameState === "running" && timeLeft > 0) {
      const newScore = score + 1;
      setScore(newScore);

      if (newScore > bestScore) {
        setBestScore(newScore);
        localStorage.setItem("bestScore", newScore);
      }
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Speed Click Game</h1>

      <button
        onClick={handleClick}
        disabled={gameState !== "running"}
        style={{
          padding: "20px 40px",
          fontSize: "1.5rem",
          backgroundColor: gameState === "running" ? "#28a745" : "#ccc",
          cursor: gameState === "running" ? "pointer" : "not-allowed",
          marginBottom: "20px",
        }}
      >
        Click Me!
      </button>

      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={startGame}
          disabled={gameState === "running"}
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: gameState === "finished" ? "#007bff" : "#555",
            color: "white",
            cursor: gameState === "running" ? "not-allowed" : "pointer",
          }}
        >
          {gameState === "finished" ? "Play Again" : "Start Game"}
        </button>
      </div>

      <div>
        <p><strong>Time Left:</strong> {timeLeft} sec</p>
        <p><strong>Score:</strong> {score}</p>
        <p><strong>Best Score:</strong> {bestScore}</p>
        <p><strong>Status:</strong> {gameState}</p>
      </div>
    </div>
  );
};
```

---

## 🔍 How It Works

* **Game Start:** Timer starts, score resets, state becomes `"running"`.
* **Clicking:** Button adds points only when timer is active.
* **Best Score:** Saved to `localStorage`.
* **Game End:** After 10 seconds, timer stops and state becomes `"finished"`.

---

## 🔧 Optional Enhancements

* Add sound effects or animations
* Responsive layout for mobile
* Count clicks per second (CPS)
* Confetti on new high score

---

## 👏 Summary

This component demonstrates interactive timing logic in React, effective state usage, and persistent data with localStorage. It can be easily extended with styles and UX improvements.
