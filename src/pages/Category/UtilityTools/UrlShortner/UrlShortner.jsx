/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import axios from 'axios';
import CopyToClipboard from 'react-copy-to-clipboard';
import Loader from '../../../../components/Loader';
import qrLoding from '../../../../assets/images/qr-scanning.gif'
const UrlShortener = () => {
    const [loading, setLoading] = useState(false);
    const [longURL, setLongUrl] = useState("");
    const [shortLink, setShortLink] = useState('');

    const [copied, setCopied] = useState(true);
    const [QR, setQR] = useState('');
    const baseUrl = 'https://short-tools.vercel.app';

    function handleChange(e) {
        setLongUrl(e.target.value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const calculatedExpirationDate = new Date();
        calculatedExpirationDate.setFullYear(calculatedExpirationDate.getFullYear() + 3);

        try {
            const response = await axios.post(`${baseUrl}/shorten`, {
                longURL,
                expirationDate: calculatedExpirationDate,
            });

            const shortURL = `${baseUrl}/${response.data.shortURL}`;
            setShortLink(shortURL);

            setCopied(false);
            setQR(
                `http://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
                    shortURL
                )}&size=200x200`
            );
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Error shortening URL', error);
        }
    };
    // console.log(loading);

    return (
        <div className='row w-100 bg-gradient rounded mx-auto pt-4'>
            <div className="col-md-8 mx-auto ">
                <h2 className="text-light">A Simple  Link Shortener</h2>
                <div>
                    <form className="mt-3" method="post" action="" onSubmit={handleSubmit}>
                        <div className="align-items-center bg-white input-group rounded">
                            <input
                                required
                                name="long_url"
                                type="url"
                                value={longURL}
                                className="form-control"
                                placeholder="Paste your url"
                                onChange={handleChange}
                            />
                            <div className="input-group-append">
                                <button disabled={loading} type="submit" className=" go-btn">
                                    <i className="align-items-center d-flex fa-forward fa-solid fs-2 justify-content-center"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>


                {loading ? <><Loader /></> : (
                    <div className="bg-gradient d-flex justify-content-evenly py-3 show_links">
                        <img
                            src={QR ? QR : qrLoding}
                            width={125}
                            alt="Qr code"
                            className="qr_img border border-danger p-1"
                        />
                        <div className="align-items-center d-flex">
                            <div>
                                <h3 className="text-light">Here's your short link...</h3>

                                {shortLink && <span className="align-items-center d-flex gap-3 text-light">
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
                                </span>}
                            </div>
                        </div>
                    </div>
                )
                }

                <br />
                <br />
                <br />
                <hr />
                <hr />
                <hr />

            </div>
        </div>
    );
};

export default UrlShortener;

