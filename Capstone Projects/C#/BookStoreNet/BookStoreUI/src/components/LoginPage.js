import React, { useState } from 'react';
import { login } from '../api';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS
import bookstoreLogo from './images/education.png';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await login({ username, password });
            const { authToken } = resp.data;
            localStorage.setItem('jwtToken', authToken);
            localStorage.setItem('username', username);
            navigate('/');
        } catch (error) {
            console.error('Authentication failed', error);
            alert("Login failed");
        }
    };

    const handleReset = () => {
        setUsername('');
        setPassword('');
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                <img src={bookstoreLogo} alt="Bookstore Logo" className="logo" />
                    <h2>Sign in</h2>
                    <h6>to continue to BookStore</h6>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="button-group">
                        <button type="submit" className="btn btn-primary" style={{width:"100%", padding: "10px"}}>Next</button>
                        <button type="button" className="btn btn-secondary" style={{width:"100%", padding: "10px"}} onClick={handleReset}>Reset</button>
                        <button type="button" className="btn btn-danger" style={{width:"100%", padding: "10px"}} onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
                <div className="login-footer">
                    <p>Don't have an account? <a href="/register">Register here</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
