import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nomatch from "../components/nomatch/Nomatch";
import Homepage from "../pages/homepage/Homepage";

export default class Router extends Component {
  homepageRender = () => {
    return <Homepage />;
  };

  render() {
    return (
      <div className="my-router">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={this.homepageRender}></Route>
            <Nomatch />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
