import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Header = () => {
  return (
    <header className="header">
      <h1>ACPC Adminstrator Portal</h1>
      <nav>
        <Link to="/General">General</Link>
        <Link to="/DHCP">DHCP</Link>
        <Link to="/DNS">DNS</Link>
        <Link to="/Boot-and-GRUB">Boot and GRUB</Link>
        <Link to="/Monitoring">Monitoring</Link>
        <Link to="/Fileop">File Operations</Link>
        <Link to="/Logout">Logout</Link>
      </nav>
    </header>
  );
};

export default Header;