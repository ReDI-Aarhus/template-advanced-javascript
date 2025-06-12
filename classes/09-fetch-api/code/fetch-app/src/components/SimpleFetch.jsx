// SimpleFetch.jsx

import { useEffect, useState } from 'react';

const SimpleFetch = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=fY31kJxk5IvwkKwp4xhwo8uZshbqU1L3JieUyy1r')
      .then(response => response.json())
      .then(data => setTitle(data.title))
      .catch(error => setTitle('Error fetching data'));
  }, []);

  return (
    <div>
      <h1>Simple Fetch Task</h1>
      <p>APOD Title: {title}</p>
    </div>
  );
};

export default SimpleFetch;
