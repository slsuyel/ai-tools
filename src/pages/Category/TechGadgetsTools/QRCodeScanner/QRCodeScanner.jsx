import React, { useState } from 'react';
import QRCodeGenerator from '../../UtilityTools/QRCodeGenerator/QRCodeGenerator';
import Loader from '../../../../components/Loader';

const QRCodeScanner = () => {
    const [qrCodeData, setQRCodeData] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const fetchQRCodeData = async () => {
        if (file) {
            try {
                setLoading(true);

                const formData = new FormData();
                formData.append('file', file);

                const response = await fetch('https://api.qrserver.com/v1/read-qr-code/', {
                    method: 'POST',
                    body: formData,
                });

                const data = await response.json();

                setQRCodeData(data[0].symbol[0].data);
            } catch (error) {
                console.error('Error fetching QR code data', error);
            } finally {
                setLoading(false);
            }
        } else {
            alert('Please select a file before scanning.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-10 bg-gradient p-3 rounded">
                    <div className=" text-white bg-gradient  p-3 rounded">
                        <div className="card-body">
                            <h5 className="card-title fs-2 text-center w-100">QR Code Scanner</h5>

                            <div className="form-group">
                                <label htmlFor="fileInput" className="form-label">Upload QR Code Image:</label>
                                <input
                                    type="file"
                                    id="fileInput"
                                    className="form-control"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button disabled={loading} className="submit-btn" onClick={fetchQRCodeData}>Scan QR Code</button>
                            </div>

                            <div className="mt-3 card">
                                <p className="card-text mt-2 text-center text-primary">QR Code Data:</p>
                                {loading ? (
                                    <Loader />
                                ) : (
                                    <pre>{qrCodeData ? qrCodeData : ''}</pre>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <QRCodeGenerator />
            </div>
        </div>
    );
};

export default QRCodeScanner;
