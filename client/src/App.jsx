import React, { Fragment } from "react";
import { Switch, Redirect } from "react-router-dom";
import ProtectedRouter from "./Routers/ProtectedRouter";
import UnProtectedRouter from "./Routers/UnProtectedRouter";
import HeadBar from "./Components/HeadBar/HeadBar";
import { AuthenticateRouters, MainRoutes } from "./Constant/routes";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Switch>
        {AuthenticateRouters.map((route, index) => (
          <UnProtectedRouter
            key={index}
            component={route.component}
            path={route.path}
            exact
          />
        ))}

        {MainRoutes.map(({ path, privilege, component: Component }, index) => (
          <ProtectedRouter
            key={index}
            path={path}
            privilege={privilege}
            component={() => (
              <Fragment>
                <HeadBar />
                <div className="client__container">
                  <Component />
                </div>
              </Fragment>
            )}
          />
        ))}

        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
};

export default App;
