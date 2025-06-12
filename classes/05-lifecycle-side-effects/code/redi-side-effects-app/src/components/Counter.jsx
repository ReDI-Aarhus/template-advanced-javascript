import { useEffect, useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [countIsReached, setCountIsReached] = useState(false);

  useEffect(() => {
    console.log('Checking count...');
    if (count === 5) {
      console.log("We've reached count of 5!!!");
      setCountIsReached(true);
    }
  }, [count]);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p id="counter">{count}</p>
      <button onClick={increment}>Increment</button>

      {countIsReached && <p>We've reached count of 5!!!</p>}
    </div>
  );
}
