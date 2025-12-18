import { ArrowLeft, RefreshCw, Smartphone, Monitor, Eye, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import DocsLayout from "./DocsLayout";
import ReactMarkdown from "react-markdown";
import type { ChallengeData } from "../utils/challenge-registry";

interface ChallengeLayoutProps {
  challenge: ChallengeData;
  children: React.ReactNode;
}

const ChallengeLayout: React.FC<ChallengeLayoutProps> = ({ challenge, children }) => {
  const navigate = useNavigate();
  const { title, markdown, problemLink, id } = challenge;
  const [key, setKey] = useState(0);
  const [activeTab, setActiveTab] = useState<"preview" | "problem">("preview");

  // Assuming standardization of file structure
  const githubLink = `https://github.com/ijas9118/my-react-practice/blob/main/src/challenges/${id}/index.tsx`;

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="p-2 -ml-2 hover:bg-white rounded-lg text-slate-500 hover:text-slate-900 transition-colors"
              onClick={() => navigate(-1)}
              title="Go Back"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="w-px h-6 bg-slate-200" />
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          </div>
          
          {/* Tabs */}
          <div className="flex bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                activeTab === "preview"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
              }`}
            >
              <Eye size={16} />
              Preview
            </button>
            <button
              onClick={() => setActiveTab("problem")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                activeTab === "problem"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
              }`}
            >
              <FileText size={16} />
              Problem
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Area */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden min-h-[600px] flex flex-col">
               
            {activeTab === "preview" ? (
               <>
                 <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                   <div className="flex items-center gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-400" />
                     <div className="w-3 h-3 rounded-full bg-amber-400" />
                     <div className="w-3 h-3 rounded-full bg-emerald-400" />
                   </div>
                   
                   <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-slate-400 px-2">
                        <Monitor size={16} />
                        <div className="w-px h-4 bg-slate-300 mx-1" />
                        <Smartphone size={16} />
                      </div>
                      <button 
                        onClick={() => setKey(p => p + 1)}
                        className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-md hover:bg-slate-50 hover:text-indigo-600 transition-colors text-xs font-medium"
                      >
                        <RefreshCw size={12} />
                        Reset
                      </button>
                   </div>
                 </div>
                 
                 <div className="flex-grow p-8 flex items-center justify-center bg-white" key={key}>
                   <div className="w-full max-w-3xl">
                      {children}
                   </div>
                 </div>
               </>
            ) : (
               <div className="flex-grow bg-white p-0">
                  <DocsLayout
                    links={{
                      problemLink: problemLink || "#",
                      githubLink: githubLink,
                    }}
                  >
                    <ReactMarkdown
                      components={{
                          h1: (props) => <h1 className="text-3xl font-bold mb-6 text-slate-900" {...props} />,
                          h2: (props) => <h2 className="text-xl font-bold mb-4 mt-8 text-slate-900 border-b border-slate-100 pb-2" {...props} />,
                          h3: (props) => <h3 className="text-lg font-bold mb-3 mt-6 text-slate-800" {...props} />,
                          ul: (props) => <ul className="list-disc list-outside pl-5 space-y-2 mb-6 text-slate-600" {...props} />,
                          ol: (props) => <ol className="list-decimal list-outside pl-5 space-y-2 mb-6 text-slate-600" {...props} />,
                          li: (props) => <li className="leading-relaxed" {...props} />,
                          a: (props) => <a className="text-indigo-600 hover:text-indigo-800 font-medium underline decoration-indigo-200 underline-offset-2" {...props} />,
                          code: (props) => <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-indigo-600 border border-slate-200" {...props} />,
                          pre: (props) => <pre className="bg-slate-900 text-slate-50 p-6 rounded-xl overflow-x-auto text-sm mb-6 leading-relaxed shadow-lg" {...props} />,
                          p: (props) => <p className="mb-6 leading-7 text-slate-600" {...props} />,
                          blockquote: (props) => <blockquote className="border-l-4 border-indigo-500 pl-4 py-1 bg-indigo-50/50 rounded-r-lg italic my-6 text-slate-700" {...props} />,
                      }}
                    >
                      {markdown || ""}
                    </ReactMarkdown>
                  </DocsLayout>
               </div>
            )}
          </div>
      </div>
    </div>
  );
};

export default ChallengeLayout;
