import React, { useState } from 'react';
import styles from './OptionDNS.module.css';

const OptionDNS = () => {
    const [forwarders, setForwarders] = useState('');
    const [ttl, setTtl] = useState('');

    const handleSave = () => {
        alert('Settings saved');
    };

    const handleStartOver = () => {
        setForwarders('');
        setTtl('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <label htmlFor="forwarders">List of Forwarders:</label>
                <input
                    type="text"
                    id="forwarders"
                    value={forwarders}
                    onChange={(e) => setForwarders(e.target.value)}
                />
            </div>
            <div className={styles.row}>
                <label htmlFor="ttl">Default TTL:</label>
                <input
                    type="text"
                    id="ttl"
                    value={ttl}
                    onChange={(e) => setTtl(e.target.value)}
                />
            </div>
            <div className={styles['button-container']}>
                <button className={styles.save} onClick={handleSave}>Save</button>
                <button className={styles['start-over']} onClick={handleStartOver}>Start Over</button>
            </div>
        </div>
    );
};

export default OptionDNS;