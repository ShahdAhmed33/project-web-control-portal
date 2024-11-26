import React from 'react';
import './login.css';
import acpcLogo from './acpclogo.png';
import ACPCLOGO from './acpclogo-removebg-preview.png'

import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center login" style={{ minHeight: '100vh' }}>
            <div className="card" style={{ width: '750px', padding: '50px', height: '750px', backgroundColor: '#d3d3d3' }}>
                <div className="card-body">
                    <div className="d-flex justify-content-center" style={{ backgroundColor: '#d3d3d3', padding: '20px', borderRadius: '50%' }}>
                        <img src={ACPCLOGO} className="rounded" alt="ACPC Logo Error" style={{ width: '100px', height: '100px' }} />
                    </div>
                    <h1 className="h1 text-center" style={{ padding: '50px' }}>
                        <strong>
                            Welcome to <span style={{ color: 'blue' }}>A</span><span style={{ color: 'orange' }}>C</span><span style={{ color: 'orange' }}>P</span><span style={{ color: 'red' }}>C</span> Portal
                        </strong>
                    </h1>
                    <form className="mt-4" style={{ padding: '45px' }}>
                        <div className="form-group">
                            <label htmlFor="username" className="form-label" style={{ fontSize: "22px" }}>Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter username" />
                        </div>
                        <p></p>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label" style={{ fontSize: "22px" }}>Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" />
                        </div>
                        <br></br>
                        <div className="d-flex" style={{ padding: '40px' }}>
                            <button type="submit" className="btn btn-primary btn-lg">Login</button>
                            <button type="reset" className="btn btn-primary ms-auto btn-lg">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;