import React, { Fragment, useEffect, useState } from "react";
import { Switch, Redirect } from "react-router-dom";
import ProtectedRouter from "./Routers/ProtectedRouter";
import UnProtectedRouter from "./Routers/UnProtectedRouter";
import HeadBar from "./Components/HeadBar/HeadBar";
import Input from "./Components/Input/Input";
import { AuthenticateRouters, MainRoutes } from "./Constant/routes";
import "./App.scss";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const client = { username: "bahri", role: "admin" };
    localStorage.setItem("client", JSON.stringify(client));

    switch (client.role) {
      case "admin":
      case "user":
        setUser(client);
        break;
      default:
        setUser(null);
        break;
    }
  }, []);

  return (
    <div className="App">
      <Switch>
        {AuthenticateRouters.map((route, index) => (
          <UnProtectedRouter
            key={index}
            component={route.component}
            path={route.path}
            exact
            user={user}
          />
        ))}

        {user && (
          <Fragment>
            <HeadBar />
            <div className="client__container">
              <Switch>
                {MainRoutes.map((route, index) => (
                  <ProtectedRouter
                    key={index}
                    path={route.path}
                    privilege={route.privilege}
                    component={route.component}
                    role={user.role}
                  />
                ))}
              </Switch>
              <Input />
            </div>
          </Fragment>
        )}
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
};

export default App;
