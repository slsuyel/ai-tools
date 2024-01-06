import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/tools-master.png';

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

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

    const handleInputChange = (e) => {
        const inputValue = e.target.value.trim();
        const validInput = /^[a-zA-Z0-9\s]+$/.test(inputValue);
        if (validInput) {
            setSearchTerm(inputValue);
            if (inputValue) {
                navigate(`search-results/${inputValue}`);
            }
        } else {
            setSearchTerm('');
            navigate('/');
        }
    };




    return (
        <>
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

                    <div className="align-items-center d-flex">
                        <div className=''>
                            <input
                                type="search"
                                className="form-control rounded-0"
                                placeholder="Search any tools"
                                value={searchTerm}
                                onChange={handleInputChange}
                            />
                        </div>
                        {/*  <div className="text-nowrap">
                       
                            <button  className="btn btn-primary rounded-0" >
                                <i className="fa fa-search me-1"></i>
                                Search
                            </button>
                        </div> */}
                    </div>

                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;
