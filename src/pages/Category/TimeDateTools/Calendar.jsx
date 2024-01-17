import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
    const [englishDate, setEnglishDate] = useState(new Date());
    const [hijriDate, setHijriDate] = useState('');
    const [banglaDate, setBanglaDate] = useState('');

    useEffect(() => {
        const fetchDateInfo = async () => {
            try {
                const formattedGregorianDate = new Date(getCurrentDate()).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                }).replace(/\//g, '-');
                const response = await axios.get(`https://api.aladhan.com/v1/gToH/${formattedGregorianDate}`);
                setHijriDate(response.data.data.hijri);
                setBanglaDate(response.data.data.bangla.date);
            } catch (error) {
                console.error('Error fetching date information:', error);
            }
        };
        fetchDateInfo();
    }, []);

    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    return (
        <div className="bg-gradient mx-auto py-5 row">
            <div className="col-md-7">
                <h5 className='text-white text-center'>English Calendar</h5>
                <div>
                    <Calendar className='' onChange={setEnglishDate} value={englishDate} />
                </div>
            </div>
            <div className=' col-md-5 px-3'>
                <h5 className='text-white  text-center'>Date Today</h5>
                <div className='card p-3 py-4 rounded-0'>
                    <h4>English today: {new Date().toLocaleDateString()}</h4>
                    <hr />
                    <h4>Hijri today:   {hijriDate?.day}/{hijriDate?.month?.en}({hijriDate?.month?.number})/{hijriDate?.year}</h4>
                    <hr />
                    <h4>Bangla today: {banglaDate}</h4>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default MyCalendar;
