import React from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import SubmitButton from "../Buttons/SubmitButton.jsx";
import "../../Style/utilities.scss";
import "./form.scss";

const Form = () => {
  return (
    <div className="form">
      <h1>Add user</h1>
      <form className="form__content">
        <div className="mb-small">
          <Input required />
        </div>

        <div className="mb-small">
          <Input required />
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
