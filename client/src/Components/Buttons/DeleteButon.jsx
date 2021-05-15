import React from "react";

const DeleteButon = ({ deleteObj }) => {
  return (
    <button className="btn btn__delete" onClick={() => deleteObj()}>
      Delete
    </button>
  );
};

export default DeleteButon;
