// src/components/FetchDataAndDisplay.js

import React, { useEffect, useState } from 'react';

const FetchDataAndDisplay = () => {
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=fY31kJxk5IvwkKwp4xhwo8uZshbqU1L3JieUyy1r')
      .then(response => response.json())
      .then(data => setApodData(data))
      .catch(error => setError('Error fetching data'));
  }, []);

  return (
    <div>
      <h1>NASA APOD</h1>
      {error && <p>{error}</p>}
      {apodData && (
        <div>
          <h2>{apodData.title}</h2>
          <img src={apodData.url} alt={apodData.title} style={{ maxWidth: '100%' }} />
          <p>{apodData.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default FetchDataAndDisplay;
