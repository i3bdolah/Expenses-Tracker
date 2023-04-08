import "./Counter.css";
import React from "react";

// don't change the Component name "App"
function Counter() {
  const [counter, setCounter] = React.useState(0);

  function counterHandler() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <p id="counter">{counter}</p>
      <button onClick={counterHandler}>Increment</button>
    </div>
  );
}

export default Counter;
