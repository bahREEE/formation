import React from "react";
import "./container.scss";

//imr // sfc

const Container = ({ title, component: Component }) => {
  return (
    <div className="container">
      <h1 className="container__title">{title}</h1>
      <div className="container__content">
        <Component />
      </div>
    </div>
  );
};

export default Container;
