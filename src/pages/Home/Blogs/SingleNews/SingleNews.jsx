
import { useEffect } from "react";
import { useState } from "react";
import SkeletonLoader from "../../../../components/SkeletonLoader/SkeletonLoader";
import SocialShare from "../../../../components/SocialShare";

import { useParams } from "react-router-dom";
import { baseUrl } from "../../../baseurl/baseUrl";
import RightSide from "../SIdebars/RightSide";

const SingleNews = () => {
    const { id } = useParams();

    const [news, setNews] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`${baseUrl}/blog/${id}`)
            .then(res => res.json())
            .then(data => {
                setNews(data);
                setLoading(false);
            })
    }, [id])


    return (
        <>

            {/* <NavBar /> */}
            {
                loading ? <SkeletonLoader /> : <>
                    <div className="bg-gradient container-fluid mx-auto w-100 pt-5 mt-4 mt-lg-0">
                        <div className="container-fluid my-2 border-bottom border-2">
                            <p className="mb-0 category-tittle fs-6">
                                {news?.selectedCategoryValues && news.selectedCategoryValues.length > 0
                                    ? news.selectedCategoryValues.map((item, index) => (
                                        <span key={index} className="text-capitalize text-white">
                                            {item}
                                            {index !== news.selectedCategoryValues.length - 1 ? ',' : ''}
                                        </span>
                                    ))
                                    : null}
                            </p>
                            <h2 className="fs-2 my-2 text-white">{news?.title} </h2>
                            <div className="align-items-center d-flex flex-wrap justify-content-between mb-3">

                                <div className="d-flex gap-4 text-white">
                                    <p> Author : {news?.author}</p>
                                    <p>Date : {news.date}</p>
                                </div>
                                <SocialShare />
                            </div>
                        </div>

                        <div className="mx-auto row w-100 my-4 ">
                            <div className="col-md-9 col-sm-12 col-xl-9 ">
                                <img src={news.banner} alt="" className="img-fluid rounded-1 w-100 " style={{ maxHeight: '400px' }} />
                                <div>
                                    <p className="my-3 ">
                                        <div className='bg-gradient border border-secondary lh-base mb-2 p-2 rounded-1 text-white'
                                            dangerouslySetInnerHTML={{
                                                __html: `<p class='d-inline'> <span className="fs-5 text-secondary">
                             </span>${news?.content}</p>`
                                            }}
                                        />
                                    </p>
                                </div>


                            </div>

                            <div className="col-md-3">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9WKH0sDJasNwi0Ce_n39pFrLsmtuTWHjS3F9qCGqbB2XnAdVfATPkl37chgeDc4fKyQ&usqp=CAU" className="img-fluid" alt="" />

                                <RightSide />


                            </div>





                        </div>



                    </div></>
            }
        </>
    );
};

export default SingleNews;