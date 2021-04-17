import React from "react";
import { Route, Redirect } from "react-router-dom";

const UnProtectedRouter = ({ component: Component, user, rest }) => {
  const redirectPath = () => {
    if (!user) return "/login";
    if (user.role === "admin") return "/admin";
    if (user.role === "user") return "/user";
    return "/login";
  };
  console.log("login");
  console.log(user);
  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? <Component {...props} /> : <Redirect to={redirectPath()} />
      }
    />
  );
};

export default UnProtectedRouter;
