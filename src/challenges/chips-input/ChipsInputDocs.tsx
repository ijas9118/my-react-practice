import React from "react";
import DocsLayout from "../../layout/DocsLayout";

const ChipsInputDocs: React.FC = () => {
  return (
    <DocsLayout
      links={{
        problemLink: "https://namastedev.com/practice/chips-input",
        githubLink:
          "https://github.com/ijas9118/my-react-practice/blob/main/src/challenges/chips-input/ChipsInput.tsx",
      }}
    >
      <p>
        In this task, you are asked to create a component that allows users to input a series of
        tags or keywords. The component will display these tags as "chips" (small labels), which
        users can add and remove dynamically.
      </p>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-neutral-800 mb-4">Features</h2>
        <ol>
          <li>
            <i>Input Field</i>: Users can type text into an input field.
          </li>
          <li>
            <i>Add Chips</i>: When the user presses the "Enter" key, the typed text will be added as
            a new chip (tag). Empty or whitespace-only chips should not be added
          </li>
          <li>
            <i>Remove Chips</i>: Users can delete a chip by clicking the "X" button next to it.
          </li>
          <li>
            <i>Horizontal Display</i>: The chips should be displayed in a horizontal list.
          </li>
          <li>
            <i>Persistence</i>: The list of chips should be maintained even when the component
            re-renders.
          </li>
        </ol>
      </section>
    </DocsLayout>
  );
};

export default ChipsInputDocs;
