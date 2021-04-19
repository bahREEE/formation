import React, { Fragment, useEffect, useState } from "react";
import { Switch, Redirect } from "react-router-dom";
import ProtectedRouter from "./Routers/ProtectedRouter";
import UnProtectedRouter from "./Routers/UnProtectedRouter";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import HeadBar from "./Components/HeadBar/HeadBar";
import "./App.scss";
import { MainRoutes } from "./Constant/routes";
import Input from "./Components/Input/Input";

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
        <UnProtectedRouter component={Login} path="/login" exact user={user} />
        <UnProtectedRouter
          component={Signup}
          path="/signup"
          exact
          user={user}
        />
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
