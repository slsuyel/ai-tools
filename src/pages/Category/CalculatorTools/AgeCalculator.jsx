import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from '../../../components/Breadcrumb';

const AgeCalculator = () => {
    const [birthDate, setBirthDate] = useState('');
    const [ageAtDate, setAgeAtDate] = useState('');
    const [result, setResult] = useState('');

    const calculateAge = () => {
        const birthDateObj = new Date(birthDate);
        const ageAtDateObj = new Date(ageAtDate);

        if (!isNaN(birthDateObj.getTime()) && !isNaN(ageAtDateObj.getTime())) {
            const timeDiff = ageAtDateObj - birthDateObj;

            const years = Math.floor(timeDiff / (365 * 24 * 60 * 60 * 1000));
            const months = Math.floor((timeDiff % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
            const days = Math.floor((timeDiff % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

            setResult(`Age: ${years} years ${months} months ${days} days`);
        } else {
            setResult('Invalid input');
        }
    };

    return (
        <div className="text-white container">

            <Breadcrumb title={'Age Calculator'} description={'Calculate Age Easilly'} />


            <div className="text-white row">
                <div className="text-white col-md-6">
                    <label htmlFor="birthDate" className="text-white form-label">
                        Enter Date of Birth:
                    </label>
                    <input
                        type="date"
                        className=" form-control"
                        id="birthDate"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                    />
                </div>
                <div className="text-white col-md-6">
                    <label htmlFor="ageAtDate" className="text-white form-label">
                        Enter Age at Date:
                    </label>
                    <input
                        type="date"
                        className=" form-control"
                        id="ageAtDate"
                        value={ageAtDate}
                        onChange={(e) => setAgeAtDate(e.target.value)}
                    />
                </div>
            </div>
            <div className="text-white mt-3">
                <button className="submit-btn mx-auto" onClick={calculateAge}>
                    Calculate Age
                </button>
            </div>
            <div className="text-white mt-3">
                <h3>{result}</h3>
            </div>
        </div>
    );
};

export default AgeCalculator;
