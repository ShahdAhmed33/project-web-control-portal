import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import General from './General.js';
import DHCP from './DHCP.js';
import DNS from './DNS.js';
import BootandGRUB from './Boot-and-GRUB.js';
import Logout from './Logout.js';
import Mointoring from './Mointoring.js';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
const App = () => {
  return (
    <Router>
    <div>
      <Header />
      <div className={styles.container}>
      <Sidebar />
      <div className={styles.leftnav}>
      <Routes>
        <Route path="/General" element={<General/>} />
        <Route path="/dhcp" element={<DHCP />} />
        <Route path="/dns" element={<DNS />} />
        <Route path="/boot-and-grub" element={<BootandGRUB />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/mointoring" element={<Mointoring />} /> 
      </Routes>
    </div>
    </div>
    </div>
    </Router>
  );
};

export default App;