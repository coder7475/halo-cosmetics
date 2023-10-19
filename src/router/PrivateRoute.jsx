
import { useContext } from 'react';
import { AuthContext } from "../features/Authentication/AuthProvider";
import { Navigate } from 'react-router-dom';
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;