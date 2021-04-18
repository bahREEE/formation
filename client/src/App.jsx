import React, { Fragment, useEffect, useState } from "react";
import { Switch, Redirect } from "react-router-dom";
import ProtectedRouter from "./Routers/ProtectedRouter";
import UnProtectedRouter from "./Routers/UnProtectedRouter";
import MainAdmin from "./Pages/Admin/MainAdmin";
import MainUser from "./Pages/User/MainUser";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import HeadBar from "./Components/HeadBar/HeadBar";
import "./App.scss";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      "client",
      JSON.stringify({ username: "bahri", role: "admin" })
    );
    setUser(JSON.parse(localStorage.getItem("client")));
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
                <ProtectedRouter
                  path="/admin"
                  exact
                  privilege="admin"
                  component={MainAdmin}
                  role={user.role}
                />
                <ProtectedRouter
                  path="/user"
                  exact
                  privilege="user"
                  component={MainUser}
                  role={user.role}
                />
              </Switch>
            </div>
          </Fragment>
        )}
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
};

export default App;
