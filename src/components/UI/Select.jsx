import React from "react";

const Select = ({
  options = [],
  value,
  onChange,
  placeholder = "Select...",
  darkMode = false,
  ...props
}) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={`block w-full pl-3 pr-10 py-3 text-base border-gray-300 dark:border-gray-700 rounded-md appearance-none ${
          darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
        } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Select;