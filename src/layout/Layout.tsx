import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-neutral-900 text-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">
              <Link to="/">ReactQuest</Link>
            </h1>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-neutral-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/challenges" className="hover:text-neutral-300 transition">
                  Challenges
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/ijas9118/my-react-practice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-300 transition"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ReactQuest: Code Challenges. Built with React &
            Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
