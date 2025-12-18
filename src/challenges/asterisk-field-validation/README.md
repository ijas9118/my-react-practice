Create a React component that allows users to input and validate required fields for **Name** and **Location**. It should display a red asterisk for mandatory fields, highlight validation errors when fields are left empty, and show a success message with submitted values when both fields are filled correctly.

### Requirements

- The form must:
  - Contain two input fields: **Name** and **Location**.
  - Display labels for both fields with red asterisks (`*`) indicating they are required.
  - Show placeholder text:
    - **"Enter your name"** for the Name field.
    - **"Enter your location"** for the Location field.

- Validation behavior:
  - On form submission:
    - If either field is empty:
      - Highlight the input with an error style.
      - Show an inline error message (e.g. "Location is required").
    - If both fields are filled:
      - Show a success message containing the submitted name and location.

- Success message:
  - Appears only if both fields pass validation.
  - Message format should be:
    ```
    Submitted Successfully!
    Name: [user input]
    Location: [user input]
    ```
