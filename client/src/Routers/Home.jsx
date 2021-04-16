import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Switch>
        <Route path="/home/page1" render={(props) => <h1>Page1</h1>} />
        <Route path="/home/page2" render={(props) => <h1>Page2</h1>} />
        <Route path="/home/page3" render={(props) => <h1>Page3</h1>} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default Home;
