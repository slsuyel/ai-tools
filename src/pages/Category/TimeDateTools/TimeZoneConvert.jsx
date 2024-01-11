import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import WorldClock from './WorldClock';
import './TimeDateTools.css'
const TimeZoneConvert = () => {
    const cities = [
        { label: 'Dhaka', value: 'Asia/Dhaka' },
        { label: 'London', value: 'Europe/London' },
        { label: 'New York', value: 'America/New_York' },
        { label: 'Dubai', value: 'Asia/Dubai' },
        { label: 'Riyadh', value: 'Asia/Riyadh' },
        { label: 'Kuala Lumpur', value: 'Asia/Kuala_Lumpur' },
        { label: 'Tokyo', value: 'Asia/Tokyo' },
        { label: 'Sydney', value: 'Australia/Sydney' },
        { label: 'Paris', value: 'Europe/Paris' },
        { label: 'Berlin', value: 'Europe/Berlin' },
        { label: 'Rome', value: 'Europe/Rome' },
        { label: 'Moscow', value: 'Europe/Moscow' },
        { label: 'Beijing', value: 'Asia/Shanghai' },
        { label: 'Seoul', value: 'Asia/Seoul' },
        { label: 'Mumbai', value: 'Asia/Kolkata' },
        { label: 'Cape Town', value: 'Africa/Johannesburg' },
        { label: 'Bangkok', value: 'Asia/Bangkok' },
        { label: 'Istanbul', value: 'Europe/Istanbul' },
        { label: 'Mexico City', value: 'America/Mexico_City' },
        { label: 'Sao Paulo', value: 'America/Sao_Paulo' },
        { label: 'Los Angeles', value: 'America/Los_Angeles' },
        { label: 'Chicago', value: 'America/Chicago' },
        { label: 'Toronto', value: 'America/Toronto' },
        { label: 'Cairo', value: 'Africa/Cairo' },
        { label: 'Nairobi', value: 'Africa/Nairobi' },
        { label: 'Singapore', value: 'Asia/Singapore' },
        { label: 'Hong Kong', value: 'Asia/Hong_Kong' },
        { label: 'New Delhi', value: 'Asia/Kolkata' },
        { label: 'Stockholm', value: 'Europe/Stockholm' },
        { label: 'Madrid', value: 'Europe/Madrid' },
        { label: 'Lisbon', value: 'Europe/Lisbon' },
        { label: 'Amsterdam', value: 'Europe/Amsterdam' },
        { label: 'Brussels', value: 'Europe/Brussels' },
        { label: 'Vienna', value: 'Europe/Vienna' },
        { label: 'Athens', value: 'Europe/Athens' },
        { label: 'Oslo', value: 'Europe/Oslo' },
        { label: 'Helsinki', value: 'Europe/Helsinki' },
        { label: 'Copenhagen', value: 'Europe/Copenhagen' },
        { label: 'Warsaw', value: 'Europe/Warsaw' },
        { label: 'Prague', value: 'Europe/Prague' },
        { label: 'Budapest', value: 'Europe/Budapest' },
        { label: 'Istanbul', value: 'Europe/Istanbul' },
        { label: 'Dublin', value: 'Europe/Dublin' },
        { label: 'Buenos Aires', value: 'America/Argentina/Buenos_Aires' },
        { label: 'Vancouver', value: 'America/Vancouver' },
        { label: 'Montreal', value: 'America/Montreal' },
        { label: 'Edmonton', value: 'America/Edmonton' },

        { label: 'Ottawa', value: 'America/Toronto' },
    ];

    const [selectedCity, setSelectedCity] = useState('Dhaka');
    const [currentTime, setCurrentTime] = useState(new Date());

    const handleCityChange = (selectedOption) => {
        setSelectedCity(selectedOption);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const getFormattedTime = () => {
        if (selectedCity) {
            const options = {
                timeZone: selectedCity.value,
                hour12: false,
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            };
            return currentTime.toLocaleTimeString('en-US', options);
        } else {
            return 'None';
        }
    };

    return (
        <>
            <div className='bg-white row py-4 mx-auto'>
                <h3 className='text-center'>Worlds Time converter</h3>
                <hr />
                <div className="col-md-6">
                    <span className='p-2'>Select the city</span>
                    <Select
                        id="citySelect"
                        className="form-select"

                        options={cities}
                        onChange={handleCityChange}
                        value={selectedCity}
                    />
                </div>

                <div className="col-md-6">
                    <div className=" mb-0 px-4 py-2">
                        <h5>Selected City: {selectedCity.label || 'Dhaka'}</h5>
                        <h2>Time :    {getFormattedTime()}</h2>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />

            <WorldClock />

        </>
    );
};

export default TimeZoneConvert;