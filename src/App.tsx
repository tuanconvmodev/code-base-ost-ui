import './stylesheets/app.scss';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Loadable from 'react-loadable';
import Preloader from './components/Preloader';

const DefaultLayout = Loadable({
  loading: Preloader,
  loader: () => import('./layouts/DefaultLayout'),
});

function App() {
  return (
    <Router>
      <DefaultLayout />
    </Router>
  );
}

export default App;
