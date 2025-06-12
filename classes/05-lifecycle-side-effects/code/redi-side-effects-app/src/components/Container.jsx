import CleanUpComponent from './CleanUpComponent';
import { useState } from 'react';

function Container() {
  const [showChildComponent, setShowChildComponent] = useState(true);

  function toggleChildComponent() {
    setShowChildComponent((prev) => !prev);
  }

  return (
    <>
      <button onClick={toggleChildComponent}>Toggle Child!</button>

      {showChildComponent && <CleanUpComponent />}
    </>
  );
}

export default Container;
