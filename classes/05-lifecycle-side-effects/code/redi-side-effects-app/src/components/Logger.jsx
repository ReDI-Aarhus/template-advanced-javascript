import { useEffect } from 'react';

function Logger() {
  useEffect(() => {
    console.log('Logger component is mounted');
  }, []);

  return <h1>I have logged in the console!</h1>;
}

export default Logger;
