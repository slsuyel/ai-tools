import React, { useState, useEffect } from 'react';
import HadithTable from './HadithTable';
import Loader from '../../../../components/Loader';

const Hadith = () => {
    const [hadiths, setHadiths] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const fetchHadiths = (pageNumber) => {
        setIsLoading(true);
        const apiUrl = `https://www.hadithapi.com/api/hadiths?apiKey=$2y$10$VmaurPtzvAgUHxeKKHn5vheFd9XXRAw48et7Xh3Txt470yurWfxS&book=sahih-bukhari&paginate=10&page=${pageNumber}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setHadiths(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });
    };





    useEffect(() => {
        fetchHadiths(page);
    }, [page]);

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        setPage(page + 1);
    };

    if (isLoading) {
        return <Loader />
    }

    const data = hadiths.hadiths.data

    return (
        <div className="container mt-md-0">
            <h1 className="mt-md-0 mt-5 pt-5 py-3 text-center text-white">Sahih Bukhari Hadiths</h1>


            <div>

                <HadithTable data={data} isLoading={isLoading} />


                <div className="mt-4 text-center">
                    <button className="btn btn-primary mx-2" onClick={handlePreviousPage} disabled={page === 1}>
                        Previous Page
                    </button>
                    <span>Page {page}</span>
                    <button className="btn btn-primary mx-2" onClick={handleNextPage}>
                        Next Page
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Hadith;
