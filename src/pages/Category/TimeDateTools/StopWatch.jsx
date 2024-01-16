import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import imgGif from '../../../assets/images/Clock.gif'
import imgPng from '../../../assets/images/Clock.png'

const StopWatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let timer;

        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        }

        return () => clearInterval(timer);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    const handlePauseResume = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / (60 * 1000));
        const seconds = Math.floor((time % (60 * 1000)) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10);

        return `${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className='col-md-6 '>
            <h1 className='text-white'>StopWatch</h1>


            <div className='card p-3 '>
                <div className='align-items-center d-flex gap-3 justify-content-around'>  <div><p className='fs-2 fw-bold mb-0 text-primary'>{formatTime(time)}</p></div>
                    <div><img src={isRunning ? imgGif : imgPng} width={50} draggable={false} alt="" /></div></div>
            </div>

            <div className='d-flex gap-2 justify-content-evenly my-2'>
                <Button variant='primary' onClick={handleStart}>
                    Start
                </Button>
                <Button variant='danger' onClick={handleReset}>
                    Reset
                </Button>
                <Button variant='warning' onClick={handlePauseResume}>
                    {isRunning ? 'Pause' : 'Resume'}
                </Button>
            </div>
        </div>
    );
};

export default StopWatch;
