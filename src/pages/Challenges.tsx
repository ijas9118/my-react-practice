import React from "react";
import { Link } from "react-router-dom";
import { challengesData, type Challenge } from "../data";

const difficultyColors: Record<Challenge["difficulty"], string> = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
};

const Challenges: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-8">Challenges</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {challengesData.map((challenge) => (
            <Link
              key={challenge.path}
              to={challenge.path}
              className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-neutral-200 flex-none"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-neutral-800">{challenge.title}</h3>
                <span
                  className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                    difficultyColors[challenge.difficulty]
                  }`}
                >
                  {challenge.difficulty}
                </span>
              </div>
              <p className="mt-2 text-neutral-600 text-sm">{challenge.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
