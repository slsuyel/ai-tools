import React from 'react';
import Col6Card from './SIdebars/Col6Card';
import Col3Bar from './SIdebars/Col3Bar';

const Blogs = () => {
    return (
        <>

            <div className=' row w-100 mx-auto my-1'>
                <Col3Bar tittle={'Tech'} />
                <Col6Card tittle={'Mobile'} />
                <Col3Bar tittle={'Tech'} />
            </div>
            <div className=' row w-100 mx-auto my-1'>
                <Col6Card tittle={'Internet'} />
                <Col3Bar tittle={'Computer'} />
                <Col3Bar tittle={'Tech'} />
            </div>
            <div className=' row w-100 mx-auto my-1'>
                <Col6Card tittle={'Internet'} />
                <Col6Card tittle={'Internet'} />
            </div>
            <div className=' row w-100 mx-auto my-1'>

                <Col3Bar tittle={'Computer'} />
                <Col3Bar tittle={'Computer'} />
                <Col3Bar tittle={'Computer'} />
                <Col3Bar tittle={'Tech'} />
            </div>


        </>
    );
};

export default Blogs;