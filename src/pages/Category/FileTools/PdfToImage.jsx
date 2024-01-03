import React, { useState } from 'react';

const PdfToImage = () => {
    const [file, setFile] = useState(null);

    const handleChange = (event) => {
        const { type } = event.target;
        const newValue = type === 'file' ? event.target.files[0] : event.target.value;
        setFile(newValue);
    };
    const handleButtonClick = () => {
        document.getElementById('formFileLg').click();
    };
    console.log(file);
    return (
        <div className='bg-gradient'>

            <h1 className='text-white pt-4 text-center w-100'>PDF to Image</h1>
            <h3 className='text-white mb-5 text-center w-100'>Easily PDF to Image online for free.</h3>

            <div className="drop_box mx-auto col-md-4">
                <i className="fs-1 fa-solid fa-image text-white"></i>

                <p>Files Supported: Pdf </p>
                <input
                    name="upImg" onChange={handleChange}
                    type="file"
                    hidden=""
                    accept=".pdf"
                    id="formFileLg"
                    style={{ display: "none" }}
                />
                <button onClick={handleButtonClick} disabled className="bg-gradient-gray btn submit-btn text-bg-danger">Choose File</button>
            </div>

            <div className=' flex justify-center submit-btn mb-3'>
                <a
                    className='text-decoration-none'
                    href={''}
                    download={'tool-master-ai.png'}
                >

                    <i className="fa-solid fa-download text-danger"></i>   Download

                </a>
            </div>

            <h1 className='text-center text-warning mb-5 py-5'> We are working in this page,
                <br />
                Please wait . . .
            </h1>



        </div>
    );
};

export default PdfToImage;