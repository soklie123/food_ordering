import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ allowedRole, children }) => {
  const { user } = useAuth();

  if (!user.isAuth) return <Navigate to="/" />;

  if (allowedRole && user.role !== allowedRole)
    return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;

