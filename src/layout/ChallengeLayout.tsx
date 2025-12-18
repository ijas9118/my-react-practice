import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";
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

  // Assuming standardization of file structure
  const githubLink = `https://github.com/ijas9118/my-react-practice/blob/main/src/challenges/${id}/index.tsx`;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          className="bg-neutral-100 shadow rounded-lg py-1 px-4 flex items-center gap-2 hover:bg-neutral-200 transition-colors cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} /> <span>Back</span>
        </button>
        <h3 className="text-3xl font-serif">{title}</h3>
      </div>

      {/* Solution Slot */}
      <div className="py-16 border border-neutral-300 rounded-lg">{children}</div>

      {/* Docs */}
      <DocsLayout
        links={{
          problemLink: problemLink || "#",
          githubLink: githubLink,
        }}
      >
        <ReactMarkdown
          components={{
            ul: (props) => <ul className="list-disc list-outside pl-6 space-y-2" {...props} />,
            ol: (props) => <ol className="list-decimal list-outside pl-6 space-y-2" {...props} />,
            a: (props) => <a className="text-blue-600 hover:underline" {...props} />,
            code: (props) => <code className="bg-neutral-100 px-1 rounded font-mono text-sm" {...props} />,
            p: (props) => <p className="mb-2" {...props} />,
          }}
        >
          {markdown || ""}
        </ReactMarkdown>
      </DocsLayout>
    </div>
  );
};

export default ChallengeLayout;
