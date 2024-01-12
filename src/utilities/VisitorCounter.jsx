import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../pages/baseurl/baseUrl';

const VisitorCounter = () => {
    const [visitorCount, setVisitorCount] = useState(0);
    useEffect(() => {
        incrementVisitorCount();
    }, []);

    const incrementVisitorCount = async () => {
        try {
            await axios.post(`${baseUrl}/visitor`);
            fetchVisitorCount();
        } catch (error) {
            console.error('Error incrementing visitor count:', error);
        }
    };

    const fetchVisitorCount = async () => {
        try {
            const response = await axios.get(`${baseUrl}/visitor`);
            setVisitorCount(response.data.count);
        } catch (error) {
            console.error('Error fetching visitor count:', error);
        }
    };

    return (
        <>

            {visitorCount}

        </>
    );
};

export default VisitorCounter;
