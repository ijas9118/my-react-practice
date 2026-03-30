import { useEffect } from "react";
import { ACTIONS, type Action } from "../reducers/counterReducer";

export function useShortcuts(dispatch: React.ActionDispatch<[action: Action]>) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.ctrlKey && e.key === "z") {
        e.preventDefault();
        dispatch({ type: ACTIONS.UNDO });
      }
      if (e.ctrlKey && e.key === "y") {
        e.preventDefault();
        dispatch({ type: ACTIONS.REDO });
      }
      if (e.ctrlKey && e.key === "r") {
        e.preventDefault();
        dispatch({ type: ACTIONS.RESET });
      }
    }
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [dispatch]);
}
