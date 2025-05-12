import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
  const handleChange = (selectedOptions) => {
    const value = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    onChange({ target: { name, value } });
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
        defaultValue={defaultValue}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
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
  defaultValue: PropTypes.array,
};

export default MultiSelectField;
