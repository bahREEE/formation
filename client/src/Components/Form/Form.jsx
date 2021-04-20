import React, { useState } from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import SubmitButton from "../Buttons/SubmitButton.jsx";
import "../../Style/utilities.scss";
import "./form.scss";

const Form = () => {
  const [user, setUser] = useState({ username: "", password: "", role: "" });
  const [error, setError] = useState({ username: "", password: "", role: "" });

  const handleChange = (value, name) => {
    setUser({ ...user, [`${name}`]: value });
    setError({ ...error, [`${name}`]: "" });
  };

  return (
    <div className="form">
      <h1>Add user</h1>
      <form className="form__content">
        <div className="mb-small">
          <Input
            name="username"
            id="username"
            type="text"
            placeholder="username"
            required
            handleChange={handleChange}
            error={error.username}
          />
        </div>

        <div className="mb-small">
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="password"
            required
            handleChange={handleChange}
            error={error.password}
          />
        </div>
        <div className="mb-small">
          <Select />
        </div>

        <div className="form__submit mt-meduim">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default Form;
