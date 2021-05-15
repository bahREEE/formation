import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Container from "../../Components/Container/Container";
import Dashboard from "../../Components/Dashboard/Dashboard";
import { UserRoutes } from "../../Constant/routes";
import {
  userDash,
  userDefaultIdentif,
} from "../../Constant/Dashboards/UserDashboard";

const MainUser = ({ setModelComponent }) => {
  return (
    <Fragment>
      <Dashboard dashboard={userDash} DefaultIdentif={userDefaultIdentif} />
      <main className="main">
        <Switch>
          {UserRoutes.map(({ title, component: Component, path }, index) => (
            <Route
              key={index}
              path={`/user${path}`}
              exact
              render={(props) => (
                <Container title={title} {...props}>
                  <Component setModelComponent={setModelComponent} />
                </Container>
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
