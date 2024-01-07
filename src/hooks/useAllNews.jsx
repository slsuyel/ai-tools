import { useState, useEffect } from "react";
import { baseUrl } from "../pages/baseurl/baseUrl";

const useAllNews = () => {
    const [allNews, setAllNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const res = await fetch(`${baseUrl}/blogs`);
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await res.json();
            setAllNews(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        fetchData();
    };

    return [allNews, refetch, isLoading];
};

export default useAllNews;
