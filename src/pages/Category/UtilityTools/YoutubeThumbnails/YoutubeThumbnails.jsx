import React, { useState } from 'react';

const YoutubeThumbnails = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [videoId, setVideoId] = useState('');

    const getVideoIdFromUrl = (url) => {
        const match = url.match(/(?:youtube\.com\/.*[?&]v=|youtu\.be\/)([^"&?/\s]{11})/);
        return match ? match[1] : null;
    };

    const generateThumbnailUrl = (quality) => `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;


    const handleVideoUrlChange = (event) => {
        const newVideoUrl = event.target.value;
        setVideoUrl(newVideoUrl);
        setVideoId(getVideoIdFromUrl(newVideoUrl));
    };

    const handleGetThumbnailClick = () => {
        setVideoId(getVideoIdFromUrl(videoUrl));
    };




    return (
        <div className="container bg-gradient rounded p-3 text-white">
            <h2 className="mb-4">YouTube Thumbnails</h2>
            <div className="mb-3">
                <label htmlFor="videoUrl" className="form-label">YouTube Video URL:</label>
                <div className="input-group">
                    <input
                        type="text"
                        id="videoUrl"
                        className="form-control"
                        placeholder="Enter YouTube Video URL"
                        value={videoUrl}
                        onChange={handleVideoUrlChange}
                    />
                    <button className="btn btn-outline-primary text-white" type="button" onClick={handleGetThumbnailClick}>Get Thumbnails</button>
                </div>
            </div>

            <hr />
            <hr />
            <hr />
            {videoId && (
                <>
                    <div className="mb-4">
                        <div className='align-items-baseline d-flex justify-content-around mb-2'>
                            <h4>Full Size Image</h4>
                            <a href={generateThumbnailUrl('maxresdefault')} download className="btn btn-success" >Download Thumbnails</a>

                        </div>
                        <img src={generateThumbnailUrl('maxresdefault')} alt="Full Size" className="img-thumbnail" />
                    </div>
                    <div className="mb-4">
                        {/* <h4>Default Thumbnail</h4> */}
                        <div className='align-items-baseline d-flex justify-content-around mb-2'>
                            <h4>Default Thumbnail</h4>
                            <a href={generateThumbnailUrl('default')} download className="btn btn-success" >Download Thumbnails</a>
                        </div>
                        <img src={generateThumbnailUrl('default')} alt="Default Thumbnail" className="img-thumbnail" />
                    </div>
                    <div className="mb-4">
                        {/* <h4>High Quality Thumbnail</h4> */}
                        <div className='align-items-baseline d-flex justify-content-around mb-2'>
                            <h4>High Quality Thumbnail</h4>
                            <a href={generateThumbnailUrl('hqdefault')} download className="btn btn-success" >Download Thumbnails</a>
                        </div>
                        <img src={generateThumbnailUrl('hqdefault')} alt="Default Thumbnail" className="img-thumbnail" />
                    </div>
                    <div className="mb-4">

                        <div className='align-items-baseline d-flex justify-content-around mb-2'>
                            <h4>Standard Quality Thumbnail</h4>
                            <a href={generateThumbnailUrl('sddefault')} download className="btn btn-success" >Download Thumbnails</a>
                        </div>
                        <img src={generateThumbnailUrl('sddefault')} alt="Default Thumbnail" className="img-thumbnail" />
                    </div>


                </>
            )}
        </div>
    );
};

export default YoutubeThumbnails;
