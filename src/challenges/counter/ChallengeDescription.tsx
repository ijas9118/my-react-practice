import { GithubIcon, Link } from "lucide-react";
import React from "react";

const CounterDocs: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Task Description */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold text-neutral-800 mb-4">
            Task Description
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Create a React counter with increment, decrement, and reset functionalities. <br />
            The component should have the following:
          </p>
          <ul className="list-disc list-outside pl-6 text-neutral-700 space-y-2">
            <li>Increase the count by 1 when clicking the "Increment" button.</li>
            <li>Decrease the count by 1 when clicking the "Decrement" button.</li>
            <li>Reset the count to zero when clicking the "Reset" button.</li>
            <li>Show the current counter value with the text "Counter"</li>
          </ul>
        </section>

        <div className="flex items-center space-x-3 border-t border-neutral-200 pt-6">
          <Link className="w-5 h-5 text-neutral-600" />
          <a
            href="https://namastedev.com/practice/counter-using-react"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Problem Link
          </a>
        </div>

        <div className="flex items-center space-x-3 border-neutral-200 pt-6">
          <GithubIcon className="w-5 h-5 text-neutral-600" />
          <a
            href="https://github.com/ijas9118/my-react-practice/blob/main/src/challenges/counter/Counter.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Checkout my solution
          </a>
        </div>
      </div>
    </div>
  );
};

export default CounterDocs;
