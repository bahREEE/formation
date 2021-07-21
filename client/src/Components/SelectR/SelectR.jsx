import React from "react";
import Select from "react-select";
import "./selectR.scss";

const SelectR = ({
  isMulti,
  options,
  handleChange,
  defaultValue,
  error,
  defaultText,
  action,
}) => {
  return action === "add" ? (
    <div className="form__group">
      <Select
        defaultValue={defaultValue}
        classNamePrefix={`react-select  ${error && "react-select--error"}`}
        placeholder={defaultText}
        isMulti
        onChange={handleChange}
        options={options}
      />

      {error && <div className="message__error">{error}</div>}
    </div>
  ) : (
    defaultValue.length !== 0 && (
      <div className="form__group">
        <Select
          defaultValue={defaultValue}
          classNamePrefix={`react-select  ${error && "react-select--error"}`}
          placeholder={defaultText}
          isMulti
          onChange={handleChange}
          options={options}
        />

        {error && <div className="message__error">{error}</div>}
      </div>
    )
  );
};

export default SelectR;
