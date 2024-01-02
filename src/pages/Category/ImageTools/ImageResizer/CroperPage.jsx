import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from './cropImage';
import { Modal } from 'react-bootstrap';
import { ModalFooter } from 'reactstrap';

import '../ImageTools.css'

const CroperPage = () => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [upImg, setUpImg] = useState(null);

    const handleChange = (event) => {
        const { type } = event.target;
        const newValue = type === 'file' ? event.target.files[0] : event.target.value;

        setUpImg(newValue);
    };

    const dogImg = upImg
        ? URL.createObjectURL(upImg)
        : '';



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
        <div className='bg-white'>
            <h1 className='mt-4 text-center w-100'>Resize Your Image </h1>
            <h3 className='mb-5 text-center w-100'>Easily resize images online for free.</h3>
            <div className='col-md-10 mx-auto mt-3'>





                <div className={`${upImg ? 'd-none' : ''}`}>
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
                </div>




                <Cropper
                    image={dogImg}
                    crop={crop}
                    rotation={rotation}
                    zoom={zoom}
                    aspect={4 / 3}
                    onCropChange={setCrop}
                    onRotationChange={setRotation}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                />

                <div className='row w-100 text-blue my-3'>

                    <div className='col-md-6'><div className='align-items-center bg-secondary-subtle d-flex gap-3 p-2 rounded'>

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
                    <div className='col-md-6'>  <div className='align-items-center bg-secondary-subtle d-flex gap-3 p-2 rounded'>
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
                    </div></div>

                    <div>
                        <button className='submit-btn mx-auto mb-4 mt-2' onClick={showCroppedImage}>Show Result</button></div>
                </div>


                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Cropped Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {croppedImage && <img src={croppedImage} className='img-fluid' alt="Cropped" />}
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
