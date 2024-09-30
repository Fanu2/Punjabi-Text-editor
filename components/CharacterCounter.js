// components/CharacterCounter.js
import { Box, Text } from '@chakra-ui/react';

const CharacterCounter = ({ text }) => {
    return (
        <Box mt={4} p={4} borderWidth={1} borderRadius="md" backgroundColor="white">
            <Text fontWeight="bold">Character Count:</Text>
            <Text>{text.length}</Text>
        </Box>
    );
};

export default CharacterCounter;
