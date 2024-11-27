import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import ACPCLOGO from './acpclogo-removebg-preview.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    if (username === 'admin' && password === 'password') {
      onLogin();
      navigate('/General'); // Navigate to the main application
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="card" style={{ width: '750px', padding: '50px', backgroundColor: '#d3d3d3' }}>
        <div className="card-body">
          <div className="d-flex justify-content-center" style={{ backgroundColor: '#d3d3d3', padding: '20px', borderRadius: '50%' }}>
            <img src={ACPCLOGO} className="rounded" alt="ACPC Logo Error" style={{ width: '100px', height: '100px' }} />
          </div>
          <h1 className="h1 text-center" style={{ padding: '50px' }}>
            <strong>
              Welcome to <span style={{ color: 'blue' }}>A</span><span style={{ color: 'orange' }}>C</span><span style={{ color: 'orange' }}>P</span><span style={{ color: 'red' }}>C</span> Portal
            </strong>
          </h1>
          <form className="mt-4" style={{ padding: '45px' }} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username" className="form-label" style={{ fontSize: "22px" }}>Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <p></p>
            <div className="form-group">
              <label htmlFor="password" className="form-label" style={{ fontSize: "22px" }}>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <div className="d-flex" style={{ padding: 0 }}>
              <button type="submit" className="btn btn-primary btn-lg">Login</button>
              <button type="reset" className="btn btn-primary ms-auto btn-lg">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;