import React from 'react'

import imageCompression from 'browser-image-compression'
import Breadcrumb from '../../../../components/Breadcrumb'

export default class ImageCompression extends React.Component {
    constructor(...args) {
        super(...args)
        this.compressImage = this.compressImage.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1024,
            webWorker: {
                progress: null,
                inputSize: null,
                outputSize: null,
                inputUrl: null,
                outputUrl: null
            },
            mainThread: {
                progress: null,
                inputSize: null,
                outputSize: null,
                inputUrl: null,
                outputUrl: null
            }
        }
    }

    handleChange(target) {
        return (e) => {
            this.setState({ [target]: e.currentTarget.value })
        }
    }

    onProgress(p, useWebWorker) {
        const targetName = useWebWorker ? 'webWorker' : 'mainThread'
        this.setState(prevState => ({
            ...prevState,
            [targetName]: {
                ...prevState[targetName],
                progress: p
            }
        }))
    }

    async compressImage(event, useWebWorker) {
        const file = event.target.files[0]
        console.log('input', file)
        console.log(
            'ExifOrientation',
            await imageCompression.getExifOrientation(file)
        )
        const targetName = useWebWorker ? 'webWorker' : 'mainThread'
        this.setState(prevState => ({
            ...prevState,
            [targetName]: {
                ...prevState[targetName],
                inputSize: (file.size / 1024 / 1024).toFixed(2),
                inputUrl: URL.createObjectURL(file)
            }
        }))
        var options = {
            maxSizeMB: this.state.maxSizeMB,
            maxWidthOrHeight: this.state.maxWidthOrHeight,
            useWebWorker,
            onProgress: p => this.onProgress(p, useWebWorker)
        }
        const output = await imageCompression(file, options)
        console.log('output', output)
        this.setState(prevState => ({
            ...prevState,
            [targetName]: {
                ...prevState[targetName],
                outputSize: (output.size / 1024 / 1024).toFixed(2),
                outputUrl: URL.createObjectURL(output)
            }
        }))
    }

    render() {
        const { webWorker, mainThread, maxSizeMB, maxWidthOrHeight } = this.state
        return (

            <div className='bg-gradient'>
                <div className='py-3'>
                    <Breadcrumb title={'Image Compressor'} description={'Easily Image Compressor online free.'} />
                </div>


                <div className='col-md-10 mx-auto'>
                    <div>
                        <h1 className='text-white'>  Options:</h1>

                        <div className='d-flex gap-2'>
                            {/* Input for maxSizeMB */}
                            <label className='text-white pt-4 ' htmlFor="maxSizeMB">maxSizeMB:
                                <input className='form-control' type="number" id="maxSizeMB" name="maxSizeMB"
                                    value={maxSizeMB}
                                    onChange={this.handleChange('maxSizeMB')} />
                            </label>

                            {/* Input for maxWidthOrHeight */}
                            <label className='text-white pt-4 ' htmlFor="maxWidthOrHeight">maxWidthOrHeight:
                                <input className='form-control' type="number" id="maxWidthOrHeight"
                                    name="maxWidthOrHeight"
                                    value={maxWidthOrHeight}
                                    onChange={this.handleChange('maxWidthOrHeight')} />
                            </label>
                        </div>

                        {/* Input for web worker compression */}

                    </div>
                    <div className='d-flex gap-2'>
                        <div>
                            <label className='text-white pt-4 ' htmlFor="web-worker">
                                Compress in web-worker{' '}
                                <br />
                                {webWorker.progress && <span>{webWorker.progress} %</span>}
                                <input
                                    className='form-control'
                                    id="web-worker"
                                    type="file"
                                    accept="image/*"
                                    onChange={e => this.compressImage(e, true)}
                                />
                            </label>
                            <p className='text-white pt-4 '>
                                {webWorker.inputSize && (
                                    <span>Source image size: {webWorker.inputSize} mb</span>
                                )}
                                {webWorker.outputSize && (
                                    <span>, Output image size: {webWorker.outputSize}</span>
                                )}
                            </p>
                        </div>

                        <div>
                            <label className='text-white pt-4 ' htmlFor="main-thread">
                                Compress in main-thread{' '}   <br />
                                {mainThread.progress && <span>{mainThread.progress} %</span>}
                                <input
                                    className='form-control'
                                    id="main-thread"
                                    type="file"
                                    accept="image/*"
                                    onChange={e => this.compressImage(e, false)}
                                />
                            </label>
                            <p className='text-center'>
                                {mainThread.inputSize && (
                                    <span>Source image size: {mainThread.inputSize} mb</span>
                                )}
                                {mainThread.outputSize && (
                                    <span>, Output image size: {mainThread.outputSize}</span>
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Display input and output image previews */}
                {(mainThread.inputUrl || webWorker.inputUrl) && (

                    <div>
                        <div className=' flex justify-center submit-btn mb-3'>
                            <a
                                className='text-decoration-none'
                                href={mainThread.outputUrl || webWorker.outputUrl}
                                download={'tool-master-ai.png'}
                            >
                                {/*  <img className='img-fluid img-thumbnail' src={mainThread.outputUrl || webWorker.outputUrl} alt="output" /> */}
                                <i className="fa-solid fa-download text-danger"></i>   Download

                            </a>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td className='text-white'>input preview</td>
                                    <td className='text-white'>output preview</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='d-flex justify-content-between gap-1'>
                                    <td><img className='img-fluid img-thumbnail' src={mainThread.inputUrl || webWorker.inputUrl} alt="input" /></td>
                                    <td>
                                        <img className='img-fluid img-thumbnail' src={mainThread.outputUrl || webWorker.outputUrl} alt="output" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                )}
            </div>


        )
    }
}
