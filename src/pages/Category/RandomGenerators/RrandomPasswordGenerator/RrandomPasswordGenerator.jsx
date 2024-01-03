import React, { useState } from 'react';
import '../RandomGenerate.css'
const RrandomPasswordGenerator = () => {
    const [password, setPassword] = useState('WetdiS9m4i56');
    const [quality, setQuality] = useState('Strong');
    const [passwordLength, setPasswordLength] = useState(12);
    const [characterSets, setCharacterSets] = useState({
        uppercase: true,
        lowercase: true,
        numbers: true,
        specialCharacters: true,
    });
    const passQuality = ["Very Weak", "Weak", "Good", "Strong", "Very Strong"];




    return (
        <div className='fs-5 '>
            <h1>Rrandom Password Generator</h1>
            <div className='row w-100 my-1 mx-auto'>
                <div className='col-md-8 my-1 '>
                    <div className='position-relative'>

                        <input className='form-control password-view-box' defaultValue={password} type="text" disabled />

                        <div className='label-reload'>
                            <label className='mb-0' htmlFor="">{quality}</label>

                            <i className="fa-rotate-right fa-solid fs-3 me-2"></i></div>

                    </div>
                </div>

                <div className=' my-1 align-items-center col-md-4 d-flex justify-content-center'>
                    <button className='submit-btn'><i className="me-2 fa-solid fa-copy"></i>Copy</button>
                </div>

            </div>

            <div className='row w-100 my-1 mx-auto fs-5 '>
                <div className='col-md-3 text-center'>  <label htmlFor="customRange1" className="form-label m-0 my-1 text-white">
                    Password length:{passwordLength}
                </label></div>

                <div className='col-md-9'>
                    <input type="range" className="form-range  my-1" id="customRange1" />
                </div>
            </div>

            <div className='row w-100 my-1 mx-auto fs-5 '>
                <div className='col-md-3 text-center'>  <label htmlFor="customRange1" className="form-label m-0 my-1 text-white">
                    Characters used:
                </label>
                </div>

                <div className="col-md-9 d-flex flex-wrap fs-5 justify-content-evenly text-white">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckChecked"
                            defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            ABC
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckChecked"
                            defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            abc
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckChecked"
                            defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            123
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckChecked"
                            defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            #$&
                        </label>
                    </div>

                </div>


            </div>


        </div>
    );
};

export default RrandomPasswordGenerator;