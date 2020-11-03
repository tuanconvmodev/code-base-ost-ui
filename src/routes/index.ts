import Loadable from 'react-loadable';
import Preloader from '../components/Preloader';
import Dashbroad from '../pages/Dashbroad';
const Login = Loadable({
  loading: Preloader,
  loader: () => import('../pages/Login'),
});

const routes = [
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
    component: Dashbroad,
    navigatePath: '/login',
    isProtected: true,
  },
];
export default routes;
