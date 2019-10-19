import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom';
import MainPage from 'containers/MainPage';
import MapPage from 'containers/MapPage';
import LoginPage from 'containers/LoginPage';

const history = createBrowserHistory();

export default () => (
  <Router history={history}>
    <main>
      <Route path="/" exact component={LoginPage} />
      <Route path="/main" component={MainPage} />
      <Route path="/map" component={MapPage} />
    </main>
  </Router>
);
