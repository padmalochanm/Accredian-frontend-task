import { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode'; // Remove the curly braces
import Sign from './Sign';
import ToggleTheme from './ToggleTheme';
import Avatar from './Avatar';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = () => {
    // Check if the token is available and valid
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Convert to seconds
        if (decodedToken.exp > currentTime) {
          setIsAuthenticated(true);
        } else {
          // Token is expired
          localStorage.removeItem('authToken');
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Invalid token:', error);
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="navbar bg-base-400 mb-8">
      <div className="flex-1">
        <p className="text-5xl font-bold font-serif">accredian</p>
      </div>
      <div className="flex-none space-x-8">
        {isAuthenticated ? <Avatar onLogout={handleLogout} /> : <Sign />}
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Header;
