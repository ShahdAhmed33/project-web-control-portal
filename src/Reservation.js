import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Scopes.css'; // Ensure this path is correct
import axios from 'axios';

 
const Scopes = () => {
    const [IpAddress, setIpAddress] = useState('');
    const [MacAddress, setMacAddress] = useState('');
    const [hostname, sethostname] = useState('');
    const [records, setRecords] = useState([]);
    const [error, setError] = useState('');


    const [selectedRecords, setSelectedRecords] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Attempting to fetch data...");

                // Username and password
                const username = 'admin';
                const password = 'baba123';

                // Base64 encoding the username:password
                const encodedCredentials = btoa(`${username}:${password}`);

                // Making the GET request with Basic Authentication
                const response = await axios.get('http://172.20.88.52/api/dhcp/list/hosts', {
                    timeout: 30000, // Timeout setting
                    /*headers: {
                        
                        'Authorization': `Basic ${encodedCredentials}`  // Pass encoded credentials in the header
                    }*/
                });

                const data = response.data;

                // Process the response data
                const parsedRecords = [];
                let currentRecord = {};

                data.response.forEach(line => {
                    if (line.startsWith('host')) {
                        /*if (Object.keys(currentRecord).length >= 0) {
                            
                            
                            console.log("line host " , line);
                            console.log("Record length " , parsedRecords.length);
                        }*/
                        currentRecord = { hostname: line.split(' ')[1] };
                    } else if (line.includes('hardware ethernet')) {
                        currentRecord.MacAddress = line.split(' ')[2].replace(';', '');
                    } else if (line.includes('fixed-address')) {
                        currentRecord.IpAddress = line.split(' ')[1].replace(';', '');
                    }
                    else if ( line.includes('}'))
                        parsedRecords.push(currentRecord);
                   
                });

                // Check if records exist
                if (parsedRecords.length === 0) {
                    setError('No records found.');
                } else {
                    setRecords(parsedRecords);
                }
            } catch (error) {
                
                console.error("Failed to fetch data:", error);
                if (error.response) {
                    console.error("Response data:", error.response.data);
                    setError(`Server error: ${error.response.status} - ${error.response.data}`);
                } else if (error.request) {
                    console.error("Request data:", error.request);
                    setError('No response received from server');
                } else {
                    console.error("Error message:", error.message);
                    setError(`Error: ${error.message}`);
                }
            }
        };

        fetchData();
    }, []);
    

    // const handleCheckboxChange = (e, index) => {
    //         if (e.target.checked) {
    //              setSelectedRecords([...selectedRecords, index]);
    //          }    
    //          else {
    //             setSelectedRecords(selectedRecords.filter(i => i !== index));
    //          }
    //     };

    const handleCheckboxChange = (index) => {
        setSelectedRecords((prevSelectedRecords) => {
            if (prevSelectedRecords.includes(index)) {
                return prevSelectedRecords.filter((i) => i !== index);
            } else {
                return [...prevSelectedRecords, index];
            }
        });
    };

    // const handleDeleteSelected = () => {
    //         const newRecords = records.filter((_, index) => !selectedRecords.includes(index));
    //         setRecords(newRecords);
    //         setSelectedRecords([]);
    //     };


    // const handleDeleteSelected = () => {
    //     setRecords((prevRecords) =>
    //         prevRecords.filter((_, index) => !selectedRecords.includes(index))
    //     );
    //     setSelectedRecords([]);
    // };

    const handleDeleteSelected = async () => {
        try {
            // Loop through selected rows
            for (const index of selectedRecords) {
                const record = records[index]; // Get the corresponding record
    
                // Extract name and team number from the hostname
                const nameMatch = record.hostname.match(/[A-Za-z]+/);  // Letters before numbers
                const teamNumberMatch = record.hostname.match(/\d+/); // Digits after letters
    
                const name = nameMatch ? nameMatch[0] : '';
                const teamNumber = teamNumberMatch ? teamNumberMatch[0] : '';
    
                // Construct the API endpoint
                const url = `http://172.20.88.52/api/${name}/${teamNumber}/remove`;
    
                // Make the API call to delete the record
                const response = await axios.get(url, {
                    mac: record.MacAddress,
                    ip: record.IpAddress,
                });
    
                if (response.status === 200) {
                    alert(`Successfully deleted record: ${record.hostname}`);
                } else {
                    // console.error(`Failed to delete record: ${record.hostname}`);
                    alert(`Failed to delete record: ${record.hostname}`);
                }
            }
    
            // After successful deletion, update the records state
            setRecords((prevRecords) =>
                prevRecords.filter((_, index) => !selectedRecords.includes(index))
            );
            setSelectedRecords([]); // Clear the selection
        } catch (error) {
            // console.error('Error during deletion:', error);
            alert('Error during deletion:', error);
        }
    };
    

    useEffect(() => {
        handleDeleteSelected();
    }, []);

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

   
    
    const handleSave = async () => {
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
        // setRecords([...records, newRecord]);
        // setIpAddress('');
        // setMacAddress('');
        // sethostname('');
        
        try {
            const requestBody = `{"mac": "${MacAddress}","ip": "${IpAddress}"}`;
            const nameMatch = hostname.match(/[A-Za-z]+/);  // Captures letters before numbers (e.g., 'TEAM' from 'TEAM1111')
            const teamNumberMatch = hostname.match(/\d+/);  // Captures digits (e.g., '1111' from 'TEAM1111')
        
            const name = nameMatch ? nameMatch[0] : '';  // Extracts the name and converts it to lowercase
            const teamNumber = teamNumberMatch ? teamNumberMatch[0] : '';  // Extracts the team number
        
            const url = `http://172.20.88.52/api/${name}/${teamNumber}/insert`;

            const response = await axios.post(url, requestBody, {
                // headers: {
                //     'Content-Type': 'application/json',
                // },
            });
        
            const data = response.data;
        
            // Parse the response and extract the status_code and status_message
            const parsedStatusMessages = [];
            
            // Extract status_code and status_message from the response data
            const statusCode = data.status_code;
            const statusMessage = data.status_message;
        
            // If HTTP status is 200, then check status_code
            if (response.status === 200) {
               // console.log("HTTP Status is 200: OK");
                
                // Check if the status_code is 200, show success
                if (statusCode === 200) {
                    //console.log(`Success: ${statusMessage}`);
                    alert(`Success: ${statusMessage}`);
                    setRecords([...records, newRecord]); // Alert success message
                } else {
                    //console.log(`Error: ${statusMessage}`);
                    alert(`Error: ${statusMessage}`); // Alert error message
                    throw new Error(`Server responds :  ${statusMessage}`); // Throw an error with the status_message
                    }
            } 
                else {
                    console.log(`HTTP Status is not 200. HTTP Status: ${response.status}`);
                    alert(`Error: HTTP Status is ${response.status}`); // Alert with the HTTP status error
                    throw new Error(`HTTP Status is ${response.status}`);
                }
        
        } catch (error) {
            //console.error('Error-------------------:', error);
            setError('Error: ' , error);
        }
        
        // Optionally, clear the input fields
        setIpAddress('');
        setMacAddress('');
        sethostname('');
    };
    useEffect(() => {
        handleSave();
    }, []);

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
{/* {records.length > 0 && (
    
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
)} */}



   {records.length > 0 ? (
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Select</th> {/* New column for checkboxes */}
                            <th>Hostname</th>
                            <th>IP Address</th>
                            <th>MAC Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedRecords.includes(index)}
                                        onChange={() => handleCheckboxChange(index)}
                                    /> {/* Checkbox input */}
                                </td>
                                <td>{record.hostname}</td>
                                <td>{record.IpAddress}</td>
                                <td>{record.MacAddress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No records available.</p>
            )}

          <button className="btn btn-danger" onClick={handleDeleteSelected} style={{ marginTop: '10px' }}>Delete Selected</button>


        </div>
    );
};

export default Scopes;