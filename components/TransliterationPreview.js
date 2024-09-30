// components/TransliterationPreview.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const TransliterationPreview = ({ transliterated, ipaResult }) => {
    return (
        <Box p={4} borderWidth={1} borderRadius="md">
            <Text fontWeight="bold">Transliterated Text:</Text>
            <Text>{transliterated}</Text>
            <Text fontWeight="bold">IPA Result:</Text>
            <Text>{ipaResult}</Text>
        </Box>
    );
};

export default TransliterationPreview;
