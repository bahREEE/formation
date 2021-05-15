import React from "react";
import DeleteButon from "../Buttons/DeleteButon";

const DeleteModel = ({ deleteObj }) => {
  return (
    <div className="model__delete">
      <p className="model__para">Are you sure you want to delete this ?</p>
      <div className="model__footer">
        <DeleteButon deleteObj={deleteObj} />
      </div>
    </div>
  );
};

export default DeleteModel;
