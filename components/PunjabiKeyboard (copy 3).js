import React, { useState } from 'react';
import { Box, Button, Grid, Select, Input, Textarea } from '@chakra-ui/react';

// Complete Punjabi keyboard layout with specified characters
const punjabiKeys = [
    ['ੰ', 'ੱ', 'ਾ', 'ਿ', 'ੀ', 'ਉ', 'ੁ', 'ੂ', 'ੳ', 'ੲ'], // Row 1
    ['ਕ', 'ਖ', 'ਗ', 'ਘ', 'ਙ', 'ਚ', 'ਛ', 'ਜ', 'ਝ', 'ਫ਼'], // Row 2
    ['ਟ', 'ਠ', 'ਡ', 'ਢ', 'ਣ', 'ਤ', 'ਥ', 'ਦ', 'ਧ', 'ਨ'], // Row 3
    ['ਪ', 'ਫ', 'ਬ', 'ਭ', 'ਮ', 'ਯ', 'ਰ', 'ਲ', 'ਵ', 'ਹ'], // Row 4
    ['ਸ', 'ਸ਼', 'ਜ', 'ਜ਼', 'ਖ਼', 'ਗ਼', 'ਲ਼', 'ੵ', 'ਫ਼', '਼'], // Row 5
    ['ਏ', 'ੲੈ', 'ਓ', 'ਔ', 'ੌ', '੭', '੮', '੯', '੬', '੮'] // Row 6
];

const PunjabiKeyboard = ({ onKeyPress = () => {} }) => {
    const [fontSize, setFontSize] = useState('20px');
    const [fontColor, setFontColor] = useState('#000000');
    const [bgColor, setBgColor] = useState('#ffffff');
    const [text, setText] = useState('');

    const handlePaste = () => {
        navigator.clipboard.readText().then(clipText => {
            setText(prev => prev + clipText);
        });
    };

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    return (
        <Box mt={4} padding="10px" borderWidth="1px" borderRadius="md" boxShadow="lg">
            <Box mb={4}>
                <Select value={fontSize} onChange={(e) => setFontSize(e.target.value)} width="auto" mb={2}>
                    <option value="16px">16px</option>
                    <option value="20px">20px</option>
                    <option value="24px">24px</option>
                    <option value="28px">28px</option>
                </Select>
                <Input
                    type="color"
                    value={fontColor}
                    onChange={(e) => setFontColor(e.target.value)}
                    mb={2}
                />
                <Input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    mb={2}
                />
                <Button onClick={handlePaste} colorScheme="teal" mb={2}>Paste from Clipboard</Button>
                <Textarea
                    value={text}
                    onChange={handleInputChange}
                    size="lg"
                    resize="none"
                    placeholder="Type or paste your text here..."
                    fontSize={fontSize}
                    color={fontColor}
                    backgroundColor={bgColor}
                />
            </Box>
            <Grid templateColumns="repeat(10, 1fr)" gap={1}>
                {punjabiKeys.map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        {row.map((key, index) => (
                            <Button
                                key={index}
                                onClick={() => onKeyPress(key)}
                                size="lg"
                                variant="outline"
                                width="100%" // Full width for each button
                                height="50px" // Set a fixed height for better alignment
                                fontSize={fontSize} // Use selected font size
                                color={fontColor} // Use selected font color
                                backgroundColor={bgColor} // Use selected background color
                            >
                                {key}
                            </Button>
                        ))}
                    </React.Fragment>
                ))}
            </Grid>
        </Box>
    );
};

export default PunjabiKeyboard;
