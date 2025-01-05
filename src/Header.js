import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header">
      <h1>ACPC Adminstrator Portal</h1>
      <nav>
        <Link
          to="/General"
          style={{ color: activeLink === '/General' ? 'red' : 'inherit' }}
          onClick={() => handleClick('/General')}
        >
          General
        </Link>
        <Link
          to="/DHCP"
          style={{ color: activeLink === '/DHCP' ? 'red' : 'inherit' }}
          onClick={() => handleClick('/DHCP')}
        >
          DHCP
        </Link>
        <Link
          to="/DNS"
          style={{ color: activeLink === '/DNS' ? 'red' : 'inherit' }}
          onClick={() => handleClick('/DNS')}
        >
          DNS
        </Link>
        <Link
          to="/Boot-and-GRUB"
          style={{ color: activeLink === '/Boot-and-GRUB' ? 'red' : 'inherit' }}
          onClick={() => handleClick('/Boot-and-GRUB')}
        >
          Boot and GRUB
        </Link>
        <Link
          to="/Monitoring"
          style={{ color: activeLink === '/Monitoring' ? 'red' : 'inherit' }}
          onClick={() => handleClick('/Monitoring')}
        >
          Monitoring
        </Link>
        <Link
          to="/Fileop"
          style={{ color: activeLink === '/Fileop' ? 'red' : 'inherit' }}
          onClick={() => handleClick('/Fileop')}
        >
          File Operations
        </Link>
        <Link
          to="/Logout"
          style={{ color: activeLink === '/Logout' ? 'red' : 'inherit' }}
          onClick={() => handleClick('/Logout')}
        >
          Logout
        </Link>
      </nav>
    </header>
  );
};

export default Header;