import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../../../components/Loader';

const IslamicDateConversion = () => {
    const [gregorianDate, setGregorianDate] = useState(getCurrentDate());
    const [hijriDate, setHijriDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHijriDate = async () => {
            try {
                setLoading(true);
                setError(null);

                // Format the date as DD-MM-YYYY
                const formattedGregorianDate = new Date(gregorianDate).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                }).replace(/\//g, '-');

                const response = await axios.get(
                    `https://api.aladhan.com/v1/gToH/${formattedGregorianDate}`
                );

                if (response.data.code === 200) {
                    console.log(response);
                    setHijriDate(response.data.data.hijri);
                } else {
                    setError(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching Hijri date:', error);
                setError({ code: 500, status: 'INTERNAL_SERVER_ERROR', data: 'Internal server error.' });
            } finally {
                setLoading(false);
            }
        };

        fetchHijriDate();
    }, [gregorianDate]);

    const handleGregorianDateChange = (event) => {
        setGregorianDate(event.target.value);
    };

    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    return (
        <div className="py-5 rounded bg-gradient">
            <div className="row justify-content-center">
                <div className="col-md-10 px-3">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title text-center">Islamic/Hijri Date Conversion</h1>
                            <br />
                            <form>
                                <div className="form-group">
                                    <label htmlFor="gregorianDate">Enter Gregorian Date:</label>
                                    <input
                                        type="date"
                                        id="gregorianDate"
                                        className="form-control"
                                        value={gregorianDate}
                                        onChange={handleGregorianDateChange}
                                    />
                                </div>
                            </form>
                            <hr />

                            {loading ? (
                                <Loader />
                            ) : error ? (
                                <p className="text-center text-danger">{error?.data}</p>
                            ) : (
                                <div>
                                    <h5 className="text-center">Hijri Date for {gregorianDate}</h5>
                                    <hr />
                                    <h4 className="text-center"> (Hijri) Date: {hijriDate?.date}</h4>

                                    <hr />
                                    <h4 className="text-center"> (Hijri) weekday: {hijriDate?.weekday?.en} , {hijriDate?.weekday?.ar} </h4>

                                    <hr />

                                    <h4 className="text-center"> (Hijri) Day:
                                        {hijriDate?.day}

                                    </h4>
                                    <hr />
                                    <h4 className="text-center"> (Hijri) month: {hijriDate?.month?.en}({hijriDate?.month?.number})</h4>
                                    <hr />
                                    <h4 className="text-center"> (Hijri) year: {hijriDate?.year}</h4>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IslamicDateConversion;
