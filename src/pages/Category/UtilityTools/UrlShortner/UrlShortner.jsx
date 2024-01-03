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
        <div className="shortener-container">
            <h2>A Simple Bitly Link Shortener</h2>
            <div>
                <form method="post" action="" onSubmit={handleSubmit}>
                    <input
                        name="long_url"
                        type="text"
                        value={longURL}
                        placeholder="Paste your url"
                        onChange={handleChange}
                    />
                    <button type="submit"><img src="https://raw.githubusercontent.com/amissah17/linkshortener/main/src/icons/send.png" alt="send icon" id="send_icon" /></button>

                </form>

            </div>

            {/* show on success... */}

            {active ? (
                <div className="show_links">
                    <img src={shortLink.qr_code}

                        width={125}
                        alt="Qr code" className="qr_img border border-danger" />
                    <div>
                        <h3>Here's your short link...</h3>
                        <span>
                            <p>{shortLink.link}</p>
                            <CopyToClipboard onCopy={() => {
                                setCopy(true);
                            }} text={shortLink.link}>{!copy ? <img src="https://raw.githubusercontent.com/amissah17/linkshortener/main/src/icons/copy.png" alt="copy icon" width="17px" height="17px" /> : <img src='https://raw.githubusercontent.com/amissah17/linkshortener/main/src/icons/copied.png' alt="copy icon" width="17px" height="17px" />}</CopyToClipboard>

                        </span>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default UrlShortener;
