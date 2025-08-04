import React, { useState } from "react";
import { Digit } from "./components/Digit";
import { Button } from "./components/Button";

const places = [1000, 10, 100, 1].sort((a, b) => b - a);

export const FourDigitCounter = () => {
  const [number, setNumber] = useState(5432);

  const increment = () => {
    if (number < 9999) {
      const num = number + 1;
      setNumber(num);
    }
  };
  const decrement = () => {
    if (number > 0) {
      setNumber((prev) => prev - 1);
    }
  };

  return (
    <>
      <h1>Four-Digit Counter for number yeee {number}</h1>
      <Button onClick={decrement}>-</Button>
      <Button onClick={increment}>+</Button>

      {places.map((place, index) => {
        return <Digit number={number} place={place} key={index}></Digit>;
      })}
    </>
  );
};

//Utility functions?
