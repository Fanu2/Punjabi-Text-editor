// components/PunjabiKeyboard.js
import React, { useRef } from 'react';
import { Box, Button, Grid } from '@chakra-ui/react';

const punjabiKeys = [
    ['ੰ', 'ੱ', 'ਾ', 'ਇ', 'ੀ', 'ਉ', 'ੂ', 'ੳ'],
    ['ਕ', 'ਖ', 'ਗ', 'ਘ', 'ਙ', 'ਚ', 'ਛ', 'ਜ', 'ਝ'],
    ['ਟ', 'ਠ', 'ਡ', 'ਢ', 'ਣ', 'ਤ', 'ਥ', 'ਦ', 'ਧ', 'ਨ'],
    ['ਪ', 'ਫ', 'ਬ', 'ਭ', 'ਮ', 'ਯ', 'ਰ', 'ਲ', 'ਵ', 'ਹ'],
    ['ਸ', 'ਸ਼', 'ਜ', 'ਜ਼', 'ਖ਼', 'ਗ਼', 'ਫ਼']
];

const PunjabiKeyboard = ({ onKeyPress }) => {
    const keyboardRef = useRef(null);

    const handleDragStart = (e) => {
        const keyboardElement = keyboardRef.current;
        const shiftX = e.clientX - keyboardElement.getBoundingClientRect().left;
        const shiftY = e.clientY - keyboardElement.getBoundingClientRect().top;

        const moveAt = (pageX, pageY) => {
            keyboardElement.style.left = pageX - shiftX + 'px';
            keyboardElement.style.top = pageY - shiftY + 'px';
        };

        const onMouseMove = (e) => {
            moveAt(e.pageX, e.pageY);
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    return (
        <Box
            ref={keyboardRef}
            position="fixed"
            bottom="10"
            right="10"
            bg="white"
            p={2}
            borderRadius="md"
            boxShadow="lg"
            zIndex="1000"
            style={{ cursor: 'move', userSelect: 'none' }} // Prevent text selection while dragging
            onMouseDown={handleDragStart}
        >
            <Grid templateColumns="repeat(10, 1fr)" gap={2}>
                {punjabiKeys.map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        {row.map((key, index) => (
                            <Button
                                key={index}
                                onClick={() => onKeyPress(key)}
                                size="lg"
                                variant="outline"
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
