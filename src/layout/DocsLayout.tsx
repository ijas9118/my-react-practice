import { GithubIcon, ExternalLink, BookOpen } from "lucide-react";
import React from "react";

interface DocsLayoutProps {
  children: React.ReactNode;
  links: { problemLink: string; githubLink: string };
}

const DocsLayout: React.FC<DocsLayoutProps> = ({ children, links }) => {
  return (
    <div className="bg-white">
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-2">
        <BookOpen className="text-indigo-600" size={20} />
        <h2 className="text-lg font-bold text-slate-900">Task Description</h2>
      </div>

      <div className="p-6 md:p-8">
        <div className="prose prose-slate max-w-none text-slate-600">
          {children}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-4">
          {links.problemLink && (
            <a
              href={links.problemLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors font-medium text-sm"
            >
              <ExternalLink size={16} />
              Original Problem
            </a>
          )}
          <a
            href={links.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm"
          >
            <GithubIcon size={16} />
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocsLayout;
