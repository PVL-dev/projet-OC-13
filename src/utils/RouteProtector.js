import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authenticationStatusSelector } from '../utils/selectors.js';

const RouteProtector = () => {
  const isAuthenticated = useSelector(authenticationStatusSelector);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default RouteProtector;

