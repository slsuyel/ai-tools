import React, { useState } from 'react';
import { Button, Container, Row, Col, Form, Image } from 'react-bootstrap';

const ProfilePicture = () => {
    const [image, setImage] = useState(null);
    const [editedImage, setEditedImage] = useState(null);
    const [newBackground, setNewBackground] = useState('#ffffff');

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(URL.createObjectURL(selectedImage));
    };

    const handleRemoveBackground = () => {

        setEditedImage(/* Resulting image after removing background */);
    };

    const handleAddBackground = () => {
        // Add logic to add a new background to the image
        // Update the edited image state
        setEditedImage(/* Resulting image after adding new background */);
    };

    return (
        <Container className="mt-5 bg-gradient">

            <h1 className='text-center text-warning'>We are coming soon</h1>

            <Row>
                <Col md={6}>
                    <Form.Group controlId="imageUpload">
                        <Form.Label>Upload Profile Picture</Form.Label>
                        <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
                    </Form.Group>

                    {image && (
                        <div>
                            <Image src={image} alt="Profile" className="img-fluid mt-3" />
                        </div>
                    )}
                </Col>

                <Col md={6}>
                    {editedImage && (
                        <div>
                            <h4>Edited Profile Picture</h4>
                            <Image src={editedImage} alt="Edited Profile" className="img-fluid mt-3" />
                        </div>
                    )}

                    <Form.Group controlId="backgroundPicker">
                        <Form.Label>Select New Background Color</Form.Label>
                        <Form.Control type="color" value={newBackground} onChange={(e) => setNewBackground(e.target.value)} />
                    </Form.Group>

                    <Button disabled variant="primary" className="mr-2" onClick={handleRemoveBackground}>
                        Remove Background
                    </Button>

                    <Button disabled variant="success" onClick={handleAddBackground}>
                        Add Background
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePicture;
