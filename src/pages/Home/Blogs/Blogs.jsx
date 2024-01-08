import React from 'react';
import Col6Card from './SIdebars/Col6Card';
import Col3Bar from './SIdebars/Col3Bar';
import NavBar from './NavBar/NavBar';

const Blogs = () => {
    return (
        <div className='bg-gradient '>

            <NavBar />
            <div className=' row w-100 mx-auto my-2 '>
                <Col3Bar />
                <Col6Card />
                <Col3Bar />
            </div>
            <div className=' row w-100 mx-auto my-2'>
                <Col6Card />
                <Col3Bar />
                <Col3Bar />
            </div>

            <div className=' row w-100 mx-auto my-2'>

                <Col3Bar />
                <Col3Bar />
                <Col6Card />
            </div>

        </div>
    );
};

export default Blogs;