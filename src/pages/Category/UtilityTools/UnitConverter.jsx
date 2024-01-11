import React, { useState } from 'react';

const UnitConverter = () => {
    const [unitType, setUnitType] = useState('length');
    const [unit, setUnit] = useState('meter');
    const [value, setValue] = useState('');
    const [convertedValue, setConvertedValue] = useState('');

    const handleUnitTypeChange = (e) => {
        setUnitType(e.target.value);
        setUnit('');
        setValue('');
        setConvertedValue('');
    };

    const handleUnitChange = (e) => {
        setUnit(e.target.value);
        setValue('');
        setConvertedValue('');
    };

    const handleValueChange = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);

        // Conversion logic based on the selected unit type
        switch (unitType) {
            case 'length':
                convertLength(inputValue, unit);
                break;
            case 'mass':
                convertMass(inputValue, unit);
                break;
            case 'time':
                convertTime(inputValue, unit);
                break;
            case 'temperature':
                convertTemperature(inputValue, unit);
                break;
            case 'volume':
                convertVolume(inputValue, unit);
                break;
            case 'area':
                convertArea(inputValue, unit);
                break;
            default:
                break;
        }
    };

    const convertLength = (inputValue, selectedUnit) => {
        // Conversion logic for length
        // You can add more units and conversion formulas as needed
        // For example, 1 meter = 100 centimeters
        let convertedResult;
        switch (selectedUnit) {
            case 'meter':
                convertedResult = inputValue + ' meters';
                break;
            case 'kilometer':
                convertedResult = (parseFloat(inputValue) * 1000) + ' meters';
                break;
            case 'centimeter':
                convertedResult = (parseFloat(inputValue) / 100) + ' meters';
                break;
            // Add more cases as needed
            default:
                convertedResult = '';
        }
        setConvertedValue(convertedResult);
    };

    const convertMass = (inputValue, selectedUnit) => {
        // Conversion logic for mass
        // You can add more units and conversion formulas as needed
        let convertedResult;
        switch (selectedUnit) {
            case 'gram':
                convertedResult = inputValue + ' grams';
                break;
            case 'kilogram':
                convertedResult = inputValue + ' kilograms';
                break;
            // Add more cases as needed
            default:
                convertedResult = '';
        }
        setConvertedValue(convertedResult);
    };

    const convertTime = (inputValue, selectedUnit) => {
        // Conversion logic for time
        // You can add more units and conversion formulas as needed
        let convertedResult;
        switch (selectedUnit) {
            case 'second':
                convertedResult = inputValue + ' seconds';
                break;
            case 'minute':
                convertedResult = (parseFloat(inputValue) * 60) + ' seconds';
                break;
            // Add more cases as needed
            default:
                convertedResult = '';
        }
        setConvertedValue(convertedResult);
    };

    const convertTemperature = (inputValue, selectedUnit) => {
        // Conversion logic for temperature
        // You can add more units and conversion formulas as needed
        let convertedResult;
        switch (selectedUnit) {
            case 'celsius':
                convertedResult = inputValue + ' °C';
                break;
            case 'fahrenheit':
                convertedResult = inputValue + ' °F';
                break;
            // Add more cases as needed
            default:
                convertedResult = '';
        }
        setConvertedValue(convertedResult);
    };

    const convertVolume = (inputValue, selectedUnit) => {
        // Conversion logic for volume
        // You can add more units and conversion formulas as needed
        let convertedResult;
        switch (selectedUnit) {
            case 'liter':
                convertedResult = inputValue + ' liters';
                break;
            case 'cubicMeter':
                convertedResult = inputValue + ' cubic meters';
                break;
            // Add more cases as needed
            default:
                convertedResult = '';
        }
        setConvertedValue(convertedResult);
    };

    const convertArea = (inputValue, selectedUnit) => {
        // Conversion logic for area
        // You can add more units and conversion formulas as needed
        let convertedResult;
        switch (selectedUnit) {
            case 'squareMeter':
                convertedResult = inputValue + ' square meters';
                break;
            // Add more cases as needed
            default:
                convertedResult = '';
        }
        setConvertedValue(convertedResult);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Unit Converter</h2>

            <div className="form-group">
                <label>Select Type of Measurement:</label>
                <select
                    className="form-control"
                    value={unitType}
                    onChange={handleUnitTypeChange}
                >
                    <option value="length">Length</option>
                    <option value="mass">Mass</option>
                    <option value="time">Time</option>
                    <option value="temperature">Temperature</option>
                    <option value="volume">Volume</option>
                    <option value="area">Area</option>
                </select>
            </div>

            <div className="form-group">
                <label>Select Unit:</label>
                <select
                    className="form-control"
                    value={unit}
                    onChange={handleUnitChange}
                >
                    {unitType === 'length' && (
                        <>
                            <option value="meter">Meter</option>
                            <option value="kilometer">Kilometer</option>
                            <option value="centimeter">Centimeter</option>
                        </>
                    )}
                    {unitType === 'mass' && (
                        <>
                            <option value="gram">Gram</option>
                            <option value="kilogram">Kilogram</option>
                        </>
                    )}
                    {unitType === 'time' && (
                        <>
                            <option value="second">Second</option>
                            <option value="minute">Minute</option>
                        </>
                    )}
                    {unitType === 'temperature' && (
                        <>
                            <option value="celsius">Celsius</option>
                            <option value="fahrenheit">Fahrenheit</option>
                        </>
                    )}
                    {unitType === 'volume' && (
                        <>
                            <option value="liter">Liter</option>
                            <option value="cubicMeter">Cubic Meter</option>
                        </>
                    )}
                    {unitType === 'area' && (
                        <>
                            <option value="squareMeter">Square Meter</option>
                        </>
                    )}
                </select>
            </div>

            <div className="form-group">
                <label>Value:</label>
                <input
                    type="number"
                    className="form-control"
                    value={value}
                    onChange={handleValueChange}
                />
            </div>

            <div className="form-group">
                <label>Converted Value:</label>
                <input
                    type="text"
                    className="form-control"
                    value={convertedValue}
                    readOnly
                />
            </div>
        </div>
    );
};

export default UnitConverter;
