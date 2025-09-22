import React from "react";
import { Link } from "react-router-dom";
import { GithubIcon } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 mb-6">
            My Frontend Machine Coding Journey
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-8">
            Documenting my learning path through building real-world frontend challenges. Explore my
            solutions, try them out, and check the code on GitHub.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/challenges"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Explore Challenges
            </Link>
            <a
              href="https://github.com/ijas9118/my-react-practice"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-neutral-800 text-white font-medium rounded-md hover:bg-neutral-900 transition-colors duration-200"
            >
              <GithubIcon className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-8 text-center">
            Featured Challenges
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/challenges/countdown-timer"
              className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-neutral-200"
            >
              <h3 className="text-lg font-semibold text-neutral-800">Countdown Timer</h3>
              <p className="mt-2 text-neutral-600 text-sm">
                A customizable timer with hours, minutes, and seconds, featuring pause, reset, and
                notification functionality.
              </p>
              <span className="inline-block mt-4 text-blue-600 text-sm font-medium hover:underline">
                Try it now
              </span>
            </Link>
            {/* Placeholder for more challenges */}
            <div className="p-6 bg-white rounded-lg shadow-sm border border-neutral-200 opacity-50">
              <h3 className="text-lg font-semibold text-neutral-800">Coming Soon</h3>
              <p className="mt-2 text-neutral-600 text-sm">
                More exciting frontend challenges are on the way. Stay tuned!
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-neutral-200 opacity-50">
              <h3 className="text-lg font-semibold text-neutral-800">Coming Soon</h3>
              <p className="mt-2 text-neutral-600 text-sm">
                More exciting frontend challenges are on the way. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 ">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
            About This Journey
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            This website is a personal project to document my progress in mastering frontend
            development through hands-on machine coding challenges. Each challenge is carefully
            crafted, with solutions available to try out and source code hosted on GitHub for you to
            explore.
          </p>
          <a
            href="https://github.com/ijas9118/my-react-practice"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 font-medium hover:underline"
          >
            <GithubIcon className="w-5 h-5 mr-2" />
            Check out the full repository
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">Join My Journey</h2>
          <p className="text-neutral-600 leading-relaxed mb-8">
            Follow along as I tackle new challenges and share my solutions. Whether you're a
            beginner or an experienced developer, there's something here for everyone.
          </p>
          <Link
            to="/challenges"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Start Exploring
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
