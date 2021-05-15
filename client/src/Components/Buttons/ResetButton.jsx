import React from "react";

const ResetButton = ({ text }) => {
  return (
    <button className="btn btn__reset mr-small" type="reset">
      {text}
    </button>
  );
};

export default ResetButton;
