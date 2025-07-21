import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img src="/logo.png" alt="Empy Logo" className="logo" onClick={() => navigate('/')} />
    </header>
  );
};

export default Header;