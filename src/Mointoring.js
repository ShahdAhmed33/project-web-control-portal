import React, { useState } from 'react';
import './Mointoring.module.css';
import Service from './Service'; // Import the Service component
import Team from './Team'; // Import the Teams component
import Judge from './Judge'; // Import the Judges component

const Mointoring = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    return (
        <div className="container">
            <button 
                className={`btn ${activeComponent === 'Service' ? 'btn-success' : ''}`} 
                onClick={() => setActiveComponent('Service')}
            >
                Services
            </button>
            <button 
                className={`btn ${activeComponent === 'Team' ? 'btn-success' : ''}`} 
                onClick={() => setActiveComponent('Team')}
            >
                Teams
            </button>
            <button 
                className={`btn ${activeComponent === 'Judge' ? 'btn-success' : ''}`} 
                onClick={() => setActiveComponent('Judge')}
            >
                Judges
            </button>
            {activeComponent === 'Service' && <Service />}
            {activeComponent === 'Team' && <Team />}
            {activeComponent === 'Judge' && <Judge />}
        </div>
    );
};
export default Mointoring;