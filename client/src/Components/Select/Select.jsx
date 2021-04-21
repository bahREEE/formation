import React, { Fragment } from "react";
import "./select.scss";
import "../Input/input.scss";

const Select = ({ error, name, handleChange, options }) => {
  return (
    <Fragment>
      <div className={`select  ${error && "select--error"}`}>
        <select
          id="standard-select"
          name={name}
          onChange={(e) => handleChange(e.target.value, name)}
        >
          <option value="none" defaultValue disabled hidden>
            Select an Option
          </option>
          {options?.map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <span className="focus"></span>
      </div>
      {error && <div className="message__error">"he</div>}
    </Fragment>
  );
};

export default Select;
