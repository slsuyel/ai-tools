import React, { useState } from 'react';
import Breadcrumb from '../../../../components/Breadcrumb';

export default function BackgroundRemover() {
    const [bgRemove, setBgRemove] = useState(null);
    const [upImg, setUpImg] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const { type } = event.target;
        const newValue = type === 'file' ? event.target.files[0] : event.target.value;
        setUpImg(newValue);
    };

    const handleRemoveBackground = async () => {
        setLoading(true);
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
            reader.onloadend = () => {
                setBgRemove(reader.result);
                setLoading(false); // Set loading to false once background removal is complete
            };
            reader.readAsDataURL(data);
        } catch (error) {
            console.log(error);
            setLoading(false); // Set loading to false in case of an error
        }
    };

    const handleButtonClick = () => {
        document.getElementById('formFileLg').click();
    };
    return (
        <div className='bg-gradient'>

            <div className='pt-3'>
                <Breadcrumb title={'Remove Image Background'} description={''} />
            </div>

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
                                className={`${'submit-btn '}`}
                                disabled={loading}
                            >
                                <i className="fa-solid fa-eraser me-1"></i>  {loading ? 'Removing Background...' : 'Remove Background'}
                            </button>

                            {bgRemove && (
                                <div className='ms-3 flex justify-center submit-btn mb-3'>
                                    <a
                                        className='text-decoration-none'
                                        href={bgRemove}
                                        download={'tool-master-ai.png'}
                                    >

                                        <i className="fa-solid fa-download text-danger"></i>   Download

                                    </a>
                                </div>
                            )}


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

                </div>
            </div>
        </div>
    );
}
