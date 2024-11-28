import React from 'react';
import styles from './UpdateDNS.module.css';

const UpdateDNS = ({ records, onDelete }) => {
    const totalRecords = records.length;

    return (
        <div className={styles.container}>
            <h1>Updates</h1>
            <p>Total Records: {totalRecords}</p>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Hostname</th>
                        <th>IP Address</th>
                        <th>Host Records</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record, index) => (
                        <tr key={index}>
                            <td>{record.hostname}</td>
                            <td>{record.ipAddress}</td>
                            <td>{`Record ${index + 1}`}</td>
                            <td>
                                <button className={styles.button} onClick={() => onDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UpdateDNS;