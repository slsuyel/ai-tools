import React, { useState } from 'react';
import qrLoding from '../../../../assets/images/qr-scanning.gif'
import { Link } from 'react-router-dom';

function QRCodeGenerator() {
    const [inputValue, setInputValue] = useState('');
    const [QR, setQR] = useState('');

    const createQr = () => {
        if (!inputValue) {
            return alert('Your content is empty. Input something.');
        }
        setQR(`https://chart.apis.google.com/chart?cht=qr&chl=${inputValue}&chs=360`);
    };

    return (
        <div>
            <div className="container mx-auto">
                {/* Top content */}
                <div className="">
                    {/* Qr code title */}
                    <h1 className="text-center text-white text-4xl mt-6 mb-2 font-bold">QR Code Generator</h1>

                    {/* paragraph */}
                    <p className="text-center text-white text-xl mb-3">
                        An instant creation of a QR code with any content.
                    </p>
                </div>

                {/* Search Input And Button */}
                <div className="row">
                    <div className="col-md-5">
                        <div className="align-items-center d-flex gap-2 input justify-content-center mb-3">
                            <div>
                                <h2 className=" text-center text-warning ">
                                    Wrie Here  your Text!
                                </h2>
                                <textarea value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)} name="" id="" cols="37" rows="13">

                                </textarea>
                            </div>


                        </div>
                    </div>

                    <div className="align-items-center col-md-2 d-flex flex-wrap justify-content-center my-2">
                        <button
                            onClick={createQr}
                            className="submit-btn">
                            Create QR
                        </button>

                        {/* {QR &&
                            <button

                                className="submit-btn">

                                <i className="fa-solid fa-circle-down"></i> Download

                            </button>

                        } */}


                    </div>

                    <div className="col-md-5">

                        <div className="qr-container">

                            <h2 className=" text-center text-teal ">
                                Here is your QR!
                            </h2>

                            <a className="d-flex justify-content-center">
                                <img className="border border-danger-subtle p-1 qr-image w-100 img-fluid" src={QR ? QR : qrLoding}


                                    alt="QR code" />
                            </a>
                        </div>

                    </div>
                </div>

            </div>

            <div className="bg-gradient mt-3 py-3 rounded text-center">
                <Link to="/coding-tools/qr-code-scanner" className="tool-btn">
                    <i className="fa-solid fa-screwdriver-wrench" aria-hidden="true"></i>QR Code Scanner
                </Link>
            </div>


        </div>
    );
}

export default QRCodeGenerator;
