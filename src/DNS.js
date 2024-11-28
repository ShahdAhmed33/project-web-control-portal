import React, { useState } from 'react';
import styles from './DNS.module.css';
import OptionDNS from './OptionDNS.js';
import HostDNS from './HostDNS.js';
const DNS = () => {
    const [component, setComponent] = useState(null);

    const handleClick = (componentName) => {
        if (componentName === 'OptionDNS') {
            setComponent(<OptionDNS />);
        } else if (componentName === 'HostDNS') {
            setComponent(<HostDNS />);
        }
    };

    return (
        <div>
            <nav>
                <ul className={styles['nav-list']}>
                    <li className={styles['nav-item']}>
                        <button className={styles['nav-link']} onClick={() => handleClick('OptionDNS')}>OptionDNS</button>
                    </li>
                    <li className={styles['nav-item']}>
                        <button className={styles['nav-link']} onClick={() => handleClick('HostDNS')}>HostDNS</button>
                    </li>
                </ul>
            </nav>
            {component}
        </div>
    );
};

export default DNS;