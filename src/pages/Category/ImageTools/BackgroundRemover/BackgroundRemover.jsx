import React, { useState } from 'react';

export default function BackgroundRemover() {
    // const [image, setImage] = useState(null);
    const [bgRemove, setBgRemove] = useState(null);

    const [upImg, setUpImg] = useState(null);

    const handleChange = (event) => {
        const { type } = event.target;
        const newValue = type === 'file' ? event.target.files[0] : event.target.value;

        setUpImg(newValue);
    };


    const handleRemoveBackground = async () => {
        const apiKey = '5PH3XUqpCr2DMxXoBfwpnNaN';
        const apiUrl = 'https://api.remove.bg/v1.0/removebg';

        const formData = new FormData();
        formData.append('image_file', upImg, upImg.name);
        formData.append('size', 'auto');

        try {
            const res = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'X-api-key': apiKey,
                },
                body: formData,
            });

            const data = await res.blob();

            const reader = new FileReader();
            reader.onloadend = () => setBgRemove(reader.result);
            reader.readAsDataURL(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleButtonClick = () => {
        // Trigger the file input click
        document.getElementById('formFileLg').click();
    };




    return (
        <div className=''>

            <h1 className='text-white mt-4 text-center w-100'>Remove Image Background</h1>
            <h3 className='text-white mb-5 text-center w-100'>Easily Remove Background From Image online for free.</h3>


            <div className='container mt-5'>
                <div className=''>
                    {/* Input */}
                    <div className='input'>
                        {/* Input Tag */}
                        {/*  <div className='input border border-gray-700 px-2 py-2 rounded-lg bg-gray-950 mb-5'>
                            <input
                                type='file'
                                onChange={(e) => setImage(e.target.files[0])}
                                className='form-control text-sm text-gray-500'
                            />
                        </div> */}


                        <div className="">
                            <div className="drop_box mx-auto w-75">

                                <i className="fs-1 fa-solid fa-image"></i>

                                <p>Files Supported: JPG, JPEG, PNG, </p>
                                <input
                                    name="upImg" onChange={handleChange}
                                    type="file"
                                    hidden=""
                                    accept=".jpg, .jpeg, .png, "
                                    id="formFileLg"
                                    style={{ display: "none" }}
                                />
                                <button onClick={handleButtonClick} className="bg-gradient-gray btn submit-btn text-bg-danger">Choose Image</button>
                            </div>
                        </div>



                        {/* Remove Background Button */}
                        <div className='flex justify-center mb-5'>
                            <button
                                type='button'
                                onClick={handleRemoveBackground}
                                className='btn btn-primary'
                            >
                                Remove Background
                            </button>
                        </div>
                    </div>

                    {/* Output */}
                    <div className='flex gap-1 mb-5 '>
                        {upImg && (
                            <div className='border-2 border-gray-500 rounded-l-lg border-dashed flex justify-center p-2 w-40'>
                                <img
                                    className='img-fluid'
                                    src={upImg ? URL.createObjectURL(upImg) : ''}
                                    alt='img'
                                />
                            </div>
                        )}

                        {bgRemove && (
                            <div className='border-2 border-gray-500 rounded-r-lg border-dashed flex justify-center p-2 w-40'>
                                <img className='img-fluid' src={bgRemove} alt='img' />
                            </div>
                        )}
                    </div>

                    {/* Download button */}
                    {bgRemove && (
                        <div className='flex justify-center'>
                            <a
                                className='w-full'
                                href={bgRemove}
                                download={'save.png'}
                            >
                                <button className='btn btn-dark'>
                                    Download
                                </button>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
