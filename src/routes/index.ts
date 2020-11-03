import loadable from '@loadable/component';
import Dashboard from '../pages/Dashboard';
export interface IRouter {
  path: string;
  exact?: boolean;
  name: string;
  navigatePath?: string;
  isProtected?: boolean;
  component: React.ComponentType;
}
export const Login = loadable(() => import('../pages/Login'));
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
