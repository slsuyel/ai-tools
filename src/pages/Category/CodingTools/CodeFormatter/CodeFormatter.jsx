import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CodeFormatter = () => {
    const [code, setCode] = useState('');
    const [formattedCode, setFormattedCode] = useState('');
    const [copied, setCopied] = useState(false);

    const handleInputChange = (event) => {
        setCode(event.target.value);
    };

    const handleCopyClick = () => {
        const textarea = document.createElement('textarea');
        textarea.value = formattedCode;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        setCopied(true);

        // Reset the "Copied" message after a short delay
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    const formatCode = () => {
        const indentedCode = code
            .replace(/\/>/g, '/>\n') // Add line break after />
            .replace(/<\/[^>]*>/g, (match) => `${match}\n`) // Add line break after </tag>
            .replace(/<[^\/>][^>]*>/g, (match) => `${match}\n`) // Add line break after opening tags
            .split('\n')
            .map((line) => `    ${line}`)
            .join('\n');
        setFormattedCode(indentedCode);
    };

    return (
        <div className="container mt-5">
            <h2 className='text-center text-white'>Best HTML Viewer, HTML Beautifier, HTML Formatter</h2>
            <div className="row">
                <div className="col-md-6 bg-warning-subtle">
                    <div className="form-group">
                        <label className='mb-4 align-items-center d-flex fs-5 justify-content-center mt-2' htmlFor="codeInput">
                            Enter your code here:
                        </label>
                        <textarea
                            style={{ height: '100vh' }}
                            id="codeInput"
                            className="form-control card pt-3 px-4"
                            placeholder="Enter your code here..."
                            value={code}
                            onChange={handleInputChange}
                        ></textarea>

                        <button className=" format-code" onClick={formatCode}>
                            Format
                        </button>

                    </div>
                </div>

                <div className="col-md-6 bg-warning-subtle">
                    <div className="form-group position-relative">
                        <label className='align-items-center d-flex fs-5 justify-content-center mt-2' htmlFor="formattedCode">
                            Formatted Code:
                        </label>
                        <pre>
                            <code
                                style={{ height: '100vh' }}
                                className='card mx-auto overflow-scroll pt-5 px-4'
                            >
                                {formattedCode}
                            </code>
                        </pre>
                        <button className='copy-btn' onClick={handleCopyClick} disabled={copied}>
                            <i className="fas fa-copy" aria-hidden="true" /> {copied ? 'Copied' : 'Copy'}
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CodeFormatter;
