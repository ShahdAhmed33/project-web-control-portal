import React, { useState, useEffect } from 'react';

const Mointoring = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/data');
            const result = await response.json();
            setData(result);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    const handleRefresh = () => {
        setLoading(true);
        fetchData();
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Monitoring Data</h1>
            <button onClick={handleRefresh}>Refresh</button>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Mointoring;