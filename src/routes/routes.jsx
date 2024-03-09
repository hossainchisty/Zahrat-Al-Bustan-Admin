import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Home/Home';
import Signup from '../pages/Auth/Signup';
import Signin from '../pages/Auth/Signin';
import Profile from '../components/Profile/Profile';
import EmailVerification from '../components/Auth/EmailVerification';
import Error from '../pages/Error/Error';
import PageNotFound from '../pages/404/PageNotFound';
import PrivateRoute from '../utils/PrivateRoute';
import AddMenu from '../pages/Admin/AddMenu';
import AddChef from '../pages/Admin/AddChef';
import Customers from '../pages/Admin/Customers';
import Reservations from '../pages/Admin/Reservations';
import Chef from '../pages/Admin/Chef';
import Feedblack from '../pages/Admin/Feedblack';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: 'add/menu',
        element: <AddMenu />,
      },
      {
        path: 'add/chef',
        element: <AddChef />,
      },
      {
        path: 'customers',
        element: <Customers />,
      },
      {
        path: 'reservations',
        element: <Reservations />,
      },
      {
        path: 'feedback',
        element: <Feedblack />,
      },
      {
        path: 'chefs',
        element: <Chef />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'signin',
        element: <Signin />,
      },
      {
        path: 'verify-email/:token',
        element: <EmailVerification />,
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
