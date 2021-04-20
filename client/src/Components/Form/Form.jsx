import React from "react";
import Input from "../Input/Input";
import "./form.scss";

const Form = () => {
  return (
    <form className="form" action="">
      <div className="div">
        <Input />
        <Input />
      </div>
      <Input />
      <Input />
      <Input />
      <Input />
    </form>
  );
};

export default Form;
