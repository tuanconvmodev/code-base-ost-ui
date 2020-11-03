import React from 'react';
import loadable from '@loadable/component';
import {
  Redirect,
  Route,
  Switch,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import routes from '../../routes';

export const HeaderMenu = loadable(() => import('./MenuHeader'));

const RouteWithSubRoutes = (route: any) => (
  <Route
    path={route.path}
    render={({ location }) => {
      const isLogin = location.pathname.indexOf('login') > -1;
      if (isLogin) {
        return <route.component {...route} />;
      }
      const token = localStorage.getItem('access_token');
      if (!token && route.isProtected) {
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        );
      }
      return (
        <main className="main">
          <route.component
            system={route.system}
            path={route.path}
            name={route.name}
            navigatePath={route.navigatePath}
            isProtected={route.isProtected}
            history={route.history}
            location={route.location}
            match={route.match}
          />
        </main>
      );
    }}
  />
);

const DefaultLayout: React.FC = (
  props: any & RouteComponentProps,
): JSX.Element => {
  return (
    <div>
      <div id="DefaultLayout" className="app">
        <HeaderMenu {...props} />
        <Switch>
          {routes.map((route) => (
            <RouteWithSubRoutes key={route.path} {...route} {...props} />
          ))}
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(DefaultLayout);
