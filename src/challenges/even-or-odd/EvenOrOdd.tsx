import React, { useState } from "react";
import ChallengeLayout from "../../layout/ChallengeLayout";
import EvenOrOddDocs from "./EvenOrOddDocs";

const EvenOrOdd: React.FC = () => {
  const [num, setNum] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    const trimmed = num.trim();

    if (trimmed === "" || isNaN(Number(trimmed))) {
      setResult("Please enter a valid number.");
      return;
    }

    setIsCheck(true);
    setTimeout(() => {
      const isEven = Number(trimmed) % 2 === 0;
      setResult(isEven ? `The number ${trimmed} is even.` : `The number ${trimmed} is odd.`);
      setNum("");
      setIsCheck(false);
    }, 1000);
  };
  return (
    <ChallengeLayout title="Even or Odd" Docs={EvenOrOddDocs}>
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-2xl font-serif font-semibold">Even or Odd Checker</h1>

        <input
          className="w-64 px-3 py-2 border border-neutral-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          type="text"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Enter a number"
        />

        <button
          className="px-6 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700 transition-colors"
          onClick={handleSubmit}
        >
          Check
        </button>

        <div className="min-h-[2rem] text-lg font-medium">
          {isCheck ? (
            <div className="text-neutral-500 animate-pulse">Checking...</div>
          ) : (
            result && <div className="">{result}</div>
          )}
        </div>
      </div>
    </ChallengeLayout>
  );
};

export default EvenOrOdd;
