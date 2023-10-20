import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import AddProduct from "../pages/AddProduct";
import PrivateRoute from "./PrivateRoute";
import Products from '../pages/Products';
import brandLoader from '../ulils/brandLoader';
import ProductDetails from '../pages/ProductDetails';
import MyCart from '../pages/MyCart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <Products />,
        loader: brandLoader
      },
      {
        path: "/productDetails/:id",
        element: <PrivateRoute><ProductDetails /></PrivateRoute>,
        loader: brandLoader
      }
      ,
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ), 
      },
      {
        path: "/cart",
        element: 
        <PrivateRoute>
          <MyCart/>
        </PrivateRoute>        
      }
    ],
  },
]);

export default router;
