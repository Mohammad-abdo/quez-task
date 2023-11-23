import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface WithAuthProps {
  // You can add any specific props that your HOC needs
}

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P & WithAuthProps) => {
    const navigate = useNavigate();

    useEffect(() => {
      // Check your authentication status, for example, by calling an API or checking a token in localStorage
      const isAuthenticated = localStorage.getItem('token') ? true : false;

      if (!isAuthenticated) {
        // Navigate to login if not authenticated
        navigate('/login');
      }
    }, [navigate]);

    // Render the wrapped component
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
