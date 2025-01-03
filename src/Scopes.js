import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Scopes.css'; // Ensure this path is correct

const Scopes = () => {
    const [subnetMask, setSubnetMask] = useState('');
    const [rangeOfIps, setRangeOfIps] = useState('');
    const [gateway, setGateway] = useState('');
    const [bootServer, setBootServer] = useState('');
    const [records, setRecords] = useState([]);
    const [error, setError] = useState('');


    const [selectedRecords, setSelectedRecords] = useState([]);

    const handleCheckboxChange = (e, index) => {
            if (e.target.checked) {
                 setSelectedRecords([...selectedRecords, index]);
             }    
             else {
                setSelectedRecords(selectedRecords.filter(i => i !== index));
             }
        };

    const handleDeleteSelected = () => {
            const newRecords = records.filter((_, index) => !selectedRecords.includes(index));
            setRecords(newRecords);
            setSelectedRecords([]);
        };


    const isValidIP = (ip) => {
        const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return regex.test(ip);
    };

    const isValidRange = (range) => {
        const ips = range.split('-');
        return ips.length === 2 && isValidIP(ips[0]) && isValidIP(ips[1]);
    };

    const handleSave = () => {
        if (!isValidIP(subnetMask) || !isValidRange(rangeOfIps) || !isValidIP(gateway) || !isValidIP(bootServer)) {
            setError('Please enter valid IP addresses and ranges.');
            return;
        }
        setError('');
        const newRecord = { subnetMask, rangeOfIps, gateway, bootServer };
        setRecords([...records, newRecord]);
        setSubnetMask('');
        setRangeOfIps('');
        setGateway('');
        setBootServer('');
    };

    const handleStartOver = () => {
        setSubnetMask('');
        setRangeOfIps('');
        setGateway('');
        setBootServer('');
        setError('');
    };

    return (
        <div className={styles.container}>
            <p></p>
            <br></br>
            <p><strong>Add:</strong></p>
            <div className={styles.row}>
                <label htmlFor="subnetMask">Subnet/Mask:</label>
                <input
                    type="text"
                    id="subnetMask"
                    value={subnetMask}
                    onChange={(e) => setSubnetMask(e.target.value)}
                />
            </div>
            <div className={styles.row}>
                <label htmlFor="rangeOfIps">Range of IPs:</label>
                &nbsp;&nbsp;
                <input
                    type="text"
                    id="rangeOfIps"
                    value={rangeOfIps}
                    onChange={(e) => setRangeOfIps(e.target.value)}
                />
            </div>
            <div className={styles.row}>
                <label htmlFor="gateway">Gateway:</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                    type="text"
                    id="gateway"
                    value={gateway}
                    onChange={(e) => setGateway(e.target.value)}
                />
            </div>
            <div className={styles.row}>
                <label htmlFor="bootServer">Boot Server:</label>
                &nbsp;&nbsp;&nbsp;
                <input
                    type="text"
                    id="bootServer"
                    value={bootServer}
                    onChange={(e) => setBootServer(e.target.value)}
                />
            </div>
            {error && <p className={styles.error}>{error}</p>}
        <br />
        <div className={styles.buttonContainer}>
          <button className="btn btn-success" onClick={handleSave}>Save</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button className="btn btn-danger" onClick={handleStartOver} style={{ marginLeft: '10px' }}>Start Over</button>
        </div>
{records.length > 0 && (
    
    <div>
        <br />
        <p><strong>Updates:</strong></p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', border: '2px solid #000' }}>
            <thead>
                <tr>
                    <th style={{ border: '1px solid #000', padding: '12px', backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>Delete</th>
                    <th style={{ border: '1px solid #000', padding: '12px', backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>Subnet/Mask</th>
                    <th style={{ border: '1px solid #000', padding: '12px', backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>Range of IPs</th>
                    <th style={{ border: '1px solid #000', padding: '12px', backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>Gateway</th>
                    <th style={{ border: '1px solid #000', padding: '12px', backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>Boot Server</th>
                </tr>
            </thead>
            <tbody>
                {records.map((record, index) => (
                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                        <td style={{ border: '1px solid #000', padding: '12px' }}>
                            <input type="checkbox" onChange={(e) => handleCheckboxChange(e, index)} />
                        </td>
                        <td style={{ border: '1px solid #000', padding: '12px' }}>{record.subnetMask}</td>
                        <td style={{ border: '1px solid #000', padding: '12px' }}>{record.rangeOfIps}</td>
                        <td style={{ border: '1px solid #000', padding: '12px' }}>{record.gateway}</td>
                        <td style={{ border: '1px solid #000', padding: '12px' }}>{record.bootServer}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button className="btn btn-danger" onClick={handleDeleteSelected} style={{ marginTop: '10px' }}>Delete Selected</button>
    </div>
)}
        </div>
    );
};

export default Scopes;