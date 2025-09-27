import DocsLayout from "../../layout/DocsLayout";

const EvenOrOddDocs = () => {
  return (
    <DocsLayout
      links={{
        problemLink: "https://namastedev.com/practice/even-or-odd",
        githubLink:
          "https://github.com/ijas9118/my-react-practice/blob/main/src/challenges/even-or-odd/EvenOrOdd.tsx",
      }}
    >
      <p>
        Create a React component that allows users to input a number and checks whether the number
        is even or odd. The component displays the result with a 1-second loading delay and handles
        invalid inputs.
      </p>

      <section>
        <h2 className="text-2xl font-serif font-semibold text-neutral-800 mb-4">Requirements</h2>
        <ul className="list-decimal list-outside pl-6 space-y-2 text-neutral-700">
          <li>A user can enter a number in an input field.</li>
          <li>
            The input box should have a placeholder: <code>"Enter a number"</code>
          </li>
          <li>A button is provided to initiate the check.</li>
          <li>
            Upon clicking the button:
            <ul className="list-disc list-outside pl-6 space-y-1">
              <li>Any previous result should be cleared immediately.</li>
              <li>A loading indicator should appear for 1 second to simulate processing.</li>
              <li>
                In that one second a label <code>"Checking..."</code> should appear in the
                result-area.
              </li>
              <li>
                After the delay, the result should display in the format:
                <ul className="list-disc list-outside pl-6 space-y-1">
                  <li>
                    <code>"The number X is even."</code>
                  </li>
                  <li>
                    <code>"The number X is odd."</code>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            If the input is empty or not a valid number, show a clear error message such as: <br />
            <code>"Please enter a valid number."</code>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-medium text-neutral-800 mb-4">
          Edge Cases & Constraints
        </h2>
        <ul className="list-disc list-outside pl-6 space-y-2 text-neutral-700">
          <li>Non-numeric input should display "Please enter a valid number."</li>
          <li>Empty input should be handled gracefully.</li>
          <li>Leading/trailing spaces should be ignored.</li>
          <li>Large numbers should be processed correctly.</li>
          <li>Loading message "Checking..." should be shown before result.</li>
          <li>The result display must only appear after loading completes.</li>
        </ul>
      </section>
    </DocsLayout>
  );
};

export default EvenOrOddDocs;
