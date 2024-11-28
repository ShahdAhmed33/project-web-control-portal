import React from 'react';
import styles from './DHCP.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const DHCP = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles['navbar-nav']}>
                <li className={styles['nav-item']}>
                    <a className={styles['nav-link']} href="#">Options</a>
                </li>
                <li className={styles['nav-item']}>
                    <a className={styles['nav-link']} href="#">Scopes</a>
                </li>
                <li className={styles['nav-item']}>
                    <a className={styles['nav-link']} href="#">Reservation</a>
                </li>
                <li className={styles['nav-item']}>
                    <a className={styles['nav-link']} href="#">Restart</a>
                </li>
            </ul>
        </nav>
    );
};

export default DHCP;