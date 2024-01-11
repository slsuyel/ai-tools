import React, { useState, useEffect } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import StopWatch from './StopWatch';

const CountdownTimer = () => {
    const [targetDate, setTargetDate] = useState('');
    const [timeLeft, setTimeLeft] = useState({});
    const [timerRunning, setTimerRunning] = useState(false);

    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            setTimeLeft({ days, hours, minutes, seconds });
        } else {
            setTimerRunning(false);
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
    };

    const handleStart = () => {
        if (targetDate && !timerRunning) {
            setTimerRunning(true);
        }
    };

    const handleReset = () => {
        setTimerRunning(false);
        setTargetDate('');
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    };

    const handlePauseResume = () => {
        setTimerRunning((prevTimerRunning) => !prevTimerRunning);
    };

    useEffect(() => {
        let timer;
        if (timerRunning) {
            calculateTimeLeft();
            timer = setInterval(calculateTimeLeft, 1000);
        } else {
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };
    }, [timerRunning, targetDate]);

    return (
        <Container className="mt-5">
            <h1 className='text-white'>Countdown Timer</h1>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="targetDate">
                        <Form.Label className='text-white'>Select Target Date and Time</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            value={targetDate}
                            onChange={(e) => setTargetDate(e.target.value)}
                        />
                    </Form.Group>

                    <div className='d-flex gap-2 justify-content-evenly my-2'>
                        <Button variant="primary" onClick={handleStart}>
                            Start
                        </Button>
                        <Button variant="danger" onClick={handleReset}>
                            Reset
                        </Button>
                        <Button variant="warning" onClick={handlePauseResume}>
                            {timerRunning ? 'Pause' : 'Resume'}
                        </Button>
                    </div>

                </Col>

                <Col md={6}>
                    <div className='card p-3'>
                        <h4><strong>Time Left:</strong>
                            <br />
                            {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes,{' '}
                            {timeLeft.seconds} seconds</h4>
                    </div>
                </Col>
            </Row>
            <br />
            <hr className='text-warning' />
            <hr className='text-warning' />
            <hr className='text-warning' />
            <br />


            <Row className=''>
                <StopWatch />
            </Row>
        </Container>
    );
};

export default CountdownTimer;
