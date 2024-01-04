import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from './cropImage';
import { Modal } from 'react-bootstrap';
import { ModalFooter } from 'reactstrap';

import '../ImageTools.css'
import Breadcrumb from '../../../../components/Breadcrumb';

const CroperPage = () => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [aspectRatio, setAspectRatio] = useState(4 / 3);
    const [upImg, setUpImg] = useState(null);

    const handleChange = (event) => {
        const { type } = event.target;
        const newValue = type === 'file' ? event.target.files[0] : event.target.value;

        setUpImg(newValue);
    };

    const dogImg = upImg
        ? URL.createObjectURL(upImg)
        : '';

    const aspectRatioOptions = [
        { value: 4 / 3, label: '4/3' },
        { value: 16 / 9, label: '16 / 9' },
        { value: 1 / 1, label: 'Square' },
        { value: 3 / 2, label: '3:2' },
        { value: 5 / 4, label: '5/4' },
        { value: 2 / 1, label: '2:1' },

    ];


    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };

    const showCroppedImage = async () => {
        try {
            const croppedImage = await getCroppedImg(
                dogImg,
                croppedAreaPixels,
                rotation
            );
            console.log('donee', { croppedImage });
            setCroppedImage(croppedImage);
            setShowModal(true);
        } catch (e) {
            console.error(e);
        }
    };

    const handleClose = () => {
        setShowModal(false);
    };
    const handleButtonClick = () => {
        // Trigger the file input click
        document.getElementById('formFileLg').click();
    };



    return (
        <div className='bg-gradient'>

            <div className='py-3'>
                <Breadcrumb title={'Resize Image'} description={'Easily resize images online for free'} />
            </div>



            <div className='col-md-10 mx-auto mt-3'>





                <div className={`${upImg ? 'd-none' : ''}`}>
                    <div className="">
                        <div className="drop_box mx-auto w-75">

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
                </div>




                <Cropper
                    image={dogImg}
                    crop={crop}
                    rotation={rotation}
                    zoom={zoom}
                    aspect={aspectRatio}
                    onCropChange={setCrop}
                    onRotationChange={setRotation}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                // cropShape="round"

                />


                <div className='row w-100 mx-auto'>
                    <div className='col-md-2'>
                        <label className='text-blue' htmlFor="">Select Aspect Ratio</label>
                        <select className='form-select' value={aspectRatio} onChange={(e) => setAspectRatio(parseFloat(e.target.value))}>
                            {aspectRatioOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>



                <div className='row mx-auto w-100 text-blue my-3'>
                    <div className='col-md-6 my-1'><div className='align-items-center bg-secondary-subtle d-flex gap-3 p-2 rounded'>

                        <h6 className=' mb-0'>Zoom </h6>
                        <input
                            value={zoom}
                            min={1}
                            max={3}
                            step={0.09}
                            aria-level={'Zoom'}
                            onChange={(e) => setZoom(e.target.value)}
                            type="range"
                            className="form-range"
                            id="zoom"
                        />
                    </div></div>
                    <div className='col-md-6 my-1'>
                        <div className='align-items-center bg-secondary-subtle d-flex gap-3 p-2 rounded'>
                            <h6 className=' mb-0'>Rotate </h6>
                            <input
                                value={rotation}
                                min={0}
                                max={360}
                                step={1}
                                aria-labelledby="Rotation"
                                onChange={(e) => setRotation(e.target.value)}
                                type="range"
                                className="form-range"
                                id="rotation"
                            />
                        </div>
                    </div>

                    <div>
                        <button className='submit-btn mx-auto mb-4 mt-2' onClick={showCroppedImage}>Show Result</button></div>
                </div>


                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Cropped Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {croppedImage && <img src={croppedImage} className=' img-fluid' alt="Cropped" />}
                    </Modal.Body>
                    <ModalFooter>
                        <a className='align-items-center gap-1 submit-btn ' href={croppedImage && croppedImage} download ><i className="fa-solid fa-download"></i> Download Image</a>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
};

export default CroperPage;
