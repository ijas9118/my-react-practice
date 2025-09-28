import React, { useState } from "react";
import ChallengeLayout from "../../layout/ChallengeLayout";
import ChipsInputDocs from "./ChipsInputDocs";

const ChipsInput: React.FC = () => {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState<string[]>([]);

  const handleEnter = () => {
    const inputText = input.trim();
    if (inputText !== "") {
      setChips((prev) => [...prev, inputText]);
      setInput("");
    }
  };

  const handleDelete = (index: number) => {
    const copy = [...chips];
    copy.splice(index, 1);
    setChips(copy);
  };
  return (
    <ChallengeLayout title="Chips Input" Docs={ChipsInputDocs}>
      <div className="flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Chips Input</h2>
        <input
          type="text"
          placeholder="Type a chip and press tag"
          className="w-80 px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleEnter();
          }}
        />
        <div className="flex space-x-3 flex-wrap">
          {chips.map((chip, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm select-none"
            >
              <span>{chip}</span>
              <button
                className="bg-blue-300 hover:bg-blue-400 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs font-bold cursor-pointer"
                onClick={() => handleDelete(index)}
                aria-label={`Delete chip ${chip}`}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </ChallengeLayout>
  );
};

export default ChipsInput;
