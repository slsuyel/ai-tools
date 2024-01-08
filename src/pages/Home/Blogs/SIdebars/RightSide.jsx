/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import '../Blog.css'
import SkeletonLoader from '../../../../components/SkeletonLoader/SkeletonLoader';
import useAllNews from '../../../../hooks/useAllNews';

const RightSide = () => {
    const [allNews, , isLoading] = useAllNews()


    if (isLoading) {
        return <div className='content-wrapper'>
            <div className='content-header'><SkeletonLoader /></div></div>
    }



    return (
        <div className=' mt-2'>
            {allNews.slice(0, 10).map((newsItem, index) => (
                <div key={index}
                    className="row mx-1 mb-1 newscard  rounded-1"
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

export default RightSide;
