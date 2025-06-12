import { useEffect } from 'react';

function CleanUpComponent() {
  useEffect(() => {
    console.log('CleanUpComponent mounted');

    return () => {
      console.log('CleanUpComponent unmounted');
    };
  }, []);

  return <div>CleanUpComponent</div>;
}

export default CleanUpComponent;
