import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Namaz = () => {
    const [city, setCity] = useState('Dhaka');
    const [prayerTimes, setPrayerTimes] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPrayerTimes = async () => {
            try {
                const response = await axios.get(
                    `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=your_country_code`
                );

                setPrayerTimes(response.data.data.timings);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching prayer times:', error);
            }
        };

        fetchPrayerTimes();
    }, [city]);

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className="container mt-5 mt-md-0">
            <div className=" justify-content-center">
                <div className="">

                    <div className="card">
                        <h1 className='text-center fs-3 py-3'>Prayer time in your city</h1>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="city">Enter City:</label>
                                    <input
                                        type="text"
                                        id="city"
                                        className="form-control"
                                        placeholder="Enter city"
                                        value={city}
                                        onChange={handleCityChange}
                                    />
                                </div>
                            </form>

                            {loading ? (
                                <p className="text-center">Loading...</p>
                            ) : (
                                <div>
                                    <h2 className="text-center">Prayer Times for {city}</h2>
                                    <ul className="list-group">
                                        {Object.entries(prayerTimes).map(([key, value]) => (
                                            <li key={key} className="list-group-item">
                                                <strong>{key}:</strong> {value}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Namaz;
