import React, { useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../pages/baseurl/baseUrl';

const VisitorCounter = () => {
    useEffect(() => {
        incrementVisitorCount();
    }, []);

    const incrementVisitorCount = async () => {
        try {
            await axios.post(`${baseUrl}/visitor`);
        } catch (error) {
            console.error('Error incrementing visitor count:', error);
        }
    };

    return (
        <>

        </>
    );
};

export default VisitorCounter;
