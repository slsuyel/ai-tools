import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RandomNumber = () => {
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [randomNumber, setRandomNumber] = useState(null);

    const generateRandomNumber = () => {
        const minNumber = parseInt(min);
        const maxNumber = parseInt(max);

        if (!isNaN(minNumber) && !isNaN(maxNumber) && minNumber < maxNumber) {
            const randomNum = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
            setRandomNumber(randomNum);
        } else {
            setRandomNumber(null);
        }
    };

    return (
        <div className="container mt-5 bg-gradient text-white p-3 rounded row">
            <h1>Random Number Generator</h1>
            <div className="col-md-6">
                <div className="mb-3">
                    <label className="form-label">Minimum Number:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Maximum Number:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                    />
                </div>
                <button className="submit-btn w-auto" onClick={generateRandomNumber}>
                    Generate Random Number
                </button>
            </div>
            <div className="col-md-6 ">
                {randomNumber !== null && (
                    <div className="mt-3">
                        <h2>Random Number:</h2>
                        <p className='bg-gradient fs-1 p-3 rounded overflow-x-scroll'>{randomNumber}</p>
                    </div>
                )}
            </div>

        </div>
    );
};

export default RandomNumber;
