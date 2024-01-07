import React, { useState } from 'react';
import { baseUrl } from '../../baseurl/baseUrl';
import Swal from 'sweetalert2';

const Setting = () => {

    const [formData, setFormData] = useState({
        chatGptApi: '',
        removeBgApi: '',
        imagebbApi: '',
        spellChecker: '',
        urlShortener: '',
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

        fetch(`${baseUrl}/api`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Success!',
                        'News Added successfully!',
                        'success'
                    );
                } else {
                    Swal.fire(
                        'Success!',
                        'Success',
                        'error'
                    );
                }
            })

    };

    return (
        <div className='content-wrapper'>
            <div className='content-header'>
                <form onSubmit={handleSubmit} className='row'>
                    <div className='col-md-4 mb-3'>
                        <label htmlFor="chatGptApi">ChatGPT API </label>
                        <input
                            type="text"
                            className="form-control"
                            id="chatGptApi"

                            value={formData.chatGptApi}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='col-md-4 mb-3'>
                        <label htmlFor="removeBgApi">Remove BG API </label>
                        <input

                            type="text"
                            className="form-control"
                            id="removeBgApi"
                            value={formData.removeBgApi}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='col-md-4 mb-3'>
                        <label htmlFor="imagebbApi">ImageBB API </label>
                        <input
                            type="text"
                            className="form-control"
                            id="imagebbApi"
                            value={formData.imagebbApi}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='col-md-4 mb-3'>
                        <label htmlFor="spellChecker">Spell Checker API </label>
                        <input
                            type="text"
                            className="form-control"
                            id="spellChecker"
                            value={formData.spellChecker}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='col-md-4 mb-3'>
                        <label htmlFor="urlShortener">url Shortener API </label>
                        <input
                            type="text"
                            className="form-control"
                            id="urlShortener"
                            value={formData.urlShortener}
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
