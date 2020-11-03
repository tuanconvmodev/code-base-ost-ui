import './stylesheets/app.scss';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import loadable from '@loadable/component';

export const DefaultLayout = loadable(
  () => import('./layouts/default/DefaultLayout'),
);

function App() {
  return (
    <Router>
      <DefaultLayout />
    </Router>
  );
}

export default App;
