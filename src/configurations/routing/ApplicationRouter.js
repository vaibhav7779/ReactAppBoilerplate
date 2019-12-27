import {
  appRoutes,
  defaultAuthenticatedRoute,
  defaultUnauthenticatedRoute,
} from 'configurations/routing/AppNavigation';
import isAuthenticated from 'utils/global';
import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

const LoginContainer = React.lazy(() =>
  import('components/Login/Login.Container'),
);

const ApplicationRouter = () => (
  <Router>
    <Suspense fallback={null}>
      <Switch>
        <UnauthenticatedRoute path={appRoutes.authentication.login}>
          <LoginContainer />
        </UnauthenticatedRoute>
      </Switch>
    </Suspense>
  </Router>
);

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

export default ApplicationRouter;
