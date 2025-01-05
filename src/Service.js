import React from 'react';

const Service = () => {
    const labels = [
        { name: "DHCP", isUp: true },
        { name: "DNS", isUp: false },
        { name: "Apache Web", isUp: true },
        { name: "Proxy", isUp: false },
        { name: "SSH", isUp: true }
    ];

    return (
        <div>
            {labels.map((label, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{label.name}</span>
                    <div 
                        style={{ 
                            width: '20px', 
                            height: '20px', 
                            marginLeft: '10px', 
                            backgroundColor: label.isUp ? 'green' : 'red', 
                            borderRadius: '50%' 
                        }}
                        title={label.isUp ? 'Service is up' : 'Service is down'}
                    />
                </div>
            ))}
        </div>
    );
};

export default Service;