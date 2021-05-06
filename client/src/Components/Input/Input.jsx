import React from "react";
import "./input.scss";

const Input = ({
  type,
  placeholder,
  name,
  id,
  handleChange,
  error,
  required,
  defaultValue,
  disabled,
}) => {
  return (
    <div className="form__group">
      <input
        type={type}
        className={`form__field  ${error && "form__field--error"}`}
        placeholder={placeholder}
        name={placeholder}
        id={id}
        required={required}
        onChange={(e) => handleChange(e.target.value, name)}
        defaultValue={defaultValue}
        disabled={disabled}
      />
      <label
        htmlFor={id}
        className={`form__label  ${error && "form__label--error"} ${
          required && "form__label--required"
        } `}
      >
        {placeholder}
      </label>
      {error && <div className="message__error">{error}</div>}
    </div>
  );
};

export default Input;
