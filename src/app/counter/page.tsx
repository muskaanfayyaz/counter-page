"use client";
import { useState } from 'react';

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-heading">Counter</h1>
      <p className="counter-display">Count: {count}</p>
      <button className="counter-button" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};

export default CounterPage;
