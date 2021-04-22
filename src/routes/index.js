import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles.scss';

const Home = lazy(() => import('../screens/home/Home'));
const Details = lazy(() => import('../screens/details/Details'));

const routes = [
  {
    key: 'home',
    path: '/',
    exact: true,
    component: Home,
  }, {
    key: 'details',
    path: '/details',
    exact: true,
    component: Details,
  }, {
    key: 'not-found',
    path: '*',
    exact: true,
    component: () => <div>Page 404!</div>,
  },
];

const renderLoader = () => (
  <div className="wrap-loader">
    <span>Loading...</span>
  </div>
)

export const Routes = () => (
  <BrowserRouter>
    <div className="wrap-routes">
      <Suspense fallback={() => renderLoader()}>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Suspense>
    </div>
  </BrowserRouter>
);
