import Loadable from 'react-loadable';
import Preloader from '../components/Preloader';
import Dashboard from '../pages/Dashboard';
export interface IRouter {
  path: string;
  exact?: boolean;
  name: string;
  navigatePath?: string;
  isProtected?: boolean;
  component: React.ComponentType;
}

const Login = Loadable({
  loading: Preloader,
  loader: () => import('../pages/Login'),
});

const routes: IRouter[] = [
  //Auth
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    exact: true,
    path: '/dashbroad',
    name: 'Dashbroad',
    component: Dashboard,
    navigatePath: '/login',
    isProtected: true,
  },
];
export default routes;
