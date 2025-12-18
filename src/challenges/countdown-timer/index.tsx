import React, { useCallback, useEffect, useState } from "react";
import { InputField } from "./InputField";

const CountdownTimer: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState<{ hh: string; mm: string; ss: string }>({
    hh: "",
    mm: "",
    ss: "",
  });

  const isValid = time.hh !== "" || time.mm !== "" || time.ss !== "";

  const handleChange = (key: "hh" | "mm" | "ss", value: string) => {
    if (!/^\d*$/.test(value)) return;

    setTime((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime({
      hh: "",
      mm: "",
      ss: "",
    });
  };

  const runTimer = useCallback(() => {
    setTime((prev) => {
      const hour = parseInt(prev.hh || "0");
      const min = parseInt(prev.mm || "0");
      const sec = parseInt(prev.ss || "0");

      if (hour === 0 && min === 0 && sec === 0) {
        handleReset();
        alert("Timer ended");
        return prev;
      }

      if (sec > 0) {
        return { ...prev, ss: String(sec - 1) };
      } else if (min > 0) {
        return { ...prev, mm: String(min - 1), ss: "59" };
      } else if (hour > 0) {
        return { hh: String(hour - 1), mm: "59", ss: "59" };
      }

      return prev;
    });
  }, []);

  useEffect(() => {
    let tid: ReturnType<typeof setInterval>;
    if (isRunning) {
      tid = setInterval(() => runTimer(), 1000);
    }

    return () => clearInterval(tid);
  }, [isRunning, runTimer]);

  return (
      <>
      <h3 className="text-4xl text-center font-semibold">Countdown Timer</h3>
      <div className="mt-8 flex flex-col items-center justify-center gap-8">
        <div className="flex items-center gap-3">
          {!isRunning ? (
            <>
              <InputField
                placeholder="HH"
                value={time.hh}
                onChange={(val) => handleChange("hh", val)}
              />
              <span>:</span>
              <InputField
                placeholder="MM"
                value={time.mm}
                onChange={(val) => handleChange("mm", val)}
              />
              <span>:</span>
              <InputField
                placeholder="SS"
                value={time.ss}
                onChange={(val) => handleChange("ss", val)}
              />
            </>
          ) : (
            <>
              <div className="text-3xl font-mono flex items-center gap-2">
                <span>{time.hh ? (parseInt(time.hh) < 10 ? `0${time.hh}` : time.hh) : "00"}</span>
                <span>:</span>
                <span>{time.mm ? (parseInt(time.mm) < 10 ? `0${time.mm}` : time.mm) : "00"}</span>
                <span>:</span>
                <span>{time.ss ? (parseInt(time.ss) < 10 ? `0${time.ss}` : time.ss) : "00"}</span>
              </div>
            </>
          )}
        </div>
        <div className="flex items-center gap-4">
          {!isRunning ? (
            <>
              <button
                className={`font-medium px-4 py-1 rounded ${
                  isValid
                    ? "bg-emerald-500 text-white cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!isValid}
                onClick={() => setIsRunning((prev) => !prev)}
              >
                Start
              </button>
            </>
          ) : (
            <>
              <button
                className={`font-medium px-4 py-1 rounded ${
                  isValid
                    ? "bg-orange-500 text-white cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                onClick={() => setIsRunning(false)}
              >
                Pause
              </button>
              <button
                className={`font-medium px-4 py-1 rounded ${
                  isValid
                    ? "bg-red-500 text-white cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                onClick={handleReset}
              >
                Reset
              </button>
            </>
          )}
        </div>
      </div>
      </>
  );
};

export default CountdownTimer;
