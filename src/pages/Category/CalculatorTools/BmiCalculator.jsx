import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from '../../../components/Breadcrumb';

const BmiCalculator = () => {
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState('');
    const [bmiResult, setBmiResult] = useState(null);
    const [bmiCategory, setBmiCategory] = useState('');

    const calculateBMI = () => {
        const heightInMeters = (parseFloat(heightFeet) * 0.3048) + (parseFloat(heightInches) * 0.0254);
        const weightInKg = parseFloat(weight);
        const bmi = weightInKg / (heightInMeters * heightInMeters);
        setBmiResult(bmi.toFixed(2));

        // Categorize BMI based on gender
        if (gender === 'male') {
            setBmiCategory(getBMICategoryForMale(bmi));
        } else {
            setBmiCategory(getBMICategoryForFemale(bmi));
        }
    };

    const getBMICategoryForMale = (bmi) => {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            return 'Overweight';
        } else {
            return 'Obesity';
        }
    };

    const getBMICategoryForFemale = (bmi) => {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            return 'Overweight';
        } else {
            return 'Obesity';
        }
    };

    return (
        <div className='w-100'>

            <Breadcrumb title={'BMI-calculator'} description={'Best online BMI calculator'} />
            <div className="container bg-gradient p-2 rounded">
                <h1 className="text-center text-white mb-4">BMI Calculator</h1>

                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="heightFeet" className="form-label text-white">Height (Feet)</label>
                            <input required type="number" className="form-control" id="heightFeet" value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="heightInches" className="form-label text-white">Height (Inches)</label>
                            <input required type="number" className="form-control" id="heightInches" value={heightInches} onChange={(e) => setHeightInches(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="weight" className="form-label text-white">Weight (kg)</label>
                            <input required type="number" className="form-control" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label text-white">Gender</label>
                            <select className="form-control" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label text-white">Age</label>
                            <input required type="number" className="form-control" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <button className="submit-btn mx-auto" onClick={calculateBMI}>Calculate BMI</button>
                    </div>
                </div>

                {bmiResult && (
                    <div className="row justify-content-center mt-4">
                        <div className="col-md-4">
                            <h2 className="text-center text-white">BMI Result: {bmiResult}</h2>
                            <p className="text-center text-white">BMI Category: {bmiCategory}</p>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default BmiCalculator;
