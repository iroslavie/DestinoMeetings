import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({ name, value = false, onChange, children, error }) => {
  const handleChange = () => {
    const newValue = !value;
    onChange({ name, value: newValue });
  };

  const shouldShowError = error && !value;

  return (
    <div className="form-check mb-3">
      <input
        type="checkbox"
        className={`form-check-input ${shouldShowError ? "is-invalid" : ""}`}
        checked={value}
        id={name}
        onChange={handleChange}
      />
      <label htmlFor={name} className="form-check-label">
        {children}
      </label>
      {error && !value && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

CheckBoxField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
  error: PropTypes.string,
};

export default CheckBoxField;
