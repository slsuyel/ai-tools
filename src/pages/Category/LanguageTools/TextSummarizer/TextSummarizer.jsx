import React from 'react';

const TextSummarizer = () => {
    return (
        <div className='card'>
            <h2 className='text-center py-3'>Text Summarizer</h2>
            <iframe src="https://www.paraphraser.io/text-summarizer" width={'100%'} height='500px' frameBorder="0"></iframe>

        </div>
    );
};

export default TextSummarizer;