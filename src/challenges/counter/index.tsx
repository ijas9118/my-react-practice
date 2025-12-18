import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-3xl font-serif">Counter: {count}</h2>
      <div className="flex items-center gap-2">
        <button
          className="px-4 py-1 bg-emerald-500 text-white rounded-lg"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
        <button
          className="px-4 py-1 bg-pink-500 text-white rounded-lg"
          onClick={() => setCount((prev) => prev - 1)}
        >
          Decrement
        </button>
      </div>
      <button
        className="px-4 py-1 border bg-neutral-600 text-white shadow-lg rounded-lg"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
