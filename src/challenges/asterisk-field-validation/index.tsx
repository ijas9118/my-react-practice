import React, { useState } from "react";

const AsteriskFieldValidation = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState<{ name?: string; location?: string }>({});
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim() && location.trim()) setSubmit(true);

    const obj: { name?: string; location?: string } = {};
    if (name.trim() === "") obj.name = "Name is required.";
    if (location.trim() === "") obj.location = "Location is required.";

    setErrors(obj);
  };

  const hasError = Object.keys(errors).length > 0;
  return (
      <div className="flex justify-center items-start mt-10">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Asterisk Field Validation
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            {/* Location Field */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                id="location"
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={`mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.location ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.location && <p className="mt-1 text-sm text-red-500">{errors.location}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>

          {/* Success Message */}
          {submit && !hasError && (
            <div className="mt-6 p-4 border border-green-300 bg-green-50 text-green-800 rounded-md">
              <p className="font-medium">Submitted Successfully!</p>
              <p>Name: {name}</p>
              <p>Location: {location}</p>
            </div>
          )}
        </div>
      </div>
  );
};

export default AsteriskFieldValidation;
