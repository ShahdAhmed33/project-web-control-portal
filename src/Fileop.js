import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const FileOperations = () => {
    const [uploading, setUploading] = useState(false);
    const [publishTarget, setPublishTarget] = useState('All');
    const fileInputRef = useRef(null);

    const handleUpload = () => {
        setUploading(true);
        setTimeout(() => {
            setUploading(false);
            alert('File uploaded successfully');
        }, 2000); // Simulate upload time
    };

    const handleBrowse = () => {
        fileInputRef.current.click();
    };

    const handlePublish = () => {
        alert(`Publishing to ${publishTarget}`);
    };

    const handleFilterChange = () => {
        setPublishTarget(publishTarget === 'All' ? 'Specific' : 'All');
    };

    return (
        <div className="container mt-4">
             <div className="mb-3">
                <label className="form-label">Background:</label>
            </div>
            <div className="mb-3">
                <label className="form-label">Choose file:</label>
                <input type="file" ref={fileInputRef} className="form-control" style={{ display: 'none' }} />
                <button onClick={handleBrowse} className="btn btn-primary me-2">Browse</button>
                <button onClick={handleUpload} className="btn btn-success">Upload</button>
            </div>
            <div className="mb-3">
                <label className="form-label">Upload Status:</label>
                {uploading && <progress className="form-control" style={{ width: '100%', height: '20px' }} />}
            </div>
            <div className="mb-3">
                <label className="form-label">Samples</label>
                <button onClick={handlePublish} className="btn btn-primary me-2">Publish</button>
                <button onClick={handleFilterChange} className="btn btn-secondary">Filter: {publishTarget}</button>
            </div>
            <div className="mb-3">
                <label className="form-label">Per team progress:</label>
                <progress className="form-control" style={{ width: '100%', height: '20px' }} />
            </div>
            <div className="mb-3">
                <label className="form-label">Overall progress:</label>
                <progress className="form-control" style={{ width: '100%', height: '20px' }} />
            </div>
            <div className="mb-3">
                <label className="form-label">JudgeCases</label>
                <button onClick={handlePublish} className="btn btn-primary me-2">Publish</button>
                <button onClick={handleFilterChange} className="btn btn-secondary">Filter: {publishTarget}</button>
            </div>
            <div className="mb-3">
                <label className="form-label">Per judge progress:</label>
                <progress className="form-control" style={{ width: '100%', height: '20px' }} />
            </div>
        </div>
    );
};

export default FileOperations;