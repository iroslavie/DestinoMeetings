import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const MultiSelectField = ({ options, onChange, name, label }) => {
  const handleChange = (value) => {
    onChange({ name: name, value });
  };
  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((option) => ({
          label: options[option].name,
          value: options[option]._id,
        }))
      : options;

  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <Select
        isMulti
        closeMenuOnSelect={false}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={onChange}
        options={optionsArray}
        name={name}
      />
    </div>
  );
};

MultiSelectField.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string,
  label: PropTypes.string,
};

export default MultiSelectField;
