import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/tools-master.png';

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

    const menuItems = [
        {
            id: 1,
            label: 'Home',
            link: '/'
        },
        {
            id: 2,
            label: 'Blog',
            link: '/blog'
        },
        {
            id: 3,
            label: 'Login',
            link: '/login'
        }
    ];

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            fixed={isFixed ? 'top' : undefined}
            className={`${isFixed ? 'primary-bg-50' : 'nav-p-bg '} d-none d-sm-block d-md-block fs-5 navbar-expand-lg p-0 pt-0 px-4 py-3`}
            style={{ backdropFilter: 'blur(4px)' }}
        >
            <Navbar.Toggle aria-controls="responsive-navbar-nav " />
            <Navbar.Collapse id="responsive-navbar-nav ">
                <Nav className="justify-content-evenly navbar-nav w-100">
                    <Link to="/" className="d-none d-sm-block">
                        <img
                            src={logo}
                            alt="Logo"
                            width="150px"
                            draggable={false}
                        />
                    </Link>

                    {menuItems.map(item => (
                        <NavLink key={item.id} to={item.link} className="nav-link text-white">
                            {item.label}
                        </NavLink>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
