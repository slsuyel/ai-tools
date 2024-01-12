import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './TossGenerator.css'; // Import custom CSS for flipping animation

const TossGenerator = () => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Reset loading state after 2 seconds
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }, [loading]);

    const handleCoinFlip = () => {
        setLoading(true);
        setResult(null)
        setTimeout(() => {
            const randomResult = Math.random() < 0.5 ? 'Heads/Water lilies' : 'Tails/Mens';
            setResult(randomResult);
        }, 5000);
    };

    return (
        <div className="container mt-4  text-white js-container container">
            <h2 className="mb-4">Online Toss Generator</h2>
            <div className={`mt-4 bg-gradient p-3 row ${loading ? 'flipping' : ''}`}>

                <div className='bg-warning-subtle py-1 text-center my-2'>  <button className="btn btn-primary font-monospace mx-auto submit-btn text-bg-danger" onClick={handleCoinFlip} disabled={loading}>
                    {loading ? 'Loading...' : 'Toss Now'}
                </button></div>
                <div className=' col-md-6 text-center my-1'>
                    <img
                        src={result === 'Heads/Water lilies' ? 'https://en.numista.com/catalogue/photos/bangladesh/256-original.jpg' : 'https://collectorsbd.xyz/wp-content/uploads/2020/03/207-original.jpg'}
                        alt={`${result} coin`}
                        className={`img-fluid rounded-circle border border-3 border-secondary ${loading ? 'flip-animation' : ''}`}
                        style={{ width: '300px', height: '300px' }}
                    />
                </div>
                <div className='card col-md-6 rounded text-center my-1 aaaaaaa'>
                    <h3 className="my-3">Result:  </h3>
                    <h2 className='bg-black py-4 text-warning'>
                        {loading ? "Please wait . . ." : result}</h2>

                </div>

            </div>



        </div>
    );
};

export default TossGenerator;
