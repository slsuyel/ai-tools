import React from 'react';
import Col6Card from './SIdebars/Col6Card';
import Col3Bar from './SIdebars/Col3Bar';
import NavBar from './NavBar/NavBar';

const Blogs = () => {
    return (
        <div className='bg-gradient '>

            <NavBar />
            <div className=' row w-100 mx-auto my-1 mt-3'>
                <Col3Bar tittle={'Tech news'} />
                <Col6Card tittle={'Programming'} />
                <Col3Bar tittle={'Mobile Development'} />
            </div>
            <div className=' row w-100 mx-auto my-1'>
                <Col6Card tittle={'Web development'} />
                <Col3Bar tittle={'Software Engineering'} />
                <Col3Bar tittle={'Cybersecurity'} />
            </div>
            <div className=' row w-100 mx-auto my-1'>
                <Col6Card tittle={'Cloud Computing'} />
                <Col6Card tittle={'Machine Learning'} />
            </div>
            <div className=' row w-100 mx-auto my-1'>

                <Col3Bar tittle={'Tech news'} />
                <Col3Bar tittle={'Artificial Intelligence'} />
                <Col3Bar tittle={'Computer'} />
                <Col3Bar tittle={'Data Science'} />
            </div>

        </div>
    );
};

export default Blogs;