import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo-icon.png';
import logo2 from '../../assets/images/tools-master.png';
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
        id: 3,
        label: 'Login',
        link: '/login'
    }
];

const CategoryCanvas = () => {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };


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
            <div className='align-items-center d-block d-flex d-sm-none fixed-top justify-content-between nav-p-bg px-1 text-end py-2'  >

                <Link to={'/'}>
                    <img className='ms-2' src={logo} width={60} height={50} alt="" /></Link>

                <div className='w-50'>
                    <input
                        type="search"
                        className="form-control bg-transparent search-input text-white"
                        placeholder="Search any tools"
                        value={searchTerm}
                        onChange={handleInputChange}

                    />


                </div>



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
                            <img src={logo2} alt="" className="img-circle img-fluid m-2" />
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

        </>
    );
};

export default CategoryCanvas;
