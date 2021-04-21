import React from "react";

const ResetButton = ({ text }) => {
  return (
    <button className="btn__reset" type="reset">
      {text}
    </button>
  );
};

export default ResetButton;
