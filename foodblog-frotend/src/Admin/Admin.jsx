import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import './Admin.css'
import Dashboard from './Dashboard/Dashboard';

export default function Admin() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin123') {
            alert('Login successful!');
            setLoggedIn(true);
            navigate('/dashboard');
        } else {
            alert('Login failed. Please check your credentials.');
        }
    };

    const onSubmit = () => {
        handleLogin();
    };

    return (
        <>
            <section className="login-container">
                <form className="admin-login" onSubmit={handleSubmit(onSubmit)}>
                    <img src="./public/OIG.png" id='admin-logo' alt="" />
                    <h2>Admin Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        // value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        // value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                    <div className="or-div">
                        <hr />
                        or
                        <hr />
                    </div>
                    <div className="reset-pass-div">
                        <Link to='/' className="reset-pass-link">Forgot password?</Link>
                    </div>
                </form>
            </section>
            {isLoggedIn && <Dashboard />}
        </>
    )
}
