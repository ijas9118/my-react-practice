import { useState } from "react";
import ChallengeLayout from "../../layout/ChallengeLayout";
import FrequentlyAskedQuestionsDocs from "./FrequentlyAskedQuestionsDocs";
import { faqs } from "./data";
import { ChevronDown, ChevronUp } from "lucide-react";

const FrequentlyAskedQuestions = () => {
  const [active, setActive] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (active === index) {
      setActive(null);
      return;
    }
    setActive(index);
  };
  return (
    <ChallengeLayout title="Frequently Asked Questions" Docs={FrequentlyAskedQuestionsDocs}>
      <div className="max-w-2xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = index === active;
            return (
              <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
                <button
                  onClick={() => handleClick(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-700 hover:bg-gray-50 rounded-lg focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="ml-2">
                    {isActive ? (
                      <ChevronUp className="text-gray-500" />
                    ) : (
                      <ChevronDown className="text-gray-500" />
                    )}
                  </span>
                </button>

                {isActive && <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </ChallengeLayout>
  );
};

export default FrequentlyAskedQuestions;
