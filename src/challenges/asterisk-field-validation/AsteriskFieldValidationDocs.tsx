import React from "react";
import DocsLayout from "../../layout/DocsLayout";

const AsteriskFieldValidationDocs = () => {
  return (
    <DocsLayout
      links={{
        problemLink: "https://namastedev.com/practice/asterisk-field-validation",
        githubLink:
          "https://github.com/ijas9118/my-react-practice/blob/main/src/challenges/asterisk-field-validation/AsteriskFieldValidation.tsx",
      }}
    >
      <div className="max-w-none">
        <p>
          Create a React component that allows users to input and validate required fields for{" "}
          <strong>Name</strong> and <strong>Location</strong>. It should display a red asterisk for
          mandatory fields, highlight validation errors when fields are left empty, and show a
          success message with submitted values when both fields are filled correctly.
        </p>

        <h3 className="text-2xl my-2">Requirements</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <p>The form must:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Contain two input fields: <strong>Name</strong> and <strong>Location</strong>.
              </li>
              <li>
                Display labels for both fields with red asterisks (<code>*</code>) indicating they
                are required.
              </li>
              <li>
                Show placeholder text:
                <ul className="list-disc pl-6">
                  <li>
                    <strong>"Enter your name"</strong> for the Name field.
                  </li>
                  <li>
                    <strong>"Enter your location"</strong> for the Location field.
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <p>Validation behavior:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                On form submission:
                <ul className="list-disc pl-6">
                  <li>
                    If either field is empty:
                    <ul className="list-disc pl-6">
                      <li>Highlight the input with an error style.</li>
                      <li>Show an inline error message (e.g. "Location is required").</li>
                    </ul>
                  </li>
                  <li>
                    If both fields are filled:
                    <ul className="list-disc pl-6">
                      <li>Show a success message containing the submitted name and location.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <p>Success message:</p>
            <ul className="list-disc pl-6">
              <li>Appears only if both fields pass validation.</li>
              <li>
                Message format should be:
                <pre className="bg-gray-100 text-sm p-2 rounded-md mt-2">
                  <code>
                    Submitted Successfully! <br />
                    Name: [user input] <br />
                    Location: [user input]
                  </code>
                </pre>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </DocsLayout>
  );
};

export default AsteriskFieldValidationDocs;
