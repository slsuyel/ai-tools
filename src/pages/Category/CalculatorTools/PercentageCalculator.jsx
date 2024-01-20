/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

const PercentageCalculator = () => {
    const [percentage, setPercentage] = useState('');
    const [ofValue, setOfValue] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ensure both input values are provided
        if (!percentage || !ofValue) {
            alert('Please enter both percentage and of value');
            return;
        }

        // Perform the percentage calculation
        const calculatedResult = (parseFloat(percentage) / 100) * parseFloat(ofValue);
        setResult(calculatedResult.toFixed(2)); // Limit result to two decimal places
    };

    return (
        <div className="container mt-5 bg-gradient text-white p-4 rounded">
            <h1 className="mb-4">Percentage Calculator</h1>
            <form id="f1" data-gtm-form-interact-id={0} onSubmit={handleSubmit}>
                <div className="align-items-baseline d-flex flex-wrap gap-3 justify-content-between">
                    <div className="form-group d-flex">
                        <label className='text-nowrap mx-2 my-auto' htmlFor="percentageInput ">What is </label>
                        <input
                            type="text"
                            className="form-control"
                            id="percentageInput"
                            value={percentage}
                            onChange={(e) => setPercentage(e.target.value)}
                            autoFocus
                            data-gtm-form-interact-field-id={0}
                            style={{ background: "rgb(255, 255, 255)" }}
                        />
                        <label htmlFor="ofInput" className="mx-2 text-nowrap my-auto"> % of </label>
                        <input
                            type="text"
                            className="form-control"
                            id="ofInput"
                            value={ofValue}
                            onChange={(e) => setOfValue(e.target.value)}
                            data-gtm-form-interact-field-id={1}
                            style={{ background: "rgb(255, 255, 255)" }}
                        />
                        <label className="mx-2 text-nowrap my-auto" >?</label>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Calculate</button>
                    </div>

                    <div className="d-flex form-group mx-2">
                        <span className="hide my-auto">&nbsp;%</span>

                        <input type="text" className="form-control mx-2" size={6} readOnly="readonly" value={result} />
                    </div>
                </div>

            </form>
            <hr />
            <hr />
            <hr />
            <hr />
            <div className="card p-3 py-5 ">
                <p className="tips">
                    <strong>Tips:</strong> Use tab to move to the next field. Use shift-tab to
                    move to the previous field. Press enter to calculate.
                </p>
                <h1> About</h1>
                This website is designed to help you quickly and easily calculate percentages for a variety of purposes. Whether you're calculating discounts, calculating tips, or trying to figure out how much something has increased or decreased in value, our percentage calculator can help.

                <h1> FAQ</h1>
                What is a percentage?
                Percentage is a way of expressing a number as a fraction of 100. It is commonly used to represent a portion of a whole or to compare two numbers. Percentages are often denoted with the symbol "%". For example, if there are 100 cars in a garage and 25 of them are white, we could say that 25% of the cars in the garage are white.

                <h1> How do you calculate a percentage?</h1>
                To calculate a percentage, you typically divide the part (the smaller value) by the whole (the larger value), and then multiply the result by 100. This gives you the percentage value as a number between 0 and 100. For example, if you have 50 apples and you want to know what percentage of them are red, and 20 of them are red, you would divide 20 by 50 to get 0.4, then multiply by 100 to get 40%.

                <h1> Why percentages matter?</h1>
                Percentages are used in a wide variety of contexts, from calculating discounts and taxes to measuring changes in stock prices and economic indicators. Understanding how percentages work can help you make more informed decisions in a variety of areas, from personal finance to business management.
            </div>


        </div>
    );
};

export default PercentageCalculator;
