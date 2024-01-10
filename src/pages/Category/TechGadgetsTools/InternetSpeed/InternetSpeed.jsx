import React from 'react';

const InternetSpeed = () => {
    return (
        <div className='card'>
            <h2 className='text-center py-3'>Bandwidth Speed Test </h2>
            <iframe src="https://fast.com/" width={'100%'} height='500px' frameBorder="0"></iframe>

        </div>
    );
};

export default InternetSpeed;