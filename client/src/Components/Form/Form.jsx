import React from "react";
import Input from "../Input/Input";
import SubmitButton from "../Buttons/SubmitButton.jsx";
import "../../Style/style.scss";

import "./form.scss";

const Form = () => {
  return (
    <div className="div">
      <form className="form" action="">
        <Input required />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <div className="__submit">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default Form;
