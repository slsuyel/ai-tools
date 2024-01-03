/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import '../Utilites.css'

function UrlShortener() {
    const [longURL, setLongUrl] = useState("");
    const [shortLink, setShortLink] = useState({});
    const [active, setActive] = useState(false);
    const [copy, setCopy] = useState(false);

    function handleChange(e) {
        setLongUrl(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await fetch("https://api-ssl.bitly.com/v4/shorten", {
            method: "POST",
            mode: "cors",
            headers: {
                Authorization: `Bearer b1622c8ab38f699bcf703d31c4873088633172b4`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                long_url: longURL,
                domain: "bit.ly",
                group_guid: `Bo13gdXENNG`,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                const new_link = data.link ? data.link.replace("https://", "") : "";

                fetch(
                    `https://api-ssl.bitly.com/v4/bitlinks/${new_link}/qr?image_format=png`,
                    {
                        mode: "cors",
                        headers: {
                            Authorization: `Bearer b1622c8ab38f699bcf703d31c4873088633172b4`,
                        },
                    }
                )
                    .then((response) => response.json())
                    .then((result) => {
                        setShortLink(result);
                        setActive(true);
                    });
            });
        setLongUrl("");
    }

    return (
        <div className="col-md-8 mx-auto">
            <h2 className="text-light">A Simple Bitly Link Shortener</h2>
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
                        src={shortLink.qr_code}
                        width={125}
                        alt="Qr code"
                        className="qr_img border border-danger"
                    />
                    <div className="align-items-center d-flex">
                        <div>
                            <h3 className="text-light">Here's your short link...</h3>
                            <span className="align-items-center d-flex gap-3 text-light">
                                <p className="border mb-0 px-2 py-1 rounded">{shortLink.link}</p>
                                <CopyToClipboard
                                    onCopy={() => {
                                        setCopy(true);
                                    }}
                                    text={shortLink.link}
                                >
                                    {!copy ? (
                                        <i className="fa-solid fa-copy"></i>
                                    ) : (
                                        <img
                                            src="https://raw.githubusercontent.com/amissah17/linkshortener/main/src/icons/copied.png"
                                            alt="copy icon"
                                            width="17px"
                                            height="17px"
                                        />
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
}

export default UrlShortener;
