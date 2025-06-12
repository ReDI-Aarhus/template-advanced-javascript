// src/components/DisplayAPOD.js

import { useEffect, useState } from 'react';

const DisplayAPOD = () => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=fY31kJxk5IvwkKwp4xhwo8uZshbqU1L3JieUyy1r')
      .then(response => response.json())
      .then(data => setApodData(data))
      .catch(error => setApodData({ title: 'Error fetching data' }));
  }, []);

  return (
    <div>
      <h1>Display APOD</h1>
      {apodData && (
        <div>
          <h2>{apodData.title}</h2>
          {apodData.url && <img src="https://apod.nasa.gov/apod/image/2405/AR3664Prom_Voltmer_960.jpg" alt={apodData.title} style={{ maxWidth: '100%' }} />}
        </div>
      )}
    </div>
  );
};

export default DisplayAPOD;
