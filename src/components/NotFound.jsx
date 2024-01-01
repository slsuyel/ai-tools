import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {

    const location = useLocation();
    const lastPart = location.pathname.split('/').pop().split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');


    return (
        <div className='text-danger py-5 my-5' style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 className='fw-bold mb-3 text-white'>{lastPart} page</h1>
            <h1>We are sorry 😔</h1>
            <p className='mb-0'>Currently the page you are looking for does not exist.</p>
            <p>The page is under construction</p>

        </div>
    );
};

export default NotFound;
