import React from "react";

export const InputField: React.FC<{
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}> = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      maxLength={2}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-12 text-center border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};
