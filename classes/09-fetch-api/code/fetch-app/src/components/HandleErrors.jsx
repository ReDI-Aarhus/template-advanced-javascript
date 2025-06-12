// src/components/HandleErrors.js

import { useEffect, useState } from 'react';

const HandleErrors = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=INVALID_KEY')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <div>
      <h1>Handle Errors Task</h1>
      {error && <p>Error: {error}</p>}
      {data && <p>APOD Title: {data.title}</p>}
    </div>
  );
};

export default HandleErrors;
