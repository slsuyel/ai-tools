// useApiHook.js
import { useState, useEffect } from 'react';
import { baseUrl } from '../pages/baseurl/baseUrl';

const useApiHook = (apiName) => {
    const [apiKey, setApiKey] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApiKey = async () => {
            try {
                const response = await fetch(`${baseUrl}/getApiValue/${apiName}`);
                const data = await response.json();
                setApiKey(data.apiValue);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchApiKey();
    }, [apiName]);

    return { apiKey, loading, error };
};

export default useApiHook;
