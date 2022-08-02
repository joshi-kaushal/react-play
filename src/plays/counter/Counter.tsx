import { useState } from "react";

const Counter = ({ times }: { times: number }) => {
  const [counter, setCounter] = useState(0);

  function increase(): void {
    setCounter((prev) => {
      if (prev === times) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }

  function reset(): void {
    setCounter(0);
  }

  return (
    <div className="counter">
      <button
        title="Click to increment"
        className="counter_btn"
        onClick={increase}
      >
        {counter}
      </button>
      <button className="reset_btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
