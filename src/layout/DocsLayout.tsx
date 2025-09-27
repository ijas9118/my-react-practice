import { GithubIcon, Link } from "lucide-react";
import React from "react";

interface DocsLayoutProps {
  children: React.ReactNode;
  links: { problemLink: string; githubLink: string };
}

const DocsLayout: React.FC<DocsLayoutProps> = ({ children, links }) => {
  return (
    <div className="flex">
      <div className="max-w-3xl w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Task Description */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold text-neutral-800 mb-4">
            Task Description
          </h2>
          <div className="text-neutral-700 leading-relaxed space-y-4">{children}</div>
        </section>

        {/* Links */}
        <div className="flex items-center space-x-3 border-t border-neutral-200 pt-6">
          <Link className="w-5 h-5 text-neutral-600" />
          <a
            href={links.problemLink}
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
            href={links.githubLink}
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

export default DocsLayout;
