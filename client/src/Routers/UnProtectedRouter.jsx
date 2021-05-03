import React from "react";
import { Route, Redirect } from "react-router-dom";

const UnProtectedRouter = ({ component: Component, rest }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const redirectPath = () => {
    switch (user.authorities[0].authority) {
      case "ADMINISTRATEUR":
        return <Redirect to="/admin" />;

      case "SIMPLE_UTILISATEUR":
        return <Redirect to="/user" />;
      default:
        return <Redirect to="/login" />;
    }
  };

  return (
    <Route
      {...rest}
      render={(props) => (!user ? <Component {...props} /> : redirectPath())}
    />
  );
};

export default UnProtectedRouter;
