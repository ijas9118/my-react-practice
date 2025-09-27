import React from "react";
import DocsLayout from "../../layout/DocsLayout";

const CounterDocs: React.FC = () => {
  return (
    <DocsLayout
      links={{
        problemLink: "https://namastedev.com/practice/counter-using-react",
        githubLink:
          "https://github.com/ijas9118/my-react-practice/blob/main/src/challenges/counter/Counter.tsx",
      }}
    >
      <p>
        Create a React counter with increment, decrement, and reset functionalities. <br />
        The component should have the following:
      </p>
      <ul className="list-disc list-outside pl-6 space-y-2">
        <li>Increase the count by 1 when clicking the "Increment" button.</li>
        <li>Decrease the count by 1 when clicking the "Decrement" button.</li>
        <li>Reset the count to zero when clicking the "Reset" button.</li>
        <li>Show the current counter value with the text "Counter"</li>
      </ul>
    </DocsLayout>
  );
};

export default CounterDocs;
