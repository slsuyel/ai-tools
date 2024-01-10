import React from 'react';
import './Utilites.css'
const ColorContrast = () => {
    return (
        <div className='card'>
            <div className="text-center my-3">
                <h1>Color Contrast Checker</h1>

            </div>
            <iframe src="https://coolors.co/contrast-checker/ffffff-201d71" width={'100%'} height='800px' frameBorder="0"></iframe>

        </div>
    );
};

export default ColorContrast;