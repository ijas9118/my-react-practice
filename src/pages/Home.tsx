import React from "react";

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">ReactQuest: Code Challenges</h1>
        <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
          Welcome to my React machine coding practice showcase! This project is a collection of
          coding challenges solved using React, demonstrating skills in state management, routing,
          component design, and more. Each challenge is implemented as a separate page, with clean
          code and detailed explanations.
        </p>
      </section>

      <section id="challenges" className="space-y-4">
        <h2 className="text-2xl font-semibold">Challenges</h2>
        <p className="text-neutral-700">
          Explore the challenges below. Each solution includes a live demo, source code, and a
          detailed README explaining the problem, approach, and optimizations.
        </p>
        <ul className="list-disc list-inside text-neutral-700 space-y-2">
          <li>Coming Soon: Todo List - A task management app with local storage.</li>
          <li>Coming Soon: Infinite Scroll - Dynamic data loading with API integration.</li>
          {/* Add more challenges here as you implement them */}
        </ul>
        <p className="text-neutral-700">
          Check out the{" "}
          <a
            href="https://github.com/ijas9118/my-react-practice"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-neutral-500 transition"
          >
            GitHub repo
          </a>{" "}
          for source code and detailed documentation.
        </p>
      </section>
    </div>
  );
};

export default Home;
