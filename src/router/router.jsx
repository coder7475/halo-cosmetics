import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../pages/ErrorPage';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import AddProduct from '../pages/AddProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/addProduct",
        element: <AddProduct />
      }
    ]
  },
]);

export default router;
