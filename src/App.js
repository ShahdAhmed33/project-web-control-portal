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
import OptionDNS from './OptionDNS.js'; // Import the OptionDNS component
import Login from './login.js'; // Import the Login component
import styles from './App.module.css';
import DNSManager from './DNSManager.js'; // Import the DNSManager component

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
                  <Route path="/dhcp/*" element={<DHCP />} />
                  <Route path="/dns" element={<DNS />} />
                  <Route path="/dns-manager" element={<DNSManager />} /> {/* Add the route for DNSManager */}
                  <Route path="/boot-and-grub" element={<BootandGRUB />} />
                  <Route path="/option-dns" element={<OptionDNS />} /> {/* Add the route for OptionDNS */}
                  <Route path="/monitoring" element={<Mointoring />} />
                  <Route path="/fileop" element={<Fileop />} />
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