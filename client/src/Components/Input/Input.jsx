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
}) => {
  return (
    <div class="form__group">
      <input
        type="input"
        className={`form__field  ${error && "form__field--error"}`}
        placeholder="Name"
        name="name"
        id="name"
        required
        // onChange={(e) => handleChange(e.target.value, name)}
      />
      <label
        for="name"
        className={`form__label  ${error && "form__label--error"} ${
          required && "form__label--required"
        } `}
      >
        Name
      </label>
      {error && <div className="message__error">{error}</div>}
    </div>
  );
};

export default Input;
