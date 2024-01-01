/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';

const BkashCashOutCharge = () => {
    const [amount, setAmount] = useState('');
    const [chargeType, setChargeType] = useState('app');
    const [totalCharge, setTotalCharge] = useState(0);
    const [totalWithCharge, setTotalWithCharge] = useState(0);
    const [totalWithoutCharge, setTotalWithoutCharge] = useState(0);

    const calculateCharge = () => {
        const numericAmount = parseFloat(amount);

        if (!isNaN(numericAmount)) {
            const chargeRate = chargeType === 'app' ? 0.0185 : 0.0149;

            const withCharge = numericAmount + numericAmount * chargeRate;
            setTotalWithCharge(withCharge.toFixed(2));
            const withoutCharge = numericAmount - numericAmount * chargeRate;
            setTotalWithoutCharge(withoutCharge.toFixed(2));
            setTotalCharge((amount - withoutCharge).toFixed(2))

        } else {
            setTotalWithCharge(0);
            setTotalWithoutCharge(0);
            totalCharge(0)

        }
    };

    // console.log(totalWithCharge);
    return (
        <div className="container">
            <h1 className="text-center text-white mb-4">Calculate Bkash Cash Out Charge Rate: 2023</h1>

            <div className='col-md-8 mx-auto'>

                <form onSubmit={(e) => { e.preventDefault(); calculateCharge(); }}>
                    <div className="form-group">
                        <label className='text-white' htmlFor="chargeType">Select Charge Type:</label>
                        <select
                            className="form-control"
                            id="chargeType"
                            value={chargeType}
                            onChange={(e) => setChargeType(e.target.value)}
                        >
                            <option value="app">Dial *247# & App (1.85%)</option>
                            <option value="priyo">Priyo & ATM: 1.49%</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className='text-white' htmlFor="amount">Enter Amount:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>
                    <div className='d-flex justify-content-center mb-2'>
                        <button type="submit" className="submit-btn">
                            Calculate
                        </button>
                    </div>
                </form>


                <div className="row mx-0 text-center" aria-label="Calculator Output">
                    <div className="col-4 px-0">
                        <div className="card rounded-0">
                            <div className="card-header fw-bold px-1">
                                <span className="d-block d-md-inline-block">With</span> Charge
                            </div>
                            <div className="card-body py-4">
                                <span className="withCharge fs-5 fw-bold">{totalWithCharge}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 px-0">
                        <div className="card rounded-0">
                            <div className="card-header fw-bold px-1">
                                <span className="d-block d-md-inline-block">Total</span> Charge
                            </div>
                            <div className="card-body py-4">
                                <span className="totalCharge fs-5 fw-bold">{totalCharge}</span>
                            </div>

                        </div>
                    </div>
                    <div className="col-4 px-0">
                        <div className="card rounded-0">
                            <div className="card-header fw-bold px-1">
                                <span className="d-block d-md-inline-block">Without</span> Charge
                            </div>
                            <div className="card-body py-4">
                                <span className="withoutCharge fs-5 fw-bold">{totalWithoutCharge}</span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="row">
                <div className="col-md-6">
                    <h3 className='text-white'>Types of Bkash Cash Out Charge Rate:</h3>
                    <ul className='text-white'>
                        <li>1.85% - Per 1000tk cash out charge is 18.5tk.</li>
                        <li>1.49% - Per 1000tk cash out charge is 14.9tk.</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3 className='text-white'>Ways to Cash Out from Bkash:</h3>
                    <ul className='text-white'>
                        <li>ATM</li>
                        <li>App</li>
                        <li>Dial *247#</li>
                    </ul>
                </div>
            </div>

            <div className="card mt-4">
                <div className="card-body">
                    <h4 className=''>Cash Out Charges Details:</h4>
                    < p className=''>
                        If you cash out from ATM and by adding Priyo number, the charge will be 1.49% (14.9 tk per 1000tk cash out) till BDT 25,000 in a month. After that, it will be charged at 1.85%.
                    </p>
                    <p className=''>
                        1.85% cash out charge will be applicable from any agent without a Priyo agent number, both from the App & USSD (by dialing *247#).
                    </p>
                </div>
            </div>

            <div>
                <h2 className='text-center text-white'>Bkash Send Money Charge Calculator 2023</h2>
                <p className='text-white'>
                    Bkash send money process is very. So, don't need any calculator for send
                    money. Following given Bkash send money charge:
                </p>
                <p className='text-white'>
                    <span style={{ fontWeight: "bolder" }}>
                        For 1 to 25000 tk charge is 5 taka only.
                    </span>
                </p>
                <p className='text-white'>
                    <span style={{ fontWeight: "bolder" }}>
                        For above 25000 tk charge is 10 tk only.
                    </span>
                </p>
                <p className='text-white'>
                    <span style={{ fontWeight: "bolder" }}>
                        <br />
                    </span>
                </p>
                <h2 className='text-center text-white'>Bkash Cash Out Charge Limit</h2>
                <p className='text-white'>
                    <br />
                </p>
                <p className='text-white'>
                    <img
                        className='img-fluid'
                        alt="Bkash Cash Out Charge Limit"
                        src="https://programsolver.com//public/assets/img/article/article_img_1687690848.webp"

                    />
                    <br />
                </p>
            </div>


        </div>
    );
};

export default BkashCashOutCharge;
