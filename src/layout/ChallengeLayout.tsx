import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";

interface ChallengeLayoutProps {
  title: string;
  Docs: React.ComponentType;
  children: React.ReactNode;
}

const ChallengeLayout: React.FC<ChallengeLayoutProps> = ({ title, Docs, children }) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          className="bg-neutral-100 shadow rounded-lg py-1 px-4 flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} /> <span>Back</span>
        </button>
        <h3 className="text-3xl font-serif">{title}</h3>
      </div>

      {/* Solution Slot */}
      <div className="py-16 border border-neutral-300 rounded-lg">{children}</div>

      {/* Docs */}
      <Docs />
    </div>
  );
};

export default ChallengeLayout;
