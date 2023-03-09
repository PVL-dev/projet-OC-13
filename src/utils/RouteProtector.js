import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authenticationStatusSelector } from './selectors.js';

const RouteProtector = () => {
  const isAuthenticated = useSelector(authenticationStatusSelector());
  console.log(isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default RouteProtector;

