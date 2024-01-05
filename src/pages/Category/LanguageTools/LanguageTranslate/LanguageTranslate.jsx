import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

const LanguageTranslate = () => {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const handleTranslate = async () => {
        try {
            const response = await fetch('https://api.translateplus.io/v1/translate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'APIKeyHeader': '94680b8ae34f9666092f312097df1ad5e6812ca6',
                },
                body: JSON.stringify({
                    text: inputText,
                    source: 'auto',
                    target: 'bn',
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setTranslatedText(data.translations.translation);
            } else {
                console.error('Translation failed:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Translation error:', error);
        }
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
                        <Button color="primary" disabled onClick={handleTranslate}>
                            Translate
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LanguageTranslate;
