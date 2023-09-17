import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PrivateProtectedRoute = ({ element }) => {
  const user = useSelector((state) => state?.users);
  const { userAuth } = user;

  const navigate = useNavigate();

  useEffect(() => {
    if (!userAuth) {
      navigate('/login');
    }
  }, [userAuth, navigate]);

  return userAuth ? element : null;
};

export default PrivateProtectedRoute;
