// src/components/FetchWithQueryParams.js

import React, { useEffect, useState } from 'react';

const FetchWithQueryParams = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const date = '2022-01-01';

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=fY31kJxk5IvwkKwp4xhwo8uZshbqU1L3JieUyy1r&date=${date}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError('Error fetching data'));
  }, [date]);

  return (
    <div>
      <h1>Fetch with Query Params</h1>
      {error && <p>{error}</p>}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <img src={data.url} alt={data.title} style={{ maxWidth: '100%' }} />
          <p>{data.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default FetchWithQueryParams;
