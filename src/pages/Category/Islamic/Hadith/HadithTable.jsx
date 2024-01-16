/* eslint-disable react/prop-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from '../../../../components/Loader';
import { Card } from 'react-bootstrap'; // Import the Card component from react-bootstrap

const HadithTable = ({ data, isLoading }) => {
    console.log(data);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="row">
            {data.map((hadith) => (
                <div key={hadith.id} className=" mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Hadith Number: {hadith.hadithNumber}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Chapter ID: {hadith.chapterId}</Card.Subtitle>
                            <Card.Text>
                                <strong>English Narrator:</strong> {hadith.englishNarrator}
                                <br />
                                <strong>Hadith (English):</strong> {hadith.hadithEnglish}
                                <br />
                                <strong>Hadith (Urdu):</strong> {hadith.hadithUrdu}
                                <br />
                                <strong>Urdu Narrator:</strong> {hadith.urduNarrator}
                                <br />
                                <strong>Hadith (Arabic):</strong> {hadith.hadithArabic}
                                <br />
                                <strong>Heading (Arabic):</strong> {hadith.headingArabic}
                                <br />
                                <strong>Heading (Urdu):</strong> {hadith.headingUrdu}
                                <br />
                                <strong>Heading (English):</strong> {hadith.headingEnglish}
                                <br />
                                <strong>Book Slug:</strong> {hadith.bookSlug}
                                <br />
                                <strong>Volume:</strong> {hadith.volume}
                                <br />
                                <strong>Status:</strong> {hadith.status}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default HadithTable;
