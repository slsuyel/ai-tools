import React from 'react';

const NavBar = () => {
    return (
        <nav className="bg-dark mt-5 mt-lg-0 navbar navbar-dark navbar-expand-lg pt-4 pt-lg-0 px-1 px-2">
            <div className="container py-1">
                <a className="navbar-brand" href="#"> Blogs</a>
                <button className="collapsed  navbar-toggler p-1 rounded-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Articles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
