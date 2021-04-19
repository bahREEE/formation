import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Container from "../../Components/Container/Container";
import { AdminRoutes } from "../../Constant/routes";
import "./main.scss";

const MainAdmin = () => {
  return (
    <Fragment>
      <Dashboard />
      <main className="main">
        <Switch>
<<<<<<< HEAD
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
          <Route path="/admin" exact render={() => <h1>Acceuil Admin</h1>} />
=======
          {AdminRoutes.map((route, index) => (
            <Route
              key={index}
              path={`/admin${route.path}`}
              exact
              render={(props) => (
                <Container
                  title={route.title}
                  component={route.component}
                  {...props}
                />
              )}
            />
          ))}
>>>>>>> 3bbdb8764f74225552f11bd7870cf17824aec464
          <Redirect to="/admin" />
        </Switch>
      </main>
    </Fragment>
  );
};

export default MainAdmin;
