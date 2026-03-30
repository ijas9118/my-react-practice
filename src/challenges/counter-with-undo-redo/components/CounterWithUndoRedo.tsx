import { useReducer } from "react";
import style from "./CounterWithUndoRedo.module.css";
import {
  ACTIONS,
  counterReducer,
  initialState,
  loadState,
  STORAGE_KEY,
} from "../reducers/counterReducer";
import { useShortcuts } from "../hooks/useShortcuts";
import { usePersistentState } from "../hooks/usePersistentState";
import HistorySection from "./HistorySection";

const CounterWithUndoRedo = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState, loadState);

  useShortcuts(dispatch);
  usePersistentState(STORAGE_KEY, state);

  return (
    <div className={style.container}>
      <h2 className={style.title}>Count: {state.present}</h2>

      <div className={style["button-group"]}>
        <button
          className={style.button}
          onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
        >
          Increment
        </button>
        <button
          className={style.button}
          onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
        >
          Decrement
        </button>
        <button
          className={style.button}
          disabled={state === initialState}
          onClick={() => dispatch({ type: ACTIONS.RESET })}
        >
          Reset
        </button>
      </div>

      <div className={style["button-group"]}>
        <button
          className={style.button}
          disabled={state.past.length === 0}
          onClick={() => dispatch({ type: ACTIONS.UNDO })}
        >
          Undo
        </button>
        <button
          className={style.button}
          disabled={state.future.length === 0}
          onClick={() => dispatch({ type: ACTIONS.REDO })}
        >
          Redo
        </button>
      </div>

      <HistorySection past={state.past} future={state.future} />
    </div>
  );
};

export default CounterWithUndoRedo;
