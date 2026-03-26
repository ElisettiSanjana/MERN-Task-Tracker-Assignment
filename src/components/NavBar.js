import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ background: '#333', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={{ color: 'white', margin: 0 }}>Task Tracker</h2>
      {user && (
        <div>
          <span style={{ color: 'white', marginRight: '15px' }}>Hello, {user.name}</span>
          <button onClick={handleLogout} style={{ padding: '8px 15px', background: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;