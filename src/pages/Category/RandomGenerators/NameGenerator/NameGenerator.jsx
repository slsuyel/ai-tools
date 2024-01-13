
import React, { useEffect, useState } from 'react';


const NameGenerator = () => {
    const [boysNames, setBoysNames] = useState([]);
    const [girlsNames, setGirlsNames] = useState([]);
    const [filteredNames, setFilteredNames] = useState([]);
    const [gender, setGender] = useState('male');
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        fetch('/bnName.json')
            .then(res => res.json())
            .then(data => {
                setBoysNames(data.boysName);
                setGirlsNames(data.girlsName);
                setFilteredNames(data.boysName);
            })
    }, []);
    console.log(boysNames.length);
    console.log(girlsNames.length);
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleGenderChange = (event) => {
        setGender(event.target.value);
        setFilteredNames(event.target.value === 'male' ? boysNames : girlsNames);
    }

    const handleGenerateName = () => {
        const filtered = gender === 'male' ? boysNames : girlsNames;
        const regex = new RegExp(inputValue, 'i');
        const filteredNames = filtered.filter(name => regex.test(name.name));
        setFilteredNames(filteredNames);
    }

    const getRandomNames = () => {
        const randomNames = [];
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * filteredNames.length);
            randomNames.push(filteredNames[randomIndex]);
        }
        return randomNames;
    }

    return (
        <div className="container mt-4">
            <div className="row bg-gradient p-5 rounded">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className='text-white' htmlFor="nameInput">Enter a name or keyword:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='একটি অক্ষর লিখুন'
                            id="nameInput"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            className="form-check-input"
                            id="maleRadio"
                            value="male"
                            checked={gender === 'male'}
                            onChange={handleGenderChange}
                        />
                        <label className="form-check-label text-white" htmlFor="maleRadio">ছেলে</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            className="form-check-input"
                            id="femaleRadio"
                            value="female"
                            checked={gender === 'female'}
                            onChange={handleGenderChange}
                        />
                        <label className="text-white form-check-label" htmlFor="femaleRadio">মেয়ে</label>
                    </div>
                    <button
                        className="submit-btn my-3"
                        onClick={handleGenerateName}
                    >
                        Generate Names
                    </button>
                </div>
                <div className="col-md-6 card p-2">
                    <h4>Generated Names:</h4>
                    <table className="table">
                        <thead>
                            <tr >
                                <th>#</th>
                                <th>নামঃ</th>
                                <th>অর্থঃ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getRandomNames().map((name, index) => (<tr key={index}>
                                <td >{index + 1}</td>
                                <td >{name?.name}</td>
                                <td>{name?.meaning}</td>
                            </tr>))}

                        </tbody>
                    </table>



                </div>
            </div>

            <div className='card text-center p-4'>
                <h1>Muslim Baby  Name With Bangla Meaning</h1>
                <h6>This website has huge collection of islamic baby boys name which are modern,unique and also with their meanings.Your given name is the first gift form there parents.So you have to consider when naming your child so that the given name should sound nice, short, and Sweet and also the name should have a pleasant meaning also</h6>
            </div>

        </div>
    );
};

export default NameGenerator;
