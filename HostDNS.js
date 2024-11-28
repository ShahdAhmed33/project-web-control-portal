import React, { useState } from 'react';
import styles from './HostDNS.module.css';
import UpdateDNS from './UpdateDNS';

const HostDNS = () => {
    const [hostname, setHostname] = useState('');
    const [ipAddress, setIpAddress] = useState('');
    const [showUpdateDNS, setShowUpdateDNS] = useState(false);
    const [records, setRecords] = useState([]);
    const [error, setError] = useState('');

    const handleUpdateClick = () => {
        if (!hostname || !ipAddress) {
            setError('Please enter both Hostname and IP address');
            return;
        }

        const ipPattern = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/;
        if (!ipPattern.test(ipAddress)) {
            setError('Invalid IP address format');
            return;
        }

        setRecords([...records, { hostname, ipAddress }]);
        setShowUpdateDNS(true);
        setError('');
    };

    return (
        <div className={styles.container}>
            <label className={styles.label}>Add:</label>
            <div className={styles['input-group']}>
                <label>Hostname:</label>
                <input type="text" value={hostname} onChange={(e) => setHostname(e.target.value)} />
            </div>
            <div className={styles['input-group']}>
                <label>Ip address:</label>
                <input type="text" value={ipAddress} onChange={(e) => setIpAddress(e.target.value)} />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles['button-group']}>
                <button onClick={handleUpdateClick}>Update</button>
                <button onClick={() => { setHostname(''); setIpAddress(''); setError(''); }}>Start Over</button>
            </div>
            {showUpdateDNS && <UpdateDNS records={records} onDelete={(index) => {
                const newRecords = records.filter((_, i) => i !== index);
                setRecords(newRecords);
            }} />}
        </div>
    );
};

export default HostDNS;