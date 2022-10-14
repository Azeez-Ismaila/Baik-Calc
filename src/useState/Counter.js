import React, { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);
  const Increment = () => {
    setValue(value + 1);
  };
  const Decrease = () => {
    setValue(value - 1);
  };
  const Reset = () => {
    setValue(0);
  };
  const ComplexIncrement = () => {
    setTimeout(() => {
      setValue((prev) => prev + 1);
    }, 2000);
  };
  return (
    <div>
      <h1>Regular Counter</h1>
      <h1>{value}</h1>
      <button onClick={() => Increment()}>Increase</button>
      <button onClick={() => Decrease()}>Decrease</button>
      <button onClick={() => Reset()}>Reset</button>
      <div>
        <h1>{value}</h1>
        <button onClick={ComplexIncrement}>Complex Increment</button>
      </div>
    </div>
  );
}

export default Counter;
