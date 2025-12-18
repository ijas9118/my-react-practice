import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { GithubIcon, Code2, Zap } from "lucide-react";

const Layout: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl shadow-sm supports-[backdrop-filter]:bg-white/60">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-lg bg-indigo-600 text-white group-hover:bg-indigo-700 transition-colors duration-300 shadow-lg shadow-indigo-500/20">
                <Code2 size={24} />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                ReactQuest
              </span>
            </Link>

            {/* Navigation */}
            <ul className="flex items-center gap-1 sm:gap-6">
              <li>
                <Link
                  to="/"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive("/")
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/challenges"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive("/challenges")
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                  }`}
                >
                  Challenges
                </Link>
              </li>
              <li className="hidden sm:block">
                <div className="w-px h-6 bg-slate-200" />
              </li>
              <li className="hidden sm:block">
                <a
                  href="https://github.com/ijas9118/my-react-practice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium transition-colors duration-300"
                >
                  <GithubIcon size={20} />
                  <span className="text-sm">GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10 opacity-50" />
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-md bg-slate-900 text-white">
                <Zap size={16} />
              </div>
              <span className="text-sm font-semibold text-slate-900">ReactQuest</span>
            </div>
            
            <p className="text-sm text-slate-500">
              Built with <span className="text-red-500">♥</span> using React 19 & Tailwind v4
            </p>

            <div className="flex items-center gap-6">
              <a 
                 href="https://github.com/ijas9118/my-react-practice"
                 className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <GithubIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
