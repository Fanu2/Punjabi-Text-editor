// pages/index.js

import React, { useState } from 'react';
import PunjabiKeyboard from '../components/PunjabiKeyboard'; // Adjust the path as necessary

const HomePage = () => {
    const [text, setText] = useState('');

    const handleKeyPress = (key) => {
        setText((prev) => prev + key); // Update text state to include the new character
    };

    return (
        <div>
            <h1>Punjabi Keyboard</h1>
            <PunjabiKeyboard onKeyPress={handleKeyPress} />
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)} // Allow text area editing
                rows={10} // Adjust the number of rows as needed
                cols={50} // Adjust the number of columns as needed
                placeholder="Type or paste your text here..."
            />
        </div>
    );
};

export default HomePage;
