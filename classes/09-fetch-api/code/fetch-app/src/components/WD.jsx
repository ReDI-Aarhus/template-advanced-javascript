

import { useEffect, useState } from 'react';

const WD = () => {
    const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch('https://api.nasa.gov/insight_weather/?api_key=fY31kJxk5IvwkKwp4xhwo8uZshbqU1L3JieUyy1r&feedtype=json&ver=1.0')
      .then(response => response.json())
      .then(data => {
        const latestSol = data.sol_keys[data.sol_keys.length - 1];
        setWeatherData(data[latestSol].WD);
      })
      .catch(error => setWeatherData('Error fetching data'));
  }, []);

  return (
    <div>
      <h1>WD</h1>
      {Object.keys(weatherData).map(direction => (
            <div key={direction}>
              <h3>Direction: {direction}</h3>
              <p>Compass Point: {weatherData[direction].compass_point}</p>
              <p>Compass Degrees: {weatherData[direction].compass_degrees}</p>
              <p>Count: {weatherData[direction].count}</p>
            </div>
          ))}
    </div>
  );
};

export default WD;
