import React, { Component, useState } from "react";
import "./container.scss";

//imr // sfc

const Container = ({ title, Component }) => {
  const [username, setUSername] = useState("mortadha");

  const [password, setPassowrd] = useState("");

  const [USerme, setUSername] = useState({
    ysername: "",
    password: "",
  });
  return (
    <div className="container">
      <h1 className="container__title">{title}</h1>
      <div className="container__content"></div>
    </div>
  );
};

export default Container;

class Container extends Component {
  state = {
    username: "mortadha",
    password: "",
  };

  render() {
    <div className="container">
      <h1 className="container__title">{this.props.title}</h1>
      <div className="container__content"></div>
    </div>;
  }
}
