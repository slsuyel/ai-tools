/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import '../Blog.css'
import useAllNews from '../../../../hooks/useAllNews';
import SkeletonLoader from '../../../../components/SkeletonLoader/SkeletonLoader';
const Col6Card = () => {

    const [allNews, , isLoading] = useAllNews()
    const randomFourNews = [...allNews].sort(() => Math.random() - 0.5).slice(0, 6);



    if (isLoading) {
        return <div className='content-wrapper'>
            <div className='content-header'><SkeletonLoader /></div></div>
    }

    return (
        <div className='col-md-6 py-1 rounded' style={{ background: '#353131' }}>
            <div className='row mx-auto w-100'>
                <div className="col-md-6 p-0">
                    <Link to={`/blog/${allNews[0]._id}`} className='text-decoration-none '>
                        <div className="img-contain rounded-1">
                            <img
                                src={allNews[0]?.banner}
                                alt="Zoomable Image"
                            />

                        </div>

                        <div className="">

                            <h2 className="fs-5 text-white">{allNews[0]?.title}</h2>
                            {/* <p className='mb-0 text-info'>{new Date(allNews[0].date).toISOString().split('T')[0]}</p> */}

                            <p className='fs-6 mb-0 text-white '>
                                <div dangerouslySetInnerHTML={{ __html: allNews[0]?.content.slice(0, 190) + (allNews[0]?.content.length > 195 ? " . . ." : "") }} />
                            </p>


                        </div>
                    </Link>


                </div>

                <div className='col-md-6 mx-auto row'>

                    {
                        randomFourNews.slice(0, 4).map((news) => <div key={news._id} className='col-md-6'>
                            <Link to={`/blog/${news._id}`} className='text-decoration-none '>
                                <img src={news.banner} alt="" className='img-fluid' />
                                <p className='p-title'>  {news.title}</p></Link>
                        </div>
                        )
                    }



                </div>

            </div>


        </div>
    );
};

export default Col6Card;