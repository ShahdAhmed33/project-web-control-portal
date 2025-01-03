import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DHCP.module.css'; // Assuming you have a CSS module for styling

const DHCPNavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles['navbar-nav']}>
                <li className={styles['nav-item']}>
                    <NavLink className={styles['nav-link']} to="/dhcp/options">Options</NavLink>
                </li>
                <li className={styles['nav-item']}>
                    <NavLink className={styles['nav-link']} to="/dhcp/scopes">Scopes</NavLink>
                </li>
                <li className={styles['nav-item']}>
                    <NavLink className={styles['nav-link']} to="/dhcp/reservation">Reservation</NavLink>
                </li>
                <li className={styles['nav-item']}>
                    <NavLink className={styles['nav-link']} to="/dhcp/restart">Restart</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default DHCPNavBar;