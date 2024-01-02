/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../ImageTools.css'
import Cropper from 'react-easy-crop';

const ImageResizer = () => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
    }
    return (

        <div className="container-app">
            <h1 className='text-center w-100'>Resize Your Image </h1>
            <div className="crop-container">
                <Cropper
                    image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 3}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                />
            </div>
            <div className="bg-dark mt-0  py-3">
                <div className=' w-50 mx-auto'>

                    <input
                        type="range"
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        aria-labelledby="Zoom"
                        onChange={(e) => {
                            setZoom(e.target.value)
                        }}
                        className="form-range"
                    />
                </div>
            </div>
        </div>

    )
}
export default ImageResizer;