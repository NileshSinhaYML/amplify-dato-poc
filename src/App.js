import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import LayoutRoute from './layouts/LayoutRoute';
import APP_ROUTES from './appRoutes';
import Home from './components/home/Home';
import './style/_main.scss';

/**
 * @description
 * Function to render the app component
 * @returns {node} the app component
 */
const App = () => (
  <Router>
    <Switch>
      <Route path={APP_ROUTES.DEFAULT} exact>
        <Redirect to={APP_ROUTES.HOME} />
      </Route>
      <LayoutRoute path={APP_ROUTES.HOME} component={Home} />
      <LayoutRoute path={APP_ROUTES.ADD_TO_DO} component={() => <div />} />
      <LayoutRoute path={APP_ROUTES.LIST_TO_DO} component={() => <div />} />
    </Switch>
  </Router>
);

export default App;
