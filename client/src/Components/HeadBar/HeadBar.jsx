import React from "react";
import { Link } from "react-router-dom";
import "./headbar.scss";

const HeadBar = () => {
  return (
    <div className="headbar">
      <h1 className="headbar__logo">Formation</h1>
      <Link to="/admin" className="headbar__logout">
        Logout
      </Link>
    </div>
  );
};

export default HeadBar;
