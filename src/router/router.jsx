import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../pages/ErrorPage';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../components/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      }
    ]
  },
]);

export default router;
