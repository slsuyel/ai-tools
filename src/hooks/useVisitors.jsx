import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "../pages/baseurl/baseUrl";
const useVisitors = () => {
    const [visitorCount, setVisitorCount] = useState(0);
    useEffect(() => {
        const fetchVisitorCount = async () => {
            try {
                const response = await axios.get(`${baseUrl}/visitor`);
                setVisitorCount(response.data.count);
            } catch (error) {
                console.error('Error fetching visitor count:', error);
            }
        };
        fetchVisitorCount();
    }, []);

    return visitorCount;
};

export default useVisitors;
