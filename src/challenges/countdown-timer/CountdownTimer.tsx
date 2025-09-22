import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { InputField } from "./InputField";

const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState({ hh: "", mm: "", ss: "" });

  const handleChange = (key: "hh" | "mm" | "ss", value: string) => {
    if (!/^\d*$/.test(value)) return;

    setTime((prev) => ({ ...prev, [key]: value }));
  };

  const isValid = time.hh !== "" || time.mm !== "" || time.ss !== "";

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <button className="bg-neutral-100 shadow rounded-lg py-1 px-4 flex items-center gap-2">
          <ArrowLeft size={16} /> <span>Back</span>
        </button>

        <h3 className="text-3xl font-serif">Countdown Timer</h3>
      </div>

      <div className="py-8 ">
        <h3 className="text-4xl text-center font-semibold">Countdown Timer</h3>
        <div className="mt-8 flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-3">
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
          </div>
          <div className="flex items-center gap-4">
            <button
              className={`font-medium px-4 py-1 rounded ${
                isValid
                  ? "bg-emerald-500 text-white cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!isValid}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
