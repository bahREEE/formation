import React, { useEffect, useState } from "react";
import { Switch, Redirect } from "react-router-dom";
import ProtectedRouter from "./Routers/ProtectedRouter";
import UnProtectedRouter from "./Routers/UnProtectedRouter";
import AdminAcceuil from "./Pages/Admin/Acceuil";
import UserAcceuil from "./Pages/User/Acceuil";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import "./App.css";

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
          <Switch>
            <ProtectedRouter
              path="/admin"
              exact
              privilege="admin"
              component={AdminAcceuil}
              role={user.role}
            />
            <ProtectedRouter
              path="/user"
              exact
              privilege="user"
              component={UserAcceuil}
              role={user.role}
            />
          </Switch>
        )}
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
};

export default App;
