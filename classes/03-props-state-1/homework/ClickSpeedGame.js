export const SpeedGame = () => {
  // 1️⃣ Define state variables using useState:
  // - `score` to track the current score
  // - `timeLeft` to track the countdown timer
  // - `bestScore` to store the highest score (retrieved from localStorage)
  // - `gameState` to track whether the game is "idle", "running", or "finished"
  // - `timer` to store the interval ID for the countdown

  // 2️⃣ Implement the startGame function:
  // - Reset `score` to 0 and `timeLeft` to 10 seconds
  // - Set `gameState` to "running"
  // - Clear any existing timer to prevent duplication
  // - Start a countdown using setInterval, updating `timeLeft` every second
  // - When `timeLeft` reaches 1, clear the timer and transition `gameState` to "finished" after a small delay

  const startGame = () => {}

  // 3️⃣ Implement the handleClick function:
  // - Check if `gameState` is "running" and `timeLeft` is greater than 0
  // - Increase `score` by 1
  // - If `score` surpasses `bestScore`, update `bestScore` in state and localStorage

  const handleClick = () => {}
  
    return (
        <>

            {/* 4️⃣ Create the Click Button */}
            {/* - It should be clickable only when the game is running */}
            {/* - Style it differently based on the game state */}


            {/* 5️⃣ Create the Start/Restart Button */}
            {/* - It should be disabled while the game is running */}
            {/* - Change its color and text depending on whether the game is "finished" or "idle" */}


            {/* 6️⃣ Display game information */}

        </>
    )
}