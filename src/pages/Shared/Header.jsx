import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/tools-master.png'
const Header = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsFixed(offset > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                fixed={isFixed ? 'top' : undefined}
                className={`${isFixed ? 'primary-bg-50' : 'nav-p-bg '} fw-bold navbar navbar-expand-lg  shadow-sm px-3 `}
                style={{ backdropFilter: 'blur(4px)' }}
            >
                <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                <Navbar.Collapse id="responsive-navbar-nav ">
                    <Nav className="justify-content-evenly navbar-nav w-100">
                        <Link to="/" className="d-none d-sm-block">
                            <img
                                src={logo}
                                alt=""
                                width={'150px'}
                                draggable={false}
                            />
                        </Link>

                        <NavLink to="/" className="nav-link text-white">
                            Home
                        </NavLink>
                        <NavLink to="/blog" className="nav-link text-white">
                            Blog
                        </NavLink>
                        <NavLink to="/login" className="nav-link text-white">
                            Login
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </div>
    );
};

export default Header;
