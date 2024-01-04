import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/tools-master.png';
import '../../App.css'
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
        id: 2,
        label: 'Chat',
        link: '/chat'
    },
    {
        id: 3,
        label: 'Login',
        link: '/login'
    }
];

const CategoryCanvas = () => {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    return (
        <div className='nav-p-bg d-block d-sm-none fixed-top text-end'  >
            <button type="button" className="border border-primary-subtle btn m-1 rounded-0 text-end" onClick={toggleOffcanvas}>
                <span className="text-white"><i className="fa-solid fa-bars"></i></span>
            </button>

            <div className={`w-50 offcanvas offcanvas-start${isOffcanvasOpen ? ' show' : ''}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ background: '#000028' }}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
                    <button type="button" className="bg-warning btn-close opacity-100 text-reset" onClick={toggleOffcanvas}></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <img src={logo} alt="" className="img-circle img-fluid m-2" />
                    </div>

                    <ul className="list-unstyled">
                        {menuItems.map((menuItem) => (
                            <li className='border-bottom border-secondary fs-5 mb-2  text-white ' key={menuItem.id}>
                                <Link className=' fs-5 mb-2 text-center text-white text-decoration-none' to={menuItem.link} onClick={toggleOffcanvas}>
                                    {menuItem.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CategoryCanvas;
