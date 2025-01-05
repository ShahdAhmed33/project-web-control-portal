import React, { useState } from 'react';
const Media = () => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
        const [exampleFiles, setExampleFiles] = useState(['example1.iso', 'example2.iso', 'example3.iso']);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleRemove = (index) => {
        const newFiles = exampleFiles.filter((_, i) => i !== index);
        setExampleFiles(newFiles);
    };
    const handleUpload = () => {
        if (file) {
            setUploading(true);
            // Simulate file upload progress
            const interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress >= 100) {
                        clearInterval(interval);
                        setUploading(false);
                        return 100;
                    }
                    return prevProgress + 10;
                });
            }, 500);
        }
    };
    return (
        <div> 
            <label>Upload</label>
            <br />
            Choose File            
             <span style={{ margin: '10px 10px' }}></span>
            <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
            <button onClick={() => document.querySelector('input[type="file"]').click()}>Browse</button>
            <span style={{ margin: '10px 10px' }}></span>
            <button onClick={handleUpload}>Upload</button>
            {uploading && (
                <div>
                    <progress value={progress} max="100"></progress>
                    <span>{progress}%</span>
                </div>
            )}
            <br /><br />
            <label>Remove</label>
            <br />
            <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black' }}>ISO Files</th>
                        <th style={{ border: '1px solid black' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exampleFiles.map((file, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black' }}>{file}</td>
                            <td style={{ border: '1px solid black' }}>
                                <button onClick={() => handleRemove(index)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Media;