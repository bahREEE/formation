import React, { Fragment, useState } from "react";
import { Switch, Redirect } from "react-router-dom";
import ProtectedRouter from "./Routers/ProtectedRouter";
import UnProtectedRouter from "./Routers/UnProtectedRouter";
import HeadBar from "./Components/HeadBar/HeadBar";
import Model from "./Components/Model/Model";
import { AuthenticateRouters, MainRoutes } from "./Constant/routes";
import "./App.scss";

const App = () => {
  const [MComponent, setModelComponent] = useState(null);
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
                  <Component setModelComponent={setModelComponent} />
                </div>
              </Fragment>
            )}
          />
        ))}

        <Redirect from="/" to="/login" />
      </Switch>

      {MComponent && (
        <Model
          setModelComponent={setModelComponent}
          component={MComponent}
        ></Model>
      )}
    </div>
  );
};

export default App;
