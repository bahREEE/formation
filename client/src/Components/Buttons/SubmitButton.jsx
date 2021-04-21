import React from "react";
import "./button.scss";

const SubmitButton = ({ text }) => {
  return (
    <button className="btn btn__submit" type="submit">
      {text}
    </button>
  );
};

export default SubmitButton;
