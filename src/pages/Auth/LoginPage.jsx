import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('username/password wrong')
    };

    return (
        <div data-aos="fade-left" className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="bg-gradient bg-transparent card text-white">
                        <div className="card-header">Login</div>
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
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
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

export default LoginPage;
