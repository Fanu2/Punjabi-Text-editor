// components/ThemeToggle.js
import { Button } from '@chakra-ui/react';

const ThemeToggle = ({ toggleTheme, isDark }) => {
    return (
        <Button onClick={toggleTheme} mt={4}>
            Switch to {isDark ? 'Light' : 'Dark'} Theme
        </Button>
    );
};

export default ThemeToggle;
