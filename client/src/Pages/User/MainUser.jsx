import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Container from "../../Components/Container/Container";
import Dashboard from "../../Components/Dashboard/Dashboard";
import {
  userDash,
  userDefaultIdentif,
} from "../../Constant/Dashboards/UserDashboard";
import { UserRoutes } from "../../Constant/routes";

const MainUser = () => {
  return (
    <Fragment>
      <Dashboard dashboard={userDash} DefaultIdentif={userDefaultIdentif} />
      <main className="main">
        <Switch>
          {UserRoutes.map((route, index) => (
            <Route
              key={index}
              path={`/user${route.path}`}
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

          <Redirect to="/user" />
        </Switch>
      </main>
    </Fragment>
  );
};

export default MainUser;
