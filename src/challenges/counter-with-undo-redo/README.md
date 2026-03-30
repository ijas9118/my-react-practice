# Counter With Undo / Redo

## Problem

Build a simple counter application that allows users to increase or decrease a number. The app must also support undo and redo actions, similar to how text editors work.

The goal is to manage the counter state correctly and keep track of previous actions.


## Basic Requirements

Your application must support the following actions:

- **Increment** — Increase the counter by 1
- **Decrement** — Decrease the counter by 1
- **Reset** — Set the counter back to 0
- **Undo** — Go back to the previous counter value
- **Redo** — Reapply the last undone action
- **Show history count** — Display how many actions are stored in history

### Example UI

```bash
Count: 5

[ Increment ] [ Decrement ] [ Reset ]

[ Undo ] [ Redo ]

Past: []
Future: []
```


## Behavior Rules (Constraints)

1. **Undo**
   - Should return the counter to its previous value.
   - Multiple undo operations should step backward through history.

2. **Redo**
   - Should restore the last undone action.
   - Only works after an undo.

3. **Reset**
   - Sets the counter value to `0`.
   - Clears all history.

4. **Button States**
   - Disable **Undo** if there is no previous state.
   - Disable **Redo** if there is nothing to redo.


## Data Handling Expectations

- Every change to the counter should be stored in history.
- History should allow moving backward (undo) and forward (redo).
- The current counter value should always reflect the latest state.


## Follow-ups (Senior-Level Extensions)

These are optional advanced requirements to increase difficulty:

### 1. Limit History Size

- Store only the last **10 actions**.
- When the limit is reached, remove the oldest action.

### 2. Persist Data

- Save the counter value and history in `localStorage`.
- Restore them when the page reloads.

### 3. Keyboard Shortcuts

Add support for:

| Shortcut   | Action |
| ---------- | ------ |
| `Ctrl + Z` | Undo   |
| `Ctrl + Y` | Redo   |
| `Ctrl + R` | Reset  |
