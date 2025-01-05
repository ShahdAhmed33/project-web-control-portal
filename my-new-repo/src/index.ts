import React from 'react';
import ReactDOM from 'react-dom';
import DateTimePicker from './DateTimePicker'; // Assuming DateTimePicker component is in the same directory
import './DateTimePicker.module.css';

const App = () => {
    return (
        <div>
            <h1>DateTime Picker Example</h1>
            <DateTimePicker />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));