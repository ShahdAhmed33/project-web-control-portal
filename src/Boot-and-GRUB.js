import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BootandGRUB.css';
import ISOFileOperations from './ISOOperation';
import Media from './Media';

const BootandGRUB = () => {
    const [showComponents, setShowComponents] = useState(false);
    const [showMedia, setShowMedia] = useState(false);

    const handleNetbootClick = () => {
        setShowComponents(true);
        setShowMedia(false);
    };

    const handleMediaClick = () => {
        setShowMedia(true);
        setShowComponents(false);
    };

    const bootStages = [
        // Add your boot stages here
    ];

    return (
        <div className="container mt-5">
            <nav className="navbar justify-content-center mb-4">
                <button
                    className={`btn mx-2 ${showComponents ? 'btn-success' : 'btn'}`}
                    onClick={handleNetbootClick}
                >
                    Netboot
                </button>
                <button
                    className={`btn mx-2 ${showMedia ? 'btn-primary' : 'btn'}`}
                    onClick={handleMediaClick}
                >
                    Media
                </button>
            </nav>
            <ul className="list list-unstyled">
                {bootStages.map((stage, index) => (
                    <li key={index} className="listItem mb-3 p-3 bg-white rounded shadow-sm">
                        <h2 className="title">{stage.title}</h2>
                        <p className="description">{stage.description}</p>
                    </li>
                ))}
            </ul>
            {showComponents && (
                <div>
                    <ISOFileOperations />
                </div>
            )}
            {showMedia && (
                <div>
                    <Media />
                </div>
            )}
        </div>
    );
};

export default BootandGRUB;