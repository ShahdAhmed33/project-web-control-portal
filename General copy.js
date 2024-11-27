import React, { useState } from 'react';
import styles from './General.module.css';
import DateTimePicker from './DateTimePicker';

const General = () => {
    const [dateTime, setDateTime] = useState('');
    const [keyboardLayout, setKeyboardLayout] = useState('');
    const [contestTitle, setContestTitle] = useState('');
    const [numJudges, setNumJudges] = useState('');
    const [numTeams, setNumTeams] = useState('');
    const [numPrinters, setNumPrinters] = useState('');
    const [dhcp, setDhcp] = useState('');
    const [dns, setDns] = useState('');

    const handleDateTimeChange = (event) => {
        setDateTime(event.target.value);
    };

    const handleKeyboardLayoutChange = (event) => {
        setKeyboardLayout(event.target.value);
    };

    const handleSave = () => {
        // Validate all fields
        if (!contestTitle || !dateTime || !numJudges || !numTeams || !numPrinters || !keyboardLayout || !dhcp || !dns) {
            alert('All fields are required.');
            return;
        }

        // Validate numeric fields
        const numberRegex = /^[0-9]+$/;
        if (!numberRegex.test(numJudges) || !numberRegex.test(numTeams) || !numberRegex.test(numPrinters) || !numberRegex.test(dhcp) || !numberRegex.test(dns)) {
            alert('Number of judges, teams, printers, DHCP, and DNS must be positive integers.');
            return;
        }

        alert('Information saved');
    };

    const handleLoad = () => {
        // Implement load functionality here
        alert('Values loaded');
    };

    return (
        
        <div className={styles.container_new}>
            <h1>General Settings</h1>
            <div className={styles.row}>
                <label>Contest title</label>
                <input 
                    type="text" 
                    placeholder="Enter Contest title" 
                    className={styles.textbox} 
                    value={contestTitle}
                    onChange={(e) => setContestTitle(e.target.value)}
                />
            </div>
            <div className={styles.row}>
                <DateTimePicker 
                    label="Date/Time" 
                    value={dateTime} 
                    onChange={handleDateTimeChange} 
                />
            </div>
            <div className={styles.row}>
                <label>Number of judges</label>
                <input 
                    type="number" 
                    min="0" 
                    placeholder="Enter number of judges" 
                    className={styles.textbox} 
                    value={numJudges}
                    onChange={(e) => setNumJudges(e.target.value)}
                />
            </div>
            <div className={styles.row}>
                <label>Number of teams</label>
                <input 
                    type="number" 
                    min="0" 
                    placeholder="Enter number of teams" 
                    className={styles.textbox} 
                    value={numTeams}
                    onChange={(e) => setNumTeams(e.target.value)}
                />
            </div>
            <div className={styles.row}>
                <label>Number of printers</label>
                <input 
                    type="number" 
                    min="0" 
                    placeholder="Enter number of printers" 
                    className={styles.textbox} 
                    value={numPrinters}
                    onChange={(e) => setNumPrinters(e.target.value)}
                />
            </div>
            <div className={styles.row}>
                <label>Keyboard layout</label>
                <select 
                    value={keyboardLayout} 
                    onChange={handleKeyboardLayoutChange} 
                    className={styles.textbox}
                >
                    <option value="">Select keyboard layout</option>
                    <option value="us">US</option>
                    <option value="uk">UK</option>
                    <option value="de">German</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                </select>
            </div>
            <div className={styles.row}>
                <label>DHCP at start</label>
                <input 
                    type="number" 
                    min="0" 
                    placeholder="Enter DHCP at start" 
                    className={styles.textbox} 
                    value={dhcp}
                    onChange={(e) => setDhcp(e.target.value)}
                />
            </div>
            <div className={styles.row}>
                <label>DNS at start</label>
                <input 
                    type="number" 
                    min="0" 
                    placeholder="Enter DNS at start" 
                    className={styles.textbox} 
                    value={dns}
                    onChange={(e) => setDns(e.target.value)}
                />
            </div>
            <div className={styles.row}>
                <button onClick={handleSave} className={styles.button}>Save Changes</button>
                <button onClick={handleLoad} className={styles.button}>Start Over</button>
            </div>
        </div>
    );
};

export default General;