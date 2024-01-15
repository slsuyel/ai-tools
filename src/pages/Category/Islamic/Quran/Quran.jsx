import React, { useEffect, useState } from 'react';
import '../Islamic.css';
import Loader from '../../../../components/Loader';

const Quran = () => {
    const [sura, setSura] = useState({});
    const [value, setValue] = useState(1);
    const [loader, setLoader] = useState(false);
    const [ayahStates, setAyahStates] = useState([]);

    useEffect(() => {
        setLoader(true);
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.alquran.cloud/v1/surah/${value}/ar.alafasy`);
                const data = await response.json();
                setSura(data.data);
                setAyahStates(new Array(data.data.ayahs.length).fill(false));
                setLoader(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoader(false);
            }
        };

        fetchData();
    }, [value]);

    const handlePlayPause = (ayahIndex, action) => {
        const audio = document.getElementById(`music-${ayahIndex}`);
        const updatedAyahStates = [...ayahStates];

        if (action === 'playPause') {
            if (updatedAyahStates[ayahIndex]) {
                audio.pause();
            } else {
                audio.play();
            }
            updatedAyahStates[ayahIndex] = !updatedAyahStates[ayahIndex];
        } else if (action === 'forward') {
            audio.currentTime += 2;
        } else if (action === 'backward') {
            audio.currentTime -= 2;
        }

        setAyahStates(updatedAyahStates);
    };




    return (
        <div className=''>
            <div className='bg-gradient p-3 rounded text-white w-100'>
                <div className='row my-2 '>
                    <div className='col-md-8 my-auto d-flex justify-content-between px-3 text-capitalize'>
                        <h5 className='sura-details'>{sura?.number}. {sura?.englishName}</h5>
                        <h5 className='sura-details'>{sura?.englishNameTranslation}</h5>
                        <h5 className='sura-details'>{sura?.name}</h5>
                    </div>
                    <div className='col-md-4 d-flex gap-4 justify-content-end btn-next-pre'>
                        <button
                            disabled={loader}
                            onClick={() => setValue(value - 1)} className='btn btn-danger'>Previous</button>
                        <button
                            disabled={loader}
                            onClick={() => setValue(value + 1)} className='btn btn-success'>Next</button>
                    </div>
                </div>
                <hr />

                <div>
                    <h5 className='text-center text-decoration-underline pb-2'>بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ </h5>

                    {loader ? <Loader /> : sura.ayahs?.map((ayah, index) => (
                        <div className='row' key={index}>
                            <div className='col-md-9 col-sm-7 my-3'>
                                <h4 className='my-2'>{ayah.number}. {ayah.text} </h4>
                            </div>

                            <div className="text-center col-md-3 col-sm-5 my-3">
                                <audio id={`music-${index}`} preload="true">
                                    <source src={ayah.audio} />
                                </audio>
                                <div id="audioplayer" className='align-items-center d-flex justify-content-around py-2 shadow-sm'>
                                    <i className="fas fa-backward" onClick={() => handlePlayPause(index, 'backward')}></i>
                                    <i className={`fas ${ayahStates[index] ? 'fa-pause' : 'fa-play'}`} onClick={() => handlePlayPause(index, 'playPause')}></i>
                                    <i className="fas fa-forward" onClick={() => handlePlayPause(index, 'forward')}></i>

                                    {/* <div id="timeline" className='mt-0'>
                                        <div id="playhead"></div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <hr />
                <div className=' d-flex gap-4 justify-content-between'>
                    <button
                        disabled={loader}
                        onClick={() => setValue(value - 1)} className='btn btn-danger'>Previous</button>
                    <button
                        disabled={loader}
                        onClick={() => setValue(value + 1)} className='btn btn-success'>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Quran;
