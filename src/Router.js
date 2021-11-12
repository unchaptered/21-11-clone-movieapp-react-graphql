import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

export default () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path=":id" component={Detail} />
  </Router>
);
