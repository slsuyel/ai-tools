import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from '../../../../../components/Loader';

const Quotes = () => {
    const [quote, setQuote] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchNewQuote = () => {
        setLoading(true);
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                setQuote(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchNewQuote();
    }, []);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="text-center">Quotes</h1>
                        </div>
                        <div className="card-body">
                            {loading ? (
                                // Show loading indicator while fetching a new quote
                                <div className="w-100">
                                    <Loader />
                                </div>
                            ) : (
                                // Display the quote once it's loaded
                                <>
                                    <blockquote className="blockquote">
                                        <p className="mb-0">{quote.content}</p>
                                        <footer className="blockquote-footer mt-2">
                                            {quote.author && <cite title={quote.author}>{quote.author}</cite>}
                                        </footer>
                                    </blockquote>
                                    <div className="d-flex justify-content-end me-4 mt-3">
                                        <button className="submit-btn" onClick={fetchNewQuote}>
                                            Get New Quote
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quotes;
