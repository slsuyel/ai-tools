/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import '../Blog.css'
import SkeletonLoader from '../../../../components/SkeletonLoader/SkeletonLoader';
import useAllNews from '../../../../hooks/useAllNews';

const Col3Bar = ({ tittle }) => {
    const [allNews, , isLoading] = useAllNews()


    if (isLoading) {
        return <div className='content-wrapper'>
            <div className='content-header'><SkeletonLoader /></div></div>
    }

    const randomFourNews = [...allNews].sort(() => Math.random() - 0.5).slice(0, 4);

    return (
        <div className='col-md-3'>
            <div className="mb-1 mx-auto">
                <h3
                    className="border-2 border-bottom border-danger"
                    style={{ paddingLeft: 0 }}
                >
                    <span className="fs-5 primary-bg px-2 py-1 text-nowrap text-white">
                        {tittle}
                    </span>
                </h3>
            </div>
            {randomFourNews.map((newsItem, index) => (
                <div
                    key={index}
                    className="align-items-center d-flex gap-2 mb-1 newscard p-2 rounded-1"
                    style={{ marginBottom: 2 }}
                >
                    <div>
                        <img
                            src={newsItem.banner}
                            alt=""
                            className="img-fluid mb-1"
                            width="180px"
                        />
                    </div>
                    <div>
                        {/* Replace <a> with <Link> */}
                        <Link
                            className="text-decoration-none text-dark"
                            to={`/blog/${newsItem._id}`}
                        >
                            <h6 className="fw-bold">
                                {newsItem.title}
                            </h6>
                            <p style={{ color: "#243ae2" }} className='mb-0'><i className="fas fa-clock me-1 " aria-hidden="true"></i> {new Date(newsItem.date).toISOString().split('T')[0]}</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Col3Bar;
