import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('../userspage');
  };

  return (
    <button type='button' onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;