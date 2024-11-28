import React, { useState } from 'react';
import HostDNS from './HostDNS';
import UpdateDNS from './UpdateDNS';

const DNSManager = () => {
    const [records, setRecords] = useState([]);
    const [showUpdateDNS, setShowUpdateDNS] = useState(false);

    const handleUpdate = (hostname, ipAddress) => {
        setRecords([...records, { hostname, ipAddress }]);
        setShowUpdateDNS(true);
    };

    return (
        <div>
            <HostDNS onUpdate={handleUpdate} />
            {showUpdateDNS && <UpdateDNS records={records} />}
        </div>
    );
};

export default DNSManager;