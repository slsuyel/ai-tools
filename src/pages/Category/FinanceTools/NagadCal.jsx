import React, { useState } from 'react';

const NagadCal = () => {
    const [amount, setAmount] = useState('');
    const [chargeType, setChargeType] = useState('app');
    const [totalCharge, setTotalCharge] = useState(0);
    const [totalWithCharge, setTotalWithCharge] = useState(0);
    const [totalWithoutCharge, setTotalWithoutCharge] = useState(0);
    const calculateCharge = () => {
        const numericAmount = parseFloat(amount);

        if (!isNaN(numericAmount)) {
            const chargeRate = chargeType === 'app' ? 0.0125 : 0.015;

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
    return (
        <div className="container w-100 mx-auto">
            <h1 className="text-center text-white mb-4">Calculate Nagad Cash Out Charge Rate: 2023</h1>
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
                            <option value="app">Cash Out App</option>
                            <option value="priyo">Nagad Islamic(App)/Cash Out(*167#)</option>
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

            <section
                className="my-4 mx-auto w-100 my-md-5 des rounded"
                aria-label="Calculator Description"
            >

                <h2 className='text-white'>How to Use&nbsp;Nagad Cash Out Charge Calculator</h2>
                <p className='text-white'>
                    This is the first look of Nagad cash out charge calculator. In this
                    calculator have 2 value first one is charge type and other amount. and
                    bottom has output part. In this part charge will be show cash out charge
                    with amount and without amount &amp; charge.
                </p>
                <p className='text-white'>
                    <img
                        alt="Nagad Cash Out Charge Calculator First look"
                        src="https://img001.prntscr.com/file/img001/yftOl_udToS9A1fLccLaOQ.png"
                        className='w-100 mx-auto text-center img-fluid'
                    />
                </p>

                <p className='text-white'>
                    <br />
                </p>
                <h3 className='text-white'>
                    <span style={{ fontSize: "1.75rem" }}>Nagad Cash Out Charge 2023:</span>
                    <br />
                </h3>
                <p className='text-white'>
                    <font color="#ff0000">
                        In Nagad have 2 types of cash out charge. One is 1.58% that means per
                        1000tk charge is 11.48tk and other 1.5% that means per 1000tk charge is
                        15tk.
                    </font>
                </p>
                <div className='card p-3'>
                    <h6>You can cash out money from Nagad by 2 ways:</h6>
                    <ol>
                        <li>App and Islamic App</li>
                        <li>Dial *167#</li>
                    </ol>
                </div>
                <p className='text-white'>
                    <span style={{ fontWeight: "bolder" }}>-</span>If you cash out by app this
                    time charge will be 12.50/thousand with VAT.&nbsp;
                    <span style={{ fontSize: "1rem" }}>
                        that means per 1000 will be charge 11.48 taka.
                    </span>
                </p>
                <p className='text-white'>
                    <span style={{ fontWeight: "bolder" }}>-</span>
                    <span style={{ fontSize: "1rem" }}>
                        If you cash out by dial *167# and Islamic app this time charge will be
                        15/thousand with VAT.&nbsp;
                    </span>

                </p>
                <p className='text-white'>
                    <span style={{ fontSize: "1rem" }}>
                        <br />
                    </span>
                </p>
                <h2 className='text-white'>Nagad Cash Out Limit:</h2>
                <p className='text-white'>
                    <br />
                </p>
                <p className='text-white'>
                    <img
                        alt="Nagad Cash Out Charge Calculator Limit"
                        src="https://i.ibb.co/YkQKknN/article-img-1687759793.webp"
                        className='w-100 mx-auto text-center img-fluid'
                    />
                    <span style={{ fontSize: "1rem" }}>
                        <br />
                    </span>
                </p>
                <p className='text-white'>
                    <span style={{ fontSize: "1rem" }}>
                        <br />
                    </span>
                </p>
                <h2 className='text-white'>FAQ:</h2>
                <h3 className='text-white'>Q. What is the Nagad Cash Out Charge from App?</h3>
                <p className='text-white'>
                    <span style={{ fontSize: "1rem" }}>
                        <b>Ans:</b> From App&nbsp;
                    </span>
                    <span style={{ fontSize: "1rem" }}>1.12.5% with VAT.&nbsp;</span>
                    <span style={{ fontSize: "1rem" }}>
                        that means per thousand will be charge 12.5 taka.
                    </span>
                </p>
                <h3 className='text-white'>Q. What is the Cash Out Charge for Nagad Payment?</h3>
                <p className='text-white'>
                    <span style={{ fontSize: "1rem" }}>
                        <span style={{ fontWeight: "bolder" }}>Ans:</span>&nbsp;P
                    </span>
                    <span style={{ fontSize: "1rem" }}>er thousand will be charge&nbsp;</span>
                    <span style={{ fontSize: "1rem" }}>11.48 and</span>
                    <span style={{ fontSize: "1rem" }}>&nbsp;15 taka.</span>
                </p>
                <h3 className='text-white'>Q. How do I Cash Out from Nagad?</h3>
                <p className='text-white'>
                    <span style={{ fontSize: "1rem" }}>
                        <span style={{ fontWeight: "bolder" }}>Ans:</span>&nbsp;Can cash out f
                    </span>
                    rom App and&nbsp;USSD code *167#.
                </p>
                <p className='text-white'>
                    <br />
                </p>
            </section>


        </div>
    );
};

export default NagadCal;