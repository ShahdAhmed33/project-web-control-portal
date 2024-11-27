import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header.js';
// import Sidebar from './Sidebar.js';
import General from './General.js';
import DHCP from './DHCP.js';
import DNS from './DNS.js';
import BootandGRUB from './Boot-and-GRUB.js';
import Logout from './Logout.js';
import Mointoring from './Mointoring.js';
import Fileop from './Fileop.js';
import Login from './login.js'; // Import the Login component
import styles from './App.module.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        {isLoggedIn ? (
          <>
            <Header />
            <div className={styles.container}>
              {/* <Sidebar /> */}
              <div className={styles.nav}>
                <Routes>
                  <Route path="/General" element={<General />} />
                  <Route path="/dhcp" element={<DHCP />} />
                  <Route path="/dns" element={<DNS />} />
                  <Route path="/boot-and-grub" element={<BootandGRUB />} />
                  <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
                </Routes>
              </div>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;