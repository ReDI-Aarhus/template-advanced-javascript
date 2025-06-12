import React, { useState } from "react";

export const Digit = ({ number, place, index }) => {
  const digit = Math.floor((number / place) % 10) * place;

  return <span style={{ fontSize: "2rem", margin: "0 5px" }}>{digit}</span>;
}

export const FourDigitCounterSolution = ()  => {
  const [number, setNumber] = useState(1000);

  const increment = () => {
    if (number < 9999) setNumber(number + 1);
  };

  const decrement = () => {
    if (number > 0) setNumber(number - 1);
  };

  const places = [1000, 100, 10, 1].sort((a, b) => b - a);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Four-Digit Counter for number {number}</h1>
      <div style={{ display: "flex", justifyContent: "center", fontSize: "3rem" }}>
        {places.map((place, index) => (
          <Digit key={index} number={number} place={place} index={index} />
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={decrement} style={{ marginRight: "10px" }}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
