// DateTimePicker.js
import React from 'react';
import styles from './DateTimePicker.module.css';

const DateTimePicker = ({ label, value, onChange }) => {
    return (
        <div className={styles.row}>
            <label>{label}</label>
            <input 
                type="datetime-local" 
                value={value} 
                onChange={onChange} 
                className={styles.textbox} 
            />
        </div>
    );
}

export default DateTimePicker;