/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import './Utilites.css'

const Whatsapp = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/countries.json'
                );
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };
        fetchData();
    }, []);

    const generateWhatsappLink = () => {
        if (!selectedCountry || !phoneNumber) {
            alert('Please select a country and enter a phone number.');
            return;
        }

        const formattedPhoneNumber = selectedCountry.dial_code + phoneNumber;
        const whatsappLink = `https://wa.me/${formattedPhoneNumber}`;

        return whatsappLink;
    };

    return (
        <div className="bg-gradient  container mt-5 p-3 py-5 rounded shadow text-center text-white">
            <h2 className="">Open WhatsApp Chats</h2>
            <p className="lead">Open WhatsApp chats fast and easy without saving contacts🌎</p>

            <div className="input-group mb-3 col-md-9">

                <select
                    id="countrySelect"
                    className="form-select "
                    onChange={(e) => setSelectedCountry(JSON.parse(e.target.value))}
                >
                    <option value="" disabled selected>Select Country</option>
                    {countries.map((country, index) => (
                        <option key={index} value={JSON.stringify(country)}>
                            {country.name} {country.dial_code}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    className="form-control "
                    placeholder="Enter phone number"
                    aria-label="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>

            <button
                type="button"
                className="btn btn-success"
                onClick={() => window.open(generateWhatsappLink(), '_blank')}
                disabled={!phoneNumber || !selectedCountry}
            >
                <i className="fa fa-whatsapp me-2" aria-hidden="true"></i>
                Open WhatsApp
            </button>

            <div className='card text-start p-5 mt-5'>
                Title: A Step-by-Step Guide on Creating Your WhatsApp Link
                <br />
                Introduction:
                <br />
                WhatsApp has become an essential communication tool for individuals and businesses alike. One convenient feature it offers is the ability to create a personalized WhatsApp link, making it easier for people to connect with you. In this guide, we'll walk you through the simple steps to create your own WhatsApp link.
                <br />
                Step 1: Ensure You Have WhatsApp Installed
                <br />
                Before you create your WhatsApp link, ensure that you have the WhatsApp application installed on your mobile device. You can download it from the App Store (for iOS) or Google Play Store (for Android).
                <br />
                Step 2: Open WhatsApp and Find Your Number
                <br />
                Open the WhatsApp application and navigate to the chat section. Find your own contact in the chat list.
                <br />
                Step 3: Copy Your Phone Number
                <br />
                Tap on your own contact to view your profile details. Here, you'll find your phone number. Copy the full phone number, including the country code.
                <br />
                Step 4: Generate Your WhatsApp Link
                <br />
                Now, it's time to create your WhatsApp link. Open your web browser and go to a WhatsApp link generator website. There are several online tools available for this purpose.
                <br />
                Step 5: Enter Your Phone Number
                <br />
                On the WhatsApp link generator website, you'll find a field to enter your phone number. Paste your copied phone number into this field.
                <br />
                Step 6: Select Your Country Code
                <br />
                Most WhatsApp link generators will automatically detect your country code based on the entered phone number. However, double-check to ensure it is correct. If not, select the correct country code from the provided options.
                <br />
                Step 7: Generate the Link
            </div>

        </div>
    );
};

export default Whatsapp;
