import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

const LanguageTranslate = () => {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const handleTranslate = () => {
        // Implement translation logic here
        // For demonstration purposes, let's just reverse the input text
        const reversedText = inputText.split('').reverse().join('');
        setTranslatedText(reversedText);
    };

    return (
        <Container>
            <Row className="mt-5">
                <Col md={{ size: 6, offset: 3 }}>
                    <Form>
                        <FormGroup>
                            <Label for="inputText">Enter Text to Translate</Label>
                            <Input
                                type="textarea"
                                name="inputText"
                                id="inputText"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="translatedText">Translated Text</Label>
                            <Input
                                type="textarea"
                                name="translatedText"
                                id="translatedText"
                                value={translatedText}
                                readOnly
                            />
                        </FormGroup>
                        <Button color="primary" onClick={handleTranslate}>
                            Translate
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LanguageTranslate;
