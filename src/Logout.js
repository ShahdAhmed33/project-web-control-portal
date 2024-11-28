// Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    onLogout();
    navigate('/login');
  }, [navigate, onLogout]);

  return null;
};

export default Logout;