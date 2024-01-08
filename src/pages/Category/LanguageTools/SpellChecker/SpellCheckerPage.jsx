import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from '../../../../components/Breadcrumb';
import useApiHook from '../../../../hooks/useApiHook';

const SpellCheckerPage = () => {
    const [inputText, setInputText] = useState('');
    const [corrections, setCorrections] = useState([]);
    const [loading, setLoading] = useState(false);
    const { apiKey, } = useApiHook('spellChecker');
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setInputText(inputValue)
    };
    const handleSpellCheck = () => {
        setLoading(true);
        if (inputText.length < 3) { // Fix the condition here
            alert(`Text too short. Min length: ${3} characters.`);
            setLoading(false); // You might also want to stop loading here
            return;
        }

        const apiUrl = `https://api.apilayer.com/spell/spellchecker?q=${encodeURIComponent(inputText)}`;

        fetch(apiUrl, {
            method: 'GET',
            headers: new Headers({
                'apikey': apiKey,
            }),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setCorrections(result.corrections);
            })
            .catch((error) => console.log('error', error))
            .finally(() => setLoading(false));
    };



    return (
        <div className="">

            <Breadcrumb title={'Spell Checker'} description={"Free spell checker"} />

            <h1 className=" text-white">Check Spell</h1>
            <div className='row'>
                <div className="mb-3 col-md-7">
                    <textarea
                        className="form-control"
                        rows="8"
                        placeholder="Enter text to check spelling (up to 4 words)"
                        value={inputText}
                        onChange={handleInputChange}
                    ></textarea>
                </div>

                <div className="mb-3 col-md-5 card p-1"> {corrections.length > 0 && !loading && (
                    <div>
                        <h4>Corrections:</h4>
                        {corrections.map((correction, index) => (
                            <div key={index} className="border p-3 m-3 rounded">
                                <h5>Original Text: <b className="text-primary">{correction?.text}</b></h5>
                                <div>
                                    <h5>Best Candidate: {correction?.best_candidate}
                                    </h5>
                                    <h5>More Candidates:</h5>
                                    <ul className="ms-5">
                                        {correction?.candidates?.map((candidate, idx) => (
                                            <li key={idx} className="mb-2">{candidate}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        ))}
                    </div>
                )}
                </div>
            </div>


            <button className="submit-btn mb-3" onClick={handleSpellCheck}>
                Check Spelling
            </button>
            {loading && (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )}

        </div>
    );
};

export default SpellCheckerPage;
