/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import axios from 'axios';
import CopyToClipboard from 'react-copy-to-clipboard';

const UrlShortener = () => {
    const [longURL, setLongUrl] = useState("");
    const [shortLink, setShortLink] = useState('');
    const [active, setActive] = useState(false);
    const [copied, setCopied] = useState(true);
    const [QR, setQR] = useState('');

    function handleChange(e) {
        setLongUrl(e.target.value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://ass-server-ten.vercel.app/shorten', { url: longURL });
            setShortLink(`https://ass-server-ten.vercel.app/${response.data.shortURL}`);
            setActive(true);
            setCopied(false);

            setQR(`http://api.qrserver.com/v1/create-qr-code/?data=https://ass-server-ten.vercel.app/${response.data.shortURL}&size=[200]x[200]`)



        } catch (error) {
            console.error('Error shortening URL', error);
        }
    };

    console.log(shortLink);
    return (
        <div className="col-md-8 mx-auto">
            <h2 className="text-light">A Simple  Link Shortener</h2>
            <div>
                <form className="mt-3" method="post" action="" onSubmit={handleSubmit}>
                    <div className="align-items-center bg-white input-group rounded">
                        <input
                            required
                            name="long_url"
                            type="text"
                            value={longURL}
                            className="form-control"
                            placeholder="Paste your url"
                            onChange={handleChange}
                        />
                        <div className="input-group-append">
                            <button type="submit" className=" go-btn">
                                <i className="align-items-center d-flex fa-forward fa-solid fs-2 justify-content-center"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* show on success... */}
            {active ? (
                <div className="bg-gradient d-flex justify-content-evenly py-3 show_links">
                    <img
                        src={QR}
                        width={125}
                        alt="Qr code"
                        className="qr_img border border-danger p-1"
                    />
                    <div className="align-items-center d-flex">
                        <div>
                            <h3 className="text-light">Here's your short link...</h3>
                            <span className="align-items-center d-flex gap-3 text-light">
                                <p style={{ fontSize: '12px' }} className="border mb-0 px-2 py-1 rounded">{shortLink}</p>
                                <CopyToClipboard
                                    onCopy={() => {
                                        setCopied(!copied);
                                    }}
                                    text={shortLink}
                                >
                                    {!copied ? (
                                        <i className="fa-solid fa-copy"></i>
                                    ) : (
                                        <span className="text-light">Copied!</span>
                                    )}
                                </CopyToClipboard>
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default UrlShortener;

