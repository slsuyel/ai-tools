/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import '../Blog.css'
import useAllNews from '../../../../hooks/useAllNews';
import SkeletonLoader from '../../../../components/SkeletonLoader/SkeletonLoader';
const Col6Card = ({ tittle }) => {

    const [allNews, , isLoading] = useAllNews()
    const randomFourNews = [...allNews].sort(() => Math.random() - 0.5).slice(0, 6);


    if (isLoading) {
        return <div className='content-wrapper'>
            <div className='content-header'><SkeletonLoader /></div></div>
    }

    return (
        <div className='col-md-6'>

            <div className="mb-1 mx-auto  w-100">
                <h3
                    className="border-2 border-bottom border-danger"
                    style={{ paddingLeft: 0 }}
                >
                    <span className="fs-5 primary-bg px-2 py-1 text-nowrap text-white">
                        {tittle ? tittle : 'Not Found'}
                    </span>
                </h3>
            </div>

            <div className='row mx-auto w-100'>
                <div className="col-md-6 p-0">
                    <a href="" className='text-decoration-none '>
                        <div className="img-contain rounded-1">
                            <img
                                src={allNews[0]?.banner}
                                alt="Zoomable Image"
                            />

                        </div>

                        <div className="">

                            <h2 className="fs-4 fw-bold lh-1 mb-0 text-white">{allNews[0]?.title}</h2>
                            <p className='mb-0 text-white'>{new Date(allNews[0].date).toISOString().split('T')[0]}</p>

                            <p className='fs-6 mb-0 text-white'>


                                <div dangerouslySetInnerHTML={{ __html: allNews[0]?.content }} />
                            </p>
                        </div>
                    </a>


                </div>

                <div className='col-md-6 mx-auto row'>

                    {
                        randomFourNews.map((news) => <div key={news._id} className='col-md-6'>
                            <Link to='/news/12' className='text-decoration-none '>
                                <img src={news.banner} alt="" className='img-fluid' />
                                <h6 className='fw-bold mb-0 mt-1 text-white'>  {news.title}</h6></Link>
                        </div>
                        )
                    }



                </div>

            </div>


        </div>
    );
};

export default Col6Card;