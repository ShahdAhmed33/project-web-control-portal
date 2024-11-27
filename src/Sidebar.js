// FILE: src/Sidebar.js
import React from 'react';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.main}>Main Menu</h2>
   <div >
      <ul className={styles.menu}>
        <Link to ="/General"><li className={styles.menuitem}>General Setting</li></Link>
        <Link to="/DHCP"><li className={styles.menuitem}>DHCP</li></Link> 
        <Link to="/DNS"> <li className={styles.menuitem}>DNS</li></Link>
        <Link to="/Boot-and-GRUB"><li className={styles.menuitem}>Boot and GRUB</li></Link>
        <Link to="/Mointoring"><li className={styles.menuitem}>Monitoring</li></Link>
        <Link to="/Fileop"> <li className={styles.menuitem}>File operation</li></Link>
        <Link to="/Logout"> <li className={styles.menuitem}>Logout</li></Link>
      </ul>
   </div>
    </div>

  );
};

export default Sidebar;
