import React, { useState } from 'react';
import '../RandomGenerate.css';

const RrandomPasswordGenerator = () => {
    const [password, setPassword] = useState('WetdiS9m4i56');
    const [quality, setQuality] = useState('Strong');
    const [passwordLength, setPasswordLength] = useState(12);
    const [characterSets, setCharacterSets] = useState({
        uppercase: true,
        lowercase: true,
        numbers: true,
        specialCharacters: true,
    });
    const passQuality = ["Very Weak", "Weak", "Good", "Strong", "Very Strong"];

    const getSelectedCharSet = () => {
        let charset = '';

        if (characterSets.uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (characterSets.lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (characterSets.numbers) charset += '0123456789';
        if (characterSets.specialCharacters) charset += '!@#$%^&*()-=_+[]{}|;:,.<>?/';

        return charset;
    };

    const generatePassword = () => {
        const charset = getSelectedCharSet();
        let newPassword = '';

        for (let i = 0; i < passwordLength; i++) {
            const randomChar = charset[Math.floor(Math.random() * charset.length)];
            newPassword += randomChar;
        }

        setPassword(newPassword);
        updateQuality(newPassword);
    };

    const updateQuality = (newPassword) => {
        const lengthQuality = newPassword.length >= 12 ? 4 : newPassword.length >= 8 ? 3 : 2;
        setQuality(passQuality[lengthQuality]);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert('Password Copied');
    };

    const handlePasswordLengthChange = (event) => {
        const length = parseInt(event.target.value, 10);
        setPasswordLength(length);
        generatePassword();
    };

    const handleCharacterSetChange = (set, isChecked) => {
        setCharacterSets((prevCharacterSets) => ({
            ...prevCharacterSets,
            [set]: isChecked,
        }));
        generatePassword();
    };

    return (
        <div className='fs-5 '>
            <h1 className='text-center text-white'>Rrandom Password Generator</h1>
            <div className='row w-100 my-1 mx-auto'>
                <div className='col-md-8 my-1 '>
                    <div className='position-relative typing-container'>
                        <input className='form-control typing' value={password} type="text" disabled />




                        <div className='label-reload'>
                            <label className='mb-0' htmlFor="">{quality}</label>
                            <i className="fa-rotate-right fa-solid fs-3 me-2" onClick={generatePassword}></i>
                        </div>
                    </div>
                </div>
                <div className='my-1 align-items-center col-md-4 d-flex justify-content-center'>
                    <button className='submit-btn' onClick={copyToClipboard}><i className="me-2 fa-solid fa-copy"></i>Copy</button>
                </div>
            </div>

            <div className='row w-100 my-1 mx-auto fs-5 '>
                <div className='col-md-3 text-center'>
                    <label htmlFor="customRange1" className="form-label m-0 my-1 text-white">
                        Password length: {passwordLength}
                    </label>
                </div>
                <div className='col-md-9'>
                    <input
                        type="range"
                        className="form-range  my-1"
                        id="customRange1"
                        value={passwordLength + 1}
                        min="4"
                        max="50"
                        onChange={handlePasswordLengthChange}
                    />
                </div>
            </div>

            <div className='row w-100 my-1 mx-auto fs-5 '>
                <div className='col-md-3 text-center'>
                    <label htmlFor="customRange1" className="form-label m-0 my-1 text-white">
                        Characters used:
                    </label>
                </div>
                <div className="col-md-9 d-flex flex-wrap fs-5 justify-content-evenly text-white">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="uppercaseCheckbox"
                            checked={characterSets.uppercase}
                            onChange={() => handleCharacterSetChange('uppercase', !characterSets.uppercase)}
                        />
                        <label className="form-check-label" htmlFor="uppercaseCheckbox">
                            ABC
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="lowercaseCheckbox"
                            checked={characterSets.lowercase}
                            onChange={() => handleCharacterSetChange('lowercase', !characterSets.lowercase)}
                        />
                        <label className="form-check-label" htmlFor="lowercaseCheckbox">
                            abc
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="numbersCheckbox"
                            checked={characterSets.numbers}
                            onChange={() => handleCharacterSetChange('numbers', !characterSets.numbers)}
                        />
                        <label className="form-check-label" htmlFor="numbersCheckbox">
                            123
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="specialCharactersCheckbox"
                            checked={characterSets.specialCharacters}
                            onChange={() => handleCharacterSetChange('specialCharacters', !characterSets.specialCharacters)}
                        />
                        <label className="form-check-label" htmlFor="specialCharactersCheckbox">
                            #$&amp;
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RrandomPasswordGenerator;
