export type State = {
  present: number;
  past: number[];
  future: number[];
};

export const initialState: State = {
  present: 0,
  past: [],
  future: [],
};

export const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
  UNDO: "undo",
  REDO: "redo",
} as const;

export type Action =
  | { type: typeof ACTIONS.INCREMENT }
  | { type: typeof ACTIONS.DECREMENT }
  | { type: typeof ACTIONS.RESET }
  | { type: typeof ACTIONS.UNDO }
  | { type: typeof ACTIONS.REDO };

const MAX_HISTORY = 10;

export const STORAGE_KEY = "counter-history-v1";

export const loadState = (): State => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) return initialState;

    return JSON.parse(stored);
  } catch {
    return initialState;
  }
};

export const counterReducer = (state: State, action: Action): State => {
  const { past, present, future } = state;

  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        past: [...past, present].slice(-MAX_HISTORY),
        present: present + 1,
        future: [...future],
      };

    case ACTIONS.DECREMENT:
      return {
        past: [...past, present].slice(-MAX_HISTORY),
        present: present - 1,
        future: [...future],
      };

    case ACTIONS.RESET:
      return initialState;

    case ACTIONS.UNDO: {
      if (past.length === 0) return state;

      const previous = past.at(-1)!;

      return {
        past: past.slice(0, past.length - 1),
        present: previous,
        future: [present, ...future].slice(0, MAX_HISTORY),
      };
    }

    case ACTIONS.REDO: {
      if (future.length === 0) return state;

      const next = future[0];

      return {
        past: [...past, present].slice(-MAX_HISTORY),
        present: next,
        future: future.slice(1),
      };
    }

    default:
      return state;
  }
};
