import React, { useState, useEffect } from 'react';
import greenImage from './green.jpg'; // Path to your green image
import redImage from './red.jpg'; // Path to your red image
const Judge = () => {
    const [filter, setFilter] = useState('All');
    const [hostStatuses, setHostStatuses] = useState(Array(10).fill('down')); // Default status for 10 teams

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
        console.log('Filter changed to:', event.target.value);
    };
    
    // Simulate a host status check
    const checkHostStatus = () => {
        // Replace this with your actual host status check logic
        const statuses = hostStatuses.map(() => (Math.random() > 0.5 ? 'up' : 'down'));
        setHostStatuses(statuses);
    };
    useEffect(() => {
        console.log('Component rendered with filter:', filter);
    
        checkHostStatus();
        const interval = setInterval(checkHostStatus, 5000); // Check every 5 seconds
    
        return () => clearInterval(interval);
    }, [filter]);
    const filteredStatuses = hostStatuses.filter((status) => {
        if (filter === 'All') return true;
        if (filter === 'Running') return status === 'up';
        if (filter === 'Dead') return status === 'down';
        return true;
    });
    return (
        <div>
            <label htmlFor="team-filter">Filter:</label>
            <select id="team-filter" value={filter} onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="Running">Running</option>
                <option value="Dead">Dead</option>
            </select>    
            <table>
                <thead>
                    <tr>
                        <th>Judge</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStatuses.map((status, index) => (
                        <tr key={index}>
                            <td>Judge {index + 1}</td>
                            <td>
                                <img 
                                    src={status === 'up' ? greenImage : redImage} 
                                    alt="Host Status" 
                                    style={{ width: '20px', height: '20px' }} 
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={checkHostStatus}>Refresh</button>
        </div>
    );
}

export default Judge;