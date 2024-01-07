import React, { useState } from 'react';

const Setting = () => {
    const [formData, setFormData] = useState({
        chatGptApi: '',
        removeBgApi: '',
        additionalApi1: '',
        additionalApi2: '',
        additionalApi3: '',
        additionalApi4: '',
        date: new Date().toISOString().split('T')[0],
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

    };

    return (
        <div className='content-wrapper'>
            <div className='content-header'>

                <form onSubmit={handleSubmit} className='row'>

                    <div className='col-md-4 mb-3'>
                        <label htmlFor="chatGptApi">ChatGpt API -Last update (02/03/2023) </label>
                        <input
                            type="text"
                            className="form-control"
                            id="chatGptApi"
                            value={formData.chatGptApi}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='col-md-4 mb-3'>
                        <label htmlFor="removeBgApi">Remove BG API -Last update (02/03/2023) </label>
                        <input
                            type="text"
                            className="form-control"
                            id="removeBgApi"
                            value={formData.removeBgApi}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='col-md-4 mb-3'>
                        <label htmlFor="additionalApi1">Additional API 1 -Last update (02/03/2023) </label>
                        <input
                            type="text"
                            className="form-control"
                            id="additionalApi1"
                            value={formData.additionalApi1}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='col-md-4 mb-3'>
                        <label htmlFor="additionalApi2">Additional API 2 -Last update (02/03/2023) </label>
                        <input
                            type="text"
                            className="form-control"
                            id="additionalApi2"
                            value={formData.additionalApi2}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='col-md-4 mb-3'>
                        <label htmlFor="additionalApi3">Additional API 3 -Last update (02/03/2023) </label>
                        <input
                            type="text"
                            className="form-control"
                            id="additionalApi3"
                            value={formData.additionalApi3}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='col-md-4 mb-3'>
                        <label htmlFor="additionalApi4">Additional API 4 -Last update (02/03/2023) </label>
                        <input
                            type="text"
                            className="form-control"
                            id="additionalApi4"
                            value={formData.additionalApi4}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='col-md-12'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Setting;
