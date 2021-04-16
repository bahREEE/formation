import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Routers/Home";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" render={(props) => <Home />} />
        <Route path="/login" render={(props) => <h1>Login</h1>} />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
};

export default App;
