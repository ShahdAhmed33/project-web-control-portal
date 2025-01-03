import React, { useState } from 'react';
import styles from './OptionDNS.module.css'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';

const Options = () => {
    const [defaultLeaseTime, setDefaultLeaseTime] = useState('');
    const [maxLeaseTime, setMaxLeaseTime] = useState('');

    const handleSave = () => {
        // Implement save functionality
        console.log('Saved:', { defaultLeaseTime, maxLeaseTime });
    };

    const handleStartOver = () => {
        setDefaultLeaseTime('');
        setMaxLeaseTime('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <label htmlFor="defaultLeaseTime">Default Lease Time:</label>
                <input
                    type="number"
                    id="defaultLeaseTime"
                    value={defaultLeaseTime}
                    onChange={(e) => setDefaultLeaseTime(e.target.value)}
                />
            </div>
            <div className={styles.row}>
                <label htmlFor="maxLeaseTime">Max Lease Time:</label>
                <input
                    type="number"
                    id="maxLeaseTime"
                    value={maxLeaseTime}
                    onChange={(e) => setMaxLeaseTime(e.target.value)}
                />
            </div>
            <div className={styles.buttonContainer}>
                <button className="btn btn-success" onClick={handleSave}>Save</button>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <button className="btn btn-danger" onClick={handleStartOver}>Start Over</button>
            </div>
        </div>
    );
};

export default Options;