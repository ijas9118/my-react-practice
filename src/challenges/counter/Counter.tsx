import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CounterDocs from "./ChallengeDescription";

const Counter: React.FC = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <button
          className="bg-neutral-100 shadow rounded-lg py-1 px-4 flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} /> <span>Back</span>
        </button>
        <h3 className="text-3xl font-serif">Counter</h3>
      </div>

      <div className="py-16 border border-neutral-300 rounded-lg">
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
      </div>

      <CounterDocs />
    </div>
  );
};

export default Counter;
