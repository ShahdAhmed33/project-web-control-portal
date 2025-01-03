import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Scopes.css'; // Ensure this path is correct

const Scopes = () => {
    const [IpAddress, setIpAddress] = useState('');
    const [MacAddress, setMacAddress] = useState('');
    const [hostname, sethostname] = useState('');
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

        const handleMacAddressChange = (e) => {
            const value = e.target.value;
            setMacAddress(value);
            if (!isValidMacAddress(value)) {
                setError('Invalid MAC address format');
            } else {
                setError('');
            }
        };
    
        const handleIpAddressChange = (e) => {
            setIpAddress(e.target.value);
        };
    
        const handleHostnameChange = (e) => {
            sethostname(e.target.value);
        };
    

     
    
        const isValidMacAddress = (mac) => {
            const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
            return macRegex.test(mac);
        };


    const isValidIP = (ip) => {
        const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return regex.test(ip);
    };

   

    const handleSave = () => {
        if (!isValidIP(IpAddress) ) {
            setError('Please enter valid IP addresses and ranges.');
            return;
        }
        if (!isValidMacAddress(MacAddress) ) {
            setError('Please enter valid mac addresses.');
            return;
        }
        setError('');
        const newRecord = { IpAddress , MacAddress, hostname };
        setRecords([...records, newRecord]);
        setIpAddress('');
        setMacAddress('');
        sethostname('');
    };

    const handleStartOver = () => {
        setIpAddress('');
        setMacAddress('');
        sethostname('');
        setError('');
    };

    return (
        <div className={styles.container}>
            <p></p>
            <br></br>
            <p><strong>Add:</strong></p>
            <div className={styles.row}>
                <label htmlFor="IpAddress">Ip address:</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                    type="text"
                    id="IpAddress"
                    value={IpAddress}
                    onChange={handleIpAddressChange}
                />
            </div>
            <div className={styles.row}>
                <label htmlFor="MacAddress">Mac address:</label>
                &nbsp;&nbsp;
                <input
                    type="text"
                    id="MacAddress"
                    value={MacAddress}
                    onChange={handleMacAddressChange}
                />
            </div>
            <div className={styles.row}>
                <label htmlFor="hostname">Hostname:</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                    type="text"
                    id="hostname"
                    value={hostname}
                    onChange={handleHostnameChange}
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
                    <th style={{ border: '1px solid #000', padding: '12px', backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>Ip address</th>
                    <th style={{ border: '1px solid #000', padding: '12px', backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>Mac address</th>
                    <th style={{ border: '1px solid #000', padding: '12px', backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>Hostname</th>
                </tr>
            </thead>
            <tbody>
                {records.map((record, index) => (
                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                        <td style={{ border: '1px solid #000', padding: '12px' }}>
                            <input type="checkbox" onChange={(e) => handleCheckboxChange(e, index)} />
                        </td>
                        <td style={{ border: '1px solid #000', padding: '12px' }}>{record.IpAddress}</td>
                        <td style={{ border: '1px solid #000', padding: '12px' }}>{record.MacAddress}</td>
                        <td style={{ border: '1px solid #000', padding: '12px' }}>{record.hostname}</td>
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