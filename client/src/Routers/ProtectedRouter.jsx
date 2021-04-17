import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRouter = ({ component: Component, privilege, role, rest }) => {
  console.log(privilege);
  return (
    <Route
      {...rest}
      render={(props) =>
        privilege === role ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRouter;
