import React, { Fragment } from "react";
import "./select.scss";
import "../Input/input.scss";

const Select = ({
  error,
  name,
  handleChange,
  options,
  defaultText,
  defaultValue,
}) => {
  return (
    <Fragment>
      <div className={`select  ${error && "select--error"}`}>
        <select
          id="standard-select"
          name={name}
          onChange={(e) => handleChange(e.target.value, name)}
          defaultValue={defaultValue}
        >
          <option
            value="none"
            disabled
            hidden
            selected={defaultValue === "none"}
          >
            {defaultText}
          </option>
          {options?.map((option, index) => (
            <option
              key={index}
              value={option.value}
              selected={defaultValue === option.value}
            >
              {option.name}
            </option>
          ))}
        </select>
        <span className="focus"></span>
      </div>
      {error && <div className="message__error">{error}</div>}
    </Fragment>
  );
};

export default Select;
