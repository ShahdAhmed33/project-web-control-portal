import React, { useState } from 'react';

const FileOperations = () => {
    const [filePath, setFilePath] = useState('');
    const [content, setContent] = useState('');

    // Simulate reading a file
    const readFile = () => {
        try {
            // Simulate file content
            const data = 'Simulated file content';
            alert(`File content: ${data}`);
        } catch (err) {
            alert(`Error reading file: ${err}`);
        }
    };

    // Simulate writing to a file
    const writeFile = () => {
        try {
            // Simulate writing content
            alert(`File written successfully with content: ${content}`);
        } catch (err) {
            alert(`Error writing file: ${err}`);
        }
    };

    // Simulate appending to a file
    const appendFile = () => {
        try {
            // Simulate appending content
            alert(`Content appended successfully: ${content}`);
        } catch (err) {
            alert(`Error appending file: ${err}`);
        }
    };

    return (
        <div className="container mt-5">
            <h1>File Operations</h1>
            <div className="mb-3">
                <label htmlFor="filePath" className="form-label">File Path</label>
                <input
                    type="text"
                    className="form-control"
                    id="filePath"
                    value={filePath}
                    onChange={(e) => setFilePath(e.target.value)}
                    placeholder="Enter file path"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">Content</label>
                <textarea
                    className="form-control"
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter content"
                ></textarea>
            </div>
            <button onClick={readFile} className="btn btn-primary me-2">Read File</button>
            <button onClick={writeFile} className="btn btn-success me-2">Write File</button>
            <button onClick={appendFile} className="btn btn-warning">Append File</button>
        </div>
    );
};

export default FileOperations;