import React from "react";
import Cross from "../../assets/svgs/Cross";
import "./model.scss";

const Model = ({ setModelComponent, component: Component }) => {
  return (
    <div className="model">
      <div className="model__container">
        <Cross
          className="model__container--icon"
          setModelComponent={setModelComponent}
        />
        <div className="model__content">{Component}</div>
      </div>
    </div>
  );
};

export default Model;
