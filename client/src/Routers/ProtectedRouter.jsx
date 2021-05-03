import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRouter = ({ component: Component, privilege, rest }) => {
  console.log(rest);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Route
      {...rest}
      render={(props) =>
        user && user.authorities[0].authority === privilege ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRouter;
