import { useEffect } from "react";
import type { State } from "../reducers/counterReducer";

export function usePersistentState(key: string, state: State) {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
}
