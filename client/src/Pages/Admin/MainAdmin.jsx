import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Container from "../../Components/Container/Container";
import Accounts from "./Accounts/Accounts";
import "./main.scss";

const MainAdmin = () => {
  return (
    <Fragment>
      <Dashboard />
      <main className="main">
        <Switch>
          <Route path="/admin/accounts" exact component={Accounts} />
          <Route
            path="/admin/formations"
            exact
            render={() => <h1>Formations</h1>}
          />
          <Route
            path="/admin/settings"
            exact
            render={() => <h1>Settings</h1>}
          />

          <Route path="/admin" exact render={() => <Container />} />
          <Redirect to="/admin" />
        </Switch>
      </main>
    </Fragment>
  );
};

export default MainAdmin;
