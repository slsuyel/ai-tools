import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const QRCodeScanner = () => {
    const [qrCodeData, setQRCodeData] = useState('');
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const fetchQRCodeData = async () => {
        if (file) {
            try {
                const formData = new FormData();
                formData.append('file', file);

                const response = await fetch('http://api.qrserver.com/v1/read-qr-code/', {
                    method: 'POST',
                    body: formData,
                });

                const data = await response.json();
                setQRCodeData(data[0].symbol[0].data);
            } catch (error) {
                console.error('Error fetching QR code data', error);
            }
        } else {
            alert('Please select a file before scanning.');
        }
    };

    const generateBlobUrl = () => {
        if (qrCodeData) {
            const blob = new Blob([qrCodeData], { type: 'text/plain' });
            return URL.createObjectURL(blob);
        }
        return '';
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card text-white bg-dark">
                        <div className="card-body">
                            <h5 className="card-title">QR Code Scanner</h5>
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
                            <button className="btn btn-primary" onClick={fetchQRCodeData}>Scan QR Code</button>
                            {qrCodeData && (
                                <div className="mt-3 card">
                                    <p className="card-text">QR Code Data:</p>
                                    <pre>{qrCodeData}</pre>
                                    <a href={generateBlobUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-2">Download as Blob</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>




            </div>
        </div >
    );
};

export default QRCodeScanner;
