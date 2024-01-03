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
        <div className='bg-gradient'>

            <h1 className='text-white pt-4 text-center w-100'>Remove Image Background</h1>
            <h3 className='text-white mb-5 text-center w-100'>Easily Remove Background From Image online for free.</h3>


            <div className='container mt-5'>
                <div className=''>
                    {/* Input */}
                    <div className='input'>
                        <div className="">
                            <div className="drop_box mx-auto col-md-4">

                                <i className="fs-1 fa-solid fa-image text-white"></i>

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
                    <div className='flex flex-wrap gap-1 justify-content-around mb-5'>
                        {upImg && (
                            <div className='border border-info-subtle p-3'>
                                <img
                                    className='img-fluid '
                                    width={400}
                                    height={'auto'}
                                    src={upImg ? URL.createObjectURL(upImg) : ''}
                                    alt='img'
                                />
                            </div>
                        )}

                        {bgRemove && (
                            <div className='border border-info-subtle p-3'>
                                <img className='img-fluid'
                                    width={400}
                                    height={'auto'}
                                    src={bgRemove} alt='img' />
                            </div>
                        )}
                    </div>

                    {/* Download button */}
                    {bgRemove && (
                        <div className=' flex justify-center submit-btn mb-3'>
                            <a
                                className='text-decoration-none'
                                href={bgRemove}
                                download={'save.png'}
                            >

                                Download

                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
