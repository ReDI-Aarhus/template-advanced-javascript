# ⚡ Homework – Speed Click Game Component

## 🎯 Objective

Build a simple **Speed Click Game** using **React**. The game challenges users to click a button as many times as possible within 10 seconds.

---

## 📆 Your Task

### 🔧 Component Requirements

Create a `SpeedGame` component with the following features:

1. **State Management** (using `useState`):

   * `score`: Tracks how many times the button was clicked.
   * `timeLeft`: Countdown starting from 10 seconds.
   * `bestScore`: Highest score achieved (saved in `localStorage`).
   * `gameState`: Indicates whether the game is `"idle"`, `"running"`, or `"finished"`.
   * `timer`: Stores the interval ID used for the countdown.

2. **Start Game Logic**:

   * Resets `score` to `0` and `timeLeft` to `10`.
   * Sets `gameState` to `"running"`.
   * Clears any previous interval.
   * Starts a 1-second interval that decrements `timeLeft`.
   * When `timeLeft` reaches 1, stop the timer and change `gameState` to `"finished"` after a short delay.

3. **Click Handling**:

   * Active only when `gameState === "running"` and `timeLeft > 0`.
   * Increments `score` by 1.
   * If `score` beats `bestScore`, update both state and `localStorage`.

4. **UI Elements**:

   * **Click Button**:

     * Only clickable while game is running.
     * Styles change based on game state.
   * **Start/Restart Button**:

     * Disabled during the game.
     * Text and color change based on game state.
   * **Display Info**:

     * `Time Left`, `Score`, `Best Score`, and `Game State`.

---

## 🖊️ Extra Credit

* Use `useEffect` to load the best score from `localStorage` on initial render.
* Add animations or visual feedback when the button is clicked.
* Make it mobile-friendly.

---

## 🎮 Example Game Flow

1. User clicks "Start Game".
2. Timer starts counting down from 10.
3. User clicks the "Click Me!" button rapidly.
4. After 10 seconds, the game ends and the score is recorded.
5. If it beats the previous best score, `bestScore` updates.

---

Good luck! Make it fun and responsive!
