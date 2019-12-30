import React, { Suspense } from 'react';

const LoginContainer = React.lazy(() =>
  import(
    'components/Login/Login.Container' /* webpackChunkName: "Login.Container" */
  ),
);

const appRoutes = {
  authentication: {
    login: {
      path: '/login',
      component: LoginContainer,
      needAuth: false,
    },
  },
};

const defaultAuthenticatedRoute = '/';
const defaultUnauthenticatedRoute = '/login';

const getAllRoutesArray = () =>
  Object.keys(appRoutes)
    .map(key =>
      Object.keys(appRoutes[key]).reduce((allRoutes, innerKey) => {
        allRoutes.push(appRoutes[key][innerKey]);
        return allRoutes;
      }, []),
    )
    .flat();
export {
  appRoutes,
  defaultAuthenticatedRoute,
  defaultUnauthenticatedRoute,
  getAllRoutesArray,
};
