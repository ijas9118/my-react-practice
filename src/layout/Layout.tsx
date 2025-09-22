import React from "react";
import { Link, Outlet } from "react-router-dom";
import { GithubIcon } from "lucide-react";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-serif font-bold text-neutral-900">
              <Link to="/">ReactQuest</Link>
            </h1>
            <ul className="flex space-x-8 items-center">
              <li>
                <Link
                  to="/"
                  className="text-neutral-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/challenges"
                  className="text-neutral-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Challenges
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/ijas9118/my-react-practice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-neutral-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  <GithubIcon className="w-5 h-5 mr-1" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-100 py-6 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-neutral-600 mb-2">
            &copy; {new Date().getFullYear()} ReactQuest: Code Challenges. Built with React &
            Tailwind CSS.
          </p>
          <a
            href="https://github.com/ijas9118/my-react-practice"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            <GithubIcon className="w-4 h-4 mr-1" />
            View Source on GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
