import React, { useState } from 'react';
import axios from 'axios';
import Loader from '../../../../components/Loader';

const Dictionary = () => {
    const [word, setWord] = useState('');
    const [loader, setLoader] = useState(false);
    const [definitions, setDefinitions] = useState([]);

    const handleInputChange = (event) => {
        setWord(event.target.value);
    };

    const getDefinitions = async () => {
        setLoader(true)
        try {
            const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            setDefinitions(response.data);
            setLoader(false)
        } catch (error) {
            console.error('Error fetching data:', error);
            setDefinitions([]);
            setLoader(false)
        }
    };




    return (
        <div className="container bg-gradient rounded p-3 text-white">
            <h1>Easy Dictionary</h1>
            <div className="mb-3">
                <input
                    type="search"
                    className="form-control"
                    placeholder="Enter a word"
                    value={word}
                    onChange={handleInputChange}
                />
            </div>
            <button className="btn btn-primary my-3" onClick={getDefinitions}>
                Get Definitions
            </button>

            <div className="card px-3 py-2">
                {loader ? <Loader /> : definitions.map((entry, index) => (
                    <div key={index} className="mt-4">
                        <h3>{entry.word}</h3>
                        <p className="text-muted">{entry.phonetic}</p>

                        {entry.meanings.map((meaning, i) => (
                            <div key={i} className="mb-3">
                                <h5>{meaning.partOfSpeech}</h5>
                                {meaning.definitions.map((definition, j) => (
                                    <div key={j}>
                                        <p>{definition.definition}</p>
                                        {definition.example && (
                                            <p className="text-muted">Example: {definition.example}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dictionary;
