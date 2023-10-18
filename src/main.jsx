import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router/router";
import { RouterProvider } from "react-router-dom";
import AuthProvider from './features/Authentication/AuthProvider';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
