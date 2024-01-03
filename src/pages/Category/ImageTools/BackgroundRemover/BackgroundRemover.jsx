import React, { useState } from 'react';

const BackgroundRemover = () => {
    const [upImg, setUpImg] = useState(null);

    const handleChange = (event) => {
        const { type } = event.target;
        const newValue = type === 'file' ? event.target.files[0] : event.target.value;

        setUpImg(newValue);
    };

    const img = upImg
        ? URL.createObjectURL(upImg)
        : '';

    console.log(img);
    const handleButtonClick = () => {
        document.getElementById('formFileLg').click();
    };



    return (
        <div className=" bg-secondary-subtle ">
            <div >
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

            <div className='text-center pb-5'>

                {/* After remove the background, img link will be change, */}

                <img src={img && img} alt="" width={500} className='border border-3 border-info img-fluid img-thumbnail m-1 rounded-0' />



            </div>


        </div>
    );
};

export default BackgroundRemover;