import React, { Fragment } from "react";
import "./select.scss";
import "../Input/input.scss";

const Select = ({ error, name, handleChange, options }) => {
  return (
    <Fragment>
      <div class={`select  ${error && "select--error"}`}>
        <select
          id="standard-select"
          name={name}
          onChange={(e) => handleChange(e.target.value, name)}
        >
          <option value="none" selected disabled hidden>
            Select an Option
          </option>
          {options?.map((option, index) => (
            <options key={index} value={option.value}>
              {option.name}
            </options>
          ))}
        </select>
        <span class="focus"></span>
      </div>
      {error && <div className="message__error">"he</div>}
    </Fragment>
  );
};

export default Select;
