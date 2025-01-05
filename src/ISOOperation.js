import React, { Component } from 'react';
class ISOFileOperations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isoFiles: [],
            selectedIso: '',
            generateImage: 'YES'
        };
    }

    componentDidMount() {
        // Fetch the list of ISO files from the server
        fetch('/api/iso-files')
            .then(response => response.json())
            .then(data => this.setState({ isoFiles: data }))
            .catch(error => console.error('Error fetching ISO files:', error));
    }

    handleGenerateClick = () => {
        // Add your generate logic here
        console.log('Generate button clicked for ISO:', this.state.selectedIso);
    };

    handleCheckClick = () => {
        // Add your check logic here
        console.log('Check button clicked with Generate Image:', this.state.generateImage);
    };

    handleIsoChange = (e) => {
        this.setState({ selectedIso: e.target.value });
    };

    handleGenerateImageChange = (value) => {
        this.setState({ generateImage: value });
    };

    render() {
        return (
            <div className="container mt-4">
                <h2>ISO File Operations</h2>
                <div className="form-group">
                    <label>Select an ISO file:</label>
                    <select className="form-control" value={this.state.selectedIso} onChange={this.handleIsoChange}>
                        <option value="">Select an ISO file</option>
                        {this.state.isoFiles.map((file, index) => (
                            <option key={index} value={file}>{file}</option>
                        ))}
                    </select>
                    <button className="btn btn-primary mt-2" onClick={this.handleGenerateClick}>Generate</button>
                </div>
                <div className="form-group mt-4">
                    <label>Generate Image:</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            value="YES"
                            checked={this.state.generateImage === 'YES'}
                            onChange={() => this.handleGenerateImageChange('YES')}
                        />
                        <label className="form-check-label">
                            YES
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            value="NO"
                            checked={this.state.generateImage === 'NO'}
                            onChange={() => this.handleGenerateImageChange('NO')}
                        />
                        <label className="form-check-label">
                            NO
                        </label>
                    </div>
                    <button className="btn btn-secondary mt-2" onClick={this.handleCheckClick}>Check</button>
                </div>
            </div>
        );
    }
}

export default ISOFileOperations;