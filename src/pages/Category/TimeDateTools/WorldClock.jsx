import React, { useState, useEffect } from 'react';
import './TimeDateTools.css'
const WorldClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    const cities = [
        { name: 'Dhaka', timeZone: 'Asia/Dhaka' },
        { name: 'London', timeZone: 'Europe/London' },
        { name: 'New York', timeZone: 'America/New_York' },
        { name: 'Dubai', timeZone: 'Asia/Dubai' },
        { name: 'Riyadh', timeZone: 'Asia/Riyadh' },
        { name: 'Kuala Lumpur', timeZone: 'Asia/Kuala_Lumpur' },
        { name: 'Tokyo', timeZone: 'Asia/Tokyo' },
        { name: 'Sydney', timeZone: 'Australia/Sydney' },
        { name: 'Paris', timeZone: 'Europe/Paris' },
        { name: 'Berlin', timeZone: 'Europe/Berlin' },
        { name: 'Rome', timeZone: 'Europe/Rome' },
        { name: 'Moscow', timeZone: 'Europe/Moscow' },
        { name: 'Beijing', timeZone: 'Asia/Shanghai' },
        { name: 'Seoul', timeZone: 'Asia/Seoul' },
        { name: 'Mumbai', timeZone: 'Asia/Kolkata' },
        { name: 'Cape Town', timeZone: 'Africa/Johannesburg' },
        { name: 'Bangkok', timeZone: 'Asia/Bangkok' },
        { name: 'Istanbul', timeZone: 'Europe/Istanbul' },
        { name: 'Mexico City', timeZone: 'America/Mexico_City' },
        { name: 'Sao Paulo', timeZone: 'America/Sao_Paulo' },
        { name: 'Los Angeles', timeZone: 'America/Los_Angeles' },
        { name: 'Chicago', timeZone: 'America/Chicago' },
        { name: 'Toronto', timeZone: 'America/Toronto' },
        { name: 'Cairo', timeZone: 'Africa/Cairo' },
        { name: 'Nairobi', timeZone: 'Africa/Nairobi' },
        { name: 'Singapore', timeZone: 'Asia/Singapore' },
        { name: 'Hong Kong', timeZone: 'Asia/Hong_Kong' },
        { name: 'New Delhi', timeZone: 'Asia/Kolkata' },
        { name: 'Stockholm', timeZone: 'Europe/Stockholm' },
        { name: 'Madrid', timeZone: 'Europe/Madrid' },
        { name: 'Lisbon', timeZone: 'Europe/Lisbon' },
        { name: 'Amsterdam', timeZone: 'Europe/Amsterdam' },
        { name: 'Brussels', timeZone: 'Europe/Brussels' },
        { name: 'Vienna', timeZone: 'Europe/Vienna' },
        { name: 'Athens', timeZone: 'Europe/Athens' },
        { name: 'Oslo', timeZone: 'Europe/Oslo' },
        { name: 'Helsinki', timeZone: 'Europe/Helsinki' },
        { name: 'Copenhagen', timeZone: 'Europe/Copenhagen' },
        { name: 'Warsaw', timeZone: 'Europe/Warsaw' },
        { name: 'Prague', timeZone: 'Europe/Prague' },
        { name: 'Budapest', timeZone: 'Europe/Budapest' },
        { name: 'Istanbul', timeZone: 'Europe/Istanbul' },
        { name: 'Dublin', timeZone: 'Europe/Dublin' },
        { name: 'Buenos Aires', timeZone: 'America/Argentina/Buenos_Aires' },
        { name: 'Vancouver', timeZone: 'America/Vancouver' },
        { name: 'Montreal', timeZone: 'America/Montreal' },
        { name: 'Edmonton', timeZone: 'America/Edmonton' },

        { name: 'Ottawa', timeZone: 'America/Toronto' },
    ];


    useEffect(() => {

        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <div className='d-flex flex-wrap gap-2 justify-content-evenly my-4 w-100'>
                <h2 className='text-white'>World Clock</h2>
                {/*   <Link className='px-3 submit-btn w-auto'><i className="fa-solid fa-clock me-2"></i> Time Zone Converter</Link> */}
            </div>
            <div className='row'>
                {cities.map((city, index) => (
                    <div key={index} className=' col-md-4 mb-2'>
                        <div className='bg-gradient border border-danger-subtle p-3 rounded text-center text-warning'>
                            <h4 className='text-white'><i className="fa-solid fa-location-dot"></i> {city.name}</h4>
                            <p className='mb-0'> <i className="fa-solid fa-clock"></i> <span>Current Time: </span>

                                <span className=''> {currentTime.toLocaleTimeString('en-US', { timeZone: city.timeZone })}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorldClock;
