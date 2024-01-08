import React, { useState } from 'react';

const Setting = () => {
    const [selectedApi, setSelectedApi] = useState('');
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [selectedApi]: e.target.value });
    };

    const handleApiChange = (e) => {
        setSelectedApi(e.target.value);
    };

    const handleSave = () => {
        if (selectedApi && formData[selectedApi]) {

            const apiUrl = 'http://localhost:3000/saveData';
            const requestData = { selectedApi, value: formData[selectedApi] };
            console.log(requestData);
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));
        }
    };


    return (
        <div className='content-wrapper'>
            <div className='content-header'>
                <div className='row'>
                    <div className='col-md-4 mb-3'>
                        <label htmlFor="apiSelector">Select API</label>
                        <select
                            className="form-control"
                            id="apiSelector"
                            onChange={handleApiChange}
                            value={selectedApi}
                        >
                            <option value="">Select an API</option>
                            <option value="chatGptApi">ChatGPT API</option>
                            <option value="removeBgApi">Remove BG API</option>
                            <option value="imagebbApi">ImageBB API</option>
                            <option value="spellChecker">Spell Checker API</option>
                            <option value="urlShortener">URL Shortener API</option>
                        </select>
                    </div>

                    {selectedApi && (
                        <div className='col-md-4 mb-3'>
                            <label htmlFor={selectedApi}>{`${selectedApi} Value`}</label>
                            <input
                                type="text"
                                className="form-control"
                                id={selectedApi}
                                value={formData[selectedApi] || ''}
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    <div className='col-md-12'>
                        <button type="button" className="btn btn-primary" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;
