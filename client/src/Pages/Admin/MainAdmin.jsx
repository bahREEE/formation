import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Accounts from "./Accounts/Accounts";
import "./main.scss";

const MainAdmin = () => {
  return (
    <Fragment>
      <Dashboard />
      <main className="main">
        <h1>Admin Acceuil</h1>
        <Switch>
          <Route path="/admin/account" component={Accounts} />
          <Redirect to="/admin" />
        </Switch>
      </main>
    </Fragment>
  );
};

export default MainAdmin;
