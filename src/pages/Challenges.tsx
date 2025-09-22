import React from "react";
import { Link } from "react-router-dom";

const Challenges: React.FC = () => {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Challenges</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/challenges/countdown-timer" className="text-blue-600 hover:underline">
            Countdown Timer
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Challenges;
