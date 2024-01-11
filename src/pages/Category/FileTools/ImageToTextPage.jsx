import React, { useState } from 'react';
import useApiHook from './../../../hooks/useApiHook';
import axios from 'axios';
import { Input, Button, Spinner } from 'reactstrap'; // Assuming you have Spinner component from reactstrap

const ImageToTextPage = () => {
    const { apiKey } = useApiHook('imagebbApi');
    const [selectedImage, setSelectedImage] = useState(null);
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false); // New loader state

    let imgUrl = '';
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (selectedImage) {
            const formData = new FormData();
            formData.append('image', selectedImage);

            try {
                setLoading(true); // Set loader state to true when submitting

                const imgbbResponse = await axios.post('https://api.imgbb.com/1/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    params: {
                        key: apiKey,
                    },
                });

                if (imgbbResponse.data.status === 200) {
                    console.log(imgbbResponse.data.data.url);
                    imgUrl = imgbbResponse.data.data.url;

                    if (imgUrl) {
                        await sendApiRequest(imgUrl);
                    }
                } else {
                    console.error('Error uploading image to ImgBB:', imgbbResponse.data.error.message);
                }
            } catch (error) {
                console.error('Error uploading image to ImgBB:', error);
            } finally {
                setLoading(false); // Set loader state back to false after submission
            }
        }
    };

    const sendApiRequest = async (imgUrl) => {
        const myHeaders = new Headers();
        myHeaders.append("apikey", "LKJO8OBFZMThX2r23EUz1OlvI0ypK7F0");

        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };
        const apiUrl = `https://api.apilayer.com/image_to_text/url?url=${imgUrl}`

        try {
            const response = await fetch(apiUrl, requestOptions);
            const result = await response.json();
            console.log(result);
            setText(result.all_text);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input className='border-success-subtle' accept="image/*" name="banner" id="banner" type='file' onChange={(e) => setSelectedImage(e.target.files[0])} required />


                <Button color="primary" className='my-2' type="submit">
                    {loading ? (
                        <Spinner size="sm" color="light" />
                    ) : (
                        'Submit'
                    )}
                </Button>
            </form>

            <div className='card p-5'>
                <div className={loading ? 'text-muted' : ''}>
                    text: {loading ? 'Loading...' : text}
                </div>
            </div>
        </div>
    );
};

export default ImageToTextPage;
