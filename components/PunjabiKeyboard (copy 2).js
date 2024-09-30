import React from 'react';
import { Box, Button, Grid } from '@chakra-ui/react';

// Complete Punjabi keyboard layout with specified characters
const punjabiKeys = [
    ['ੰ', 'ੱ', 'ਾ', 'ਿ', 'ੀ', 'ਉ', 'ੁ', 'ੂ', 'ੳ', 'ੲ'], // Row 1: Mukta, AA, Sihari, Bihari, Aunkar, Dulankar
    ['ਕ', 'ਖ', 'ਗ', 'ਘ', 'ਙ', 'ਚ', 'ਛ', 'ਜ', 'ਝ', 'ਫ਼'], // Row 2
    ['ਟ', 'ਠ', 'ਡ', 'ਢ', 'ਣ', 'ਤ', 'ਥ', 'ਦ', 'ਧ', 'ਨ'], // Row 3
    ['ਪ', 'ਫ', 'ਬ', 'ਭ', 'ਮ', 'ਯ', 'ਰ', 'ਲ', 'ਵ', 'ਹ'], // Row 4
    ['ਸ', 'ਸ਼', 'ਜ', 'ਜ਼', 'ਖ਼', 'ਗ਼', 'ਲ਼', 'ੵ', 'ਫ਼', '਼'], // Row 5: Laavan, Dulaavan, Horaa, Kanauraa
    ['ਏ', 'ੲੈ', 'ਓ', 'ਔ', 'ੌ', '੭', '੮', '੯', '੬', '੮'] // Row 6: A, Dulaavan, Horaa, Kanauraa
];

const PunjabiKeyboard = ({ onKeyPress }) => {
    return (
        <Box mt={4} padding="10px" borderWidth="1px" borderRadius="md" boxShadow="lg">
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
                                fontSize="20px" // Increase font size for better readability
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
