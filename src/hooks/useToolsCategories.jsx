import React, { useEffect, useState } from 'react';
import { callApi } from '../utilities/functions';

const useToolsCategories = () => {
    const [toolsCategories, setToolsCategories] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await callApi("GET", ``);
                setToolsCategories(response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching student data:', error);
                setIsLoading(false);
            }
        };
        fetchStudentData();
    }, []);
    return { toolsCategories, isLoading };
};

export default useToolsCategories;