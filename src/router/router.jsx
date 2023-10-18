import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />
  },
]);

export default router;
