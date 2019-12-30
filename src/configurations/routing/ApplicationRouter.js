import {
  defaultAuthenticatedRoute,
  defaultUnauthenticatedRoute,
  getAllRoutesArray,
} from 'configurations/routing/AppNavigation';
import isAuthenticated from 'utils/global';
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

const AuthenticatedRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => {
      return isAuthenticated() ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: defaultUnauthenticatedRoute,
            state: { from: location },
          }}
        />
      );
    }}
  />
);

const UnauthenticatedRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) => {
      return isAuthenticated() ? (
        <Redirect
          to={{
            pathname: defaultAuthenticatedRoute,
            state: { from: location },
          }}
        />
      ) : (
        children
      );
    }}
  />
);

const allappRoutes = getAllRoutesArray();
console.log(allappRoutes);
const routes = allappRoutes.map((route, index) => {
  console.log(index, route);
  return route.needAuth ? (
    <AuthenticatedRoute path={route.path} component={route.component} />
  ) : (
    <UnauthenticatedRoute path={route.path} component={route.component} />
  );
});

console.log('routes', routes);

const ApplicationRouter = () => (
  <Router>
    <Suspense fallback={null}>
      <Switch>
        <>{routes}</>
      </Switch>
    </Suspense>
  </Router>
);

export default ApplicationRouter;
