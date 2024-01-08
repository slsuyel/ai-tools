import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from './../baseurl/baseUrl';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${baseUrl}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userName, password }),
            });

            if (response.ok) {
                const data = await response.json(); // Parse the JSON response
                localStorage.setItem('userToken', data.token);

                navigate('/dashboard');
                setUserName('');
                setPassword('');
            } else {
                console.error('Authentication failed');
            }
        } catch (error) {
            console.error('Error during authentication:', error);
        }
    };



    return (
        <div data-aos="fade-left" className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="bg-gradient bg-transparent card text-white">
                        <div className="card-header text-center">AdminLogin</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">
                                        Username
                                    </label>
                                    <input
                                        style={{ backgroundColor: '#18127c4f' }}
                                        type="text"
                                        className=" form-control text-warning"
                                        id="userName"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        style={{ backgroundColor: '#18127c4f' }}
                                        type="password"
                                        className=" form-control text-warning"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <button type="submit" className="submit-btn">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
