import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageToTextPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (selectedFile) {
            const apiKey = ''; // Replace with your actual API key
            const apiUrl = 'https://api.ocr.space/parse/image';

            const formData = new FormData();
            formData.append('apikey', apiKey);
            formData.append('image', selectedFile);

            const options = {
                method: 'POST',
                body: formData,
            };

            try {
                const response = await fetch(apiUrl, options);
                const result = await response.json();

                if (result.OCRExitCode === 1) {
                    console.error('OCR processing error:', result.ErrorMessage || result.ErrorDetails);
                    // Handle error, e.g., show an error message to the user
                } else {
                    console.log('Parsed Text:', result.ParsedResults[0].ParsedText);
                    // Handle success, e.g., update state with the result
                }
            } catch (error) {
                console.error('Fetch error:', error);
                // Handle other errors, e.g., show a general error message
            }
        } else {
            alert('Please select an image file.');
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Image to Text Converter</h1>
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="imageInput">Choose an Image File:</label>
                        <input
                            type="file"
                            className="form-control-file"
                            id="imageInput"
                            onChange={handleFileChange}
                        />
                    </div>
                    <button className="btn btn-primary" disabled onClick={handleUpload}>
                        Upload and Convert
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageToTextPage;
