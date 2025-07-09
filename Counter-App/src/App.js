import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="counter-container">
        <h1>Counter App</h1>
        <div className="counter-display">
          <span className="counter-value">{count}</span>
        </div>
        <div className="button-container">
          <button 
            className="btn btn-increment" 
            onClick={increment}
          >
            Increment
          </button>
          <button 
            className="btn btn-decrement" 
            onClick={decrement}
            disabled={count === 0}
          >
            Decrement
          </button>
          <button 
            className="btn btn-reset" 
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App; 