import React from "react";

const Dropdown = ({ label, onSelectedChange, options }) => {
  const renderedOptions = options.map((option) => {
    return (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    );
  });
  return (
    <div>
      <div className="form-group">
        <label>{label}</label>
        <select
          className="form-control"
          onChange={(e) => onSelectedChange(e.target.value)}
        >
          {renderedOptions}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
