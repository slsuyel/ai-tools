import React, { useState } from 'react';

const Hadith = () => {

    const [book, setBook] = useState([])

    const apiUrl = 'https://www.hadithapi.com/api/books?apiKey=$2y$10$VmaurPtzvAgUHxeKKHn5vheFd9XXRAw48et7Xh3Txt470yurWfxS';
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            setBook(data.books)
        })
        .catch(error => {
            console.log(error);
        })

    console.log(book);


    return (
        <div>

        </div>
    );
};

export default Hadith;