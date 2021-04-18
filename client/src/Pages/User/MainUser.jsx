import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Accounts from "../Admin/Accounts/Accounts";

const MainUser = () => {
  return (
    <Fragment>
      <Dashboard />
      <main className="main">
        <Switch>
          <Route path="/user/accounts" exact component={Accounts} />
          <Route
            path="/user/formations"
            exact
            render={() => <h1>Formations</h1>}
          />
          <Route path="/" render={() => <h1>Acceuil User</h1>} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Fragment>
  );
};

export default MainUser;
