import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Container from "../../Components/Container/Container";
import { AdminRoutes } from "../../Constant/routes";
import {
  adminDefaultIdentif,
  adminDash,
} from "../../Constant/Dashboards/AdminDashboard";
import "./main.scss";

const MainAdmin = () => {
  return (
    <Fragment>
      <Dashboard dashboard={adminDash} DefaultIdentif={adminDefaultIdentif} />
      <main className="main">
        <Switch>
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

          <Redirect to="/admin" />
        </Switch>
      </main>
    </Fragment>
  );
};

export default MainAdmin;
