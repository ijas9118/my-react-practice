Create a React component that displays a list of frequently asked questions. Each question can be expanded or collapsed individually, revealing the corresponding answer. Only one question can be open at a time. The component uses icons to indicate the expanded or collapsed state of each question.

### Requirements

- Use these 3 questions and answers:
  - **What is this app about?**
    This app helps users track and improve their daily habits.
  - **How do I reset my password?**
    Click on 'Forgot Password' on the login screen and follow instructions.
  - **Can I use this app offline?**
    Yes, some features are available offline after the initial setup.

### Functional Requirements

- The component must:
  - Display a list of FAQ questions and their answers (individual container).
  - Allow only one question to be expanded at a time.
  - Collapse an expanded question if it is clicked again.

- Each FAQ item must include:
  - A question button that toggles its expanded state.
  - An answer section that is conditionally rendered only when active.

- A chevron icon from `react-icons/fi` (or similar):
  - `FiChevronDown` when collapsed.
  - `FiChevronUp` when expanded.

- Clicking a question should:
  - Expand its answer and show the `FiChevronUp` icon.
  - Collapse the previously opened question (if any).
  - Show `FiChevronDown` when the question is collapsed again.
