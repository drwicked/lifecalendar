import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import Calendar from './Calendar';
import Home from './Home';

const Router = () => (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/:year/:month/:day" component={ Calendar } />
  </Switch>
);

export default Router;
