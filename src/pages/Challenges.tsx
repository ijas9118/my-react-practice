import React from "react";
import { Link } from "react-router-dom";

interface Challenge {
  title: string;
  description: string;
  path: string;
}

const challengesData: Challenge[] = [
  {
    title: "Countdown Timer",
    description: "Build a countdown timer with customizable hours, minutes, and seconds.",
    path: "/challenges/countdown-timer",
  },
  {
    title: "Counter Using React",
    description: "Create a React counter with increment, decrement, and reset functionalities.",
    path: "/challenges/counter",
  },
];

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
              <h3 className="text-lg font-semibold text-neutral-800">{challenge.title}</h3>
              <p className="mt-2 text-neutral-600 text-sm">{challenge.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
