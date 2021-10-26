import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./components/Home";

const Root = () => {
  return (
    <Router basename="/">
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
