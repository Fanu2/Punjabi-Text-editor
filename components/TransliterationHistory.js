// components/TransliterationHistory.js
import { Box, Text, VStack } from '@chakra-ui/react';

const TransliterationHistory = ({ history }) => {
    return (
        <Box mt={4} p={4} borderWidth={1} borderRadius="md" backgroundColor="white">
            <Text fontWeight="bold">Transliteration History:</Text>
            <VStack spacing={2} align="stretch">
                {history.length > 0 ? (
                    history.map((entry, index) => (
                        <Box key={index} p={2} borderWidth={1} borderRadius="md">
                            <Text>Original: {entry.original}</Text>
                            <Text>Transliterated: {entry.transliterated}</Text>
                        </Box>
                    ))
                ) : (
                    <Text>No history yet.</Text>
                )}
            </VStack>
        </Box>
    );
};

export default TransliterationHistory;
