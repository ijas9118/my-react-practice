Create a React component that allows users to input a number and checks whether the number is even or odd. The component displays the result with a 1-second loading delay and handles invalid inputs.

## Requirements

1. A user can enter a number in an input field.
2. The input box should have a placeholder: `"Enter a number"`
3. A button is provided to initiate the check.
4. Upon clicking the button:
    - Any previous result should be cleared immediately.
    - A loading indicator should appear for 1 second to simulate processing.
    - In that one second a label `"Checking..."` should appear in the result-area.
    - After the delay, the result should display in the format:
        - `"The number X is even."`
        - `"The number X is odd."`
5. If the input is empty or not a valid number, show a clear error message such as:
    `"Please enter a valid number."`

## Edge Cases & Constraints

- Non-numeric input should display "Please enter a valid number."
- Empty input should be handled gracefully.
- Leading/trailing spaces should be ignored.
- Large numbers should be processed correctly.
- Loading message "Checking..." should be shown before result.
- The result display must only appear after loading completes.
