import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        setSearchTerm(inputValue);
        if (inputValue) {
            navigate(`search-results/${inputValue}`);
        } else {
            navigate('/');
        }
    };


    return (
        <>
            <div className='align-items-center d-block d-flex d-sm-none fixed-top justify-content-between nav-p-bg px-1 text-end pb-2'  >

                <Link to={'/'}>
                    <img className='img-fluid ms-2' src="https://tools-suyel.netlify.app/assets/tools-master-5b24bd77.png" width={130} alt="" /></Link>

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


                        <div className="">
                            <div className=''>
                                <input
                                    type="search"
                                    className="form-control rounded-0"
                                    placeholder="Search any tools"
                                    value={searchTerm}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* <div className=" text-nowrap">
                                <button className="btn btn-primary rounded-0 ">
                                    <i className="fa fa-search me-1"></i>
                                    Search</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CategoryCanvas;
