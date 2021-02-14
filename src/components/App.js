import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import importedComponent from "react-imported-component";

import Home from "./pages/Home";
import Loading from "./pages/Loading";

const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ "./pages/NoMatch"),
  {
    LoadingComponent: Loading,
  }
);

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
