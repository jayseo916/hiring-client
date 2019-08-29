import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, users } from "./pages/idx";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={users} />
        <Route exact path="/users/:id" component={users} />
      </div>
    );
  }
}

export default App;
