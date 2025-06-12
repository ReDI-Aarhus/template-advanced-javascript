import { useState, useContext } from 'react';

import ThemeContext from '../contexts/ThemeContext';

function Counter() {
  const [count, setCount] = useState(0);

  const myThemeData = useContext(ThemeContext);

  // myThemeData = { color: theme }


  return (
    <div>
      <p id='counter'>{count}</p>
      <p>current theme is: {myThemeData.color}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;