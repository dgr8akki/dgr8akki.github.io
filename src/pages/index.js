import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './landingPage';
import TestPage from './TestPage';

class Pages extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/test" component={TestPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Pages;
