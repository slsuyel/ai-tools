import React, { useState } from 'react';
import './Utilites.css';

const ColorContrast = () => {
    const [backgroundColor, setBackgroundColor] = useState('#090851');
    const [textColor, setTextColor] = useState('#ffffff');

    return (
        <div className='bg-white p-3 rounded'>
            <div className='text-center my-3'>
                <h1>Color Contrast Checker</h1>
            </div>
            <div className='row w-100 mx-auto'>
                <div className='col-md-6 border rounded'>
                    <div className='ps-3'>
                        <label>Background Color:</label><br />
                        <div className='align-items-center d-flex'>
                            <input type='text' value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
                            <input type='color' className='color-pick' value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
                        </div>
                    </div>

                    <br />
                    <div className='ps-3'>
                        <label>Text Color:</label><br />
                        <div className='align-items-center d-flex'>
                            <input type='text' value={textColor} onChange={(e) => setTextColor(e.target.value)} />
                            <input type='color' className='color-pick' value={textColor} onChange={(e) => setTextColor(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className='col-md-6 border p-3 '>
                    <div style={{ backgroundColor: backgroundColor }} className='text-center rounded p-2'>
                        <h1 style={{ color: textColor }}>Color Contrast Checker</h1>
                        <p style={{ color: textColor }}>Tools Master - Ai: Your AI toolkit for streamlined online tasks.</p>
                    </div>
                </div>
            </div>

            <div className='card p-2 my-3'>
                <h3>How does it work?</h3>
                <p>
                    This tool follows the Web Content Accessibility Guidelines (WCAG), which are a series of recommendations for making the web more accessible.</p>
            </div>
        </div>
    );
};

export default ColorContrast;
