import DocsLayout from "../../layout/DocsLayout";

const FrequentlyAskedQuestionsDocs = () => {
  return (
    <DocsLayout
      links={{
        problemLink: "https://namastedev.com/practice/frequently-asked-questions",
        githubLink:
          "https://github.com/ijas9118/my-react-practice/blob/main/src/challenges/frequently-asked-questions/FrequentlyAskedQuestions.tsx",
      }}
    >
      <div className="prose max-w-none">
        <p>
          Create a React component that displays a list of frequently asked questions. Each question
          can be expanded or collapsed individually, revealing the corresponding answer. Only one
          question can be open at a time. The component uses icons to indicate the expanded or
          collapsed state of each question.
        </p>

        <h3 className="text-2xl my-2">Requirements</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <p>Use these 3 questions and answers:</p>
            <ul className="list-disc pl-6">
              <li>
                <strong>What is this app about?</strong>
                <br />
                This app helps users track and improve their daily habits.
              </li>
              <li>
                <strong>How do I reset my password?</strong>
                <br />
                Click on 'Forgot Password' on the login screen and follow instructions.
              </li>
              <li>
                <strong>Can I use this app offline?</strong>
                <br />
                Yes, some features are available offline after the initial setup.
              </li>
            </ul>
          </li>
        </ul>

        <h3>Functional Requirements</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <p>The component must:</p>
            <ul className="list-disc pl-6">
              <li>Display a list of FAQ questions and their answers (individual container).</li>
              <li>Allow only one question to be expanded at a time.</li>
              <li>Collapse an expanded question if it is clicked again.</li>
            </ul>
          </li>

          <li>
            <p>Each FAQ item must include:</p>
            <ul className="list-disc pl-6">
              <li>A question button that toggles its expanded state.</li>
              <li>An answer section that is conditionally rendered only when active.</li>
            </ul>
          </li>

          <li>
            <p>
              A chevron icon from <code>react-icons/fi</code>:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <code>FiChevronDown</code> when collapsed.
              </li>
              <li>
                <code>FiChevronUp</code> when expanded.
              </li>
            </ul>
          </li>

          <li>
            <p>Clicking a question should:</p>
            <ul className="list-disc pl-6">
              <li>
                Expand its answer and show the <code>FiChevronUp</code> icon.
              </li>
              <li>Collapse the previously opened question (if any).</li>
              <li>
                Show <code>FiChevronDown</code> when the question is collapsed again.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </DocsLayout>
  );
};

export default FrequentlyAskedQuestionsDocs;
