import React from 'react';
import { Route } from 'react-router-dom';
import routes from '../routes';
const DefaultBreadcrumb: React.FC = () => {
  return (
    <Route
      path="*"
      render={({ location }) => {
        let name = '';
        console.log('location', routes, location);
        let currentRoute = routes.filter(
          (value) => value.path === location.pathname,
        );
        console.log('currentRoute', currentRoute);
        if (currentRoute.length > 0) {
          name = currentRoute[0].name;
        }
        return (
          <div id="DefaultBreadcrumb" className="row breadcrumb">
            <div className="col">{name !== '' && <h3>{name}</h3>}</div>
            <div className="col justify-content-center">
              <div className="info">
                <a href="//#endregion" className="active">
                  1. Task Generation
                </a>
                <span className="e-icons e-M_SingleRightArrow"></span>
                <a href="//#endregion">2. Shift Planning</a>
              </div>
            </div>
            <div className="col justify-content-end">
              <a href="//#region ">Last updated 09/01/2020 17:35</a>
            </div>
          </div>
        );
      }}
    />
  );
};
export default DefaultBreadcrumb;
