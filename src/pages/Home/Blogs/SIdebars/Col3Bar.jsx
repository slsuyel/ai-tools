/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import '../Blog.css'
import SkeletonLoader from '../../../../components/SkeletonLoader/SkeletonLoader';
import useAllNews from '../../../../hooks/useAllNews';

const Col3Bar = () => {
    const [allNews, , isLoading] = useAllNews()


    if (isLoading) {
        return <div className='content-wrapper'>
            <div className='content-header'><SkeletonLoader /></div></div>
    }

    const randomFourNews = [...allNews].sort(() => Math.random() - 0.5).slice(0, 4);

    return (
        <div className='col-md-3 px-1'>
            {randomFourNews.map((newsItem, index) => (
                <div key={index}
                    className="row mx-1 mb-1 newscard p-2 rounded-1"
                    style={{ marginBottom: 2 }} >
                    <div className='col-md-5 my-auto'>
                        <img
                            src={newsItem.banner}
                            alt=""
                            className="img-fluid mb-1"

                        />

                        {/* <p>Author:{newsItem.author}</p> */}

                    </div>
                    <div className='col-md-7'>
                        <Link
                            className="text-decoration-none text-dark"
                            to={`/blog/${newsItem._id}`}
                        >
                            <h6 className="text-white">
                                {newsItem.title}
                            </h6>
                        </Link>



                    </div>
                </div>
            ))}
        </div>
    );
};

export default Col3Bar;
