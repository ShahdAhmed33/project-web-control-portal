import React, { useState } from 'react';
import OptionDNS from './OptionDNS.js';
import HostDNS from './HostDNS.js';

const DNS = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    return (
        <div className="container">
            <button
                className={`btn ${activeComponent === 'OptionDNS' ? 'active' : ''}`}
                onClick={() => setActiveComponent('OptionDNS')}
                style={{ color: activeComponent === 'OptionDNS' ? 'blue' : 'black' }}
            >
                OptionDNS
            </button>
            <button
                className={`btn ${activeComponent === 'HostDNS' ? 'active' : ''}`}
                onClick={() => setActiveComponent('HostDNS')}
                style={{ color: activeComponent === 'HostDNS' ? 'red' : 'black' }}
            >
                HostDNS
            </button>
            {activeComponent === 'OptionDNS' && <OptionDNS />}
            {activeComponent === 'HostDNS' && <HostDNS />}
        </div>
    );
};
export default DNS;