// utils/transliterate.js

// Function to create IPA from Punjabi words
export const ipa_creation = (word) => {
    // Using a simple string replacement instead of regex
    const replacements = [
        { regex: /ਫ਼/g, replacement: "f" },
        { regex: /ਕ਼/g, replacement: "q" },
        { regex: /ਸ਼/g, replacement: "ʃ" },
        { regex: /ਖ਼/g, replacement: "x" },
        { regex: /ਗ਼/g, replacement: "ɣ" },
        { regex: /ਜ਼/g, replacement: "z" },
        { regex: /ਪਾ/g, replacement: "ɑː" },
        { regex: /ਪੇ/g, replacement: "eː" },
        { regex: /ਪੈ/g, replacement: "ɛː" },
        { regex: /ਪੀ/g, replacement: "iː" },
        { regex: /ਪਿ/g, replacement: "ɪ" },
        { regex: /ਪੋ/g, replacement: "oː" },
        { regex: /ਪੌ/g, replacement: "ɔː" },
        { regex: /ਪੂ/g, replacement: "uː" },
        { regex: /ਪੁ/g, replacement: "ʊ" },
        { regex: /ਰ/g, replacement: "ʳ" },
        { regex: /੍ਹ/g, replacement: "ʰ" },
        { regex: /ਬ/g, replacement: "b" },
        { regex: /ਭ/g, replacement: "bʰ" },
        { regex: /ਦ/g, replacement: "d" },
        { regex: /ਧ/g, replacement: "dʰ" },
        { regex: /ਡ/g, replacement: "ɖ" },
        { regex: /ਢ/g, replacement: "ɖʰ" },
        { regex: /ਜ/g, replacement: "j" },
        { regex: /ਝ/g, replacement: "jʰ" },
        { regex: /ਗ/g, replacement: "ɡ" },
        { regex: /ਘ/g, replacement: "gʰ" },
        { regex: /ਹ/g, replacement: "h" },
        { regex: /ਯ/g, replacement: "y" },
        { regex: /ਕ/g, replacement: "k" },
        { regex: /ਖ/g, replacement: "kʰ" },
        { regex: /ਲ/g, replacement: "l" },
        { regex: /ਮ/g, replacement: "m" },
        { regex: /ਨ/g, replacement: "n" },
        { regex: /ਣ/g, replacement: "ɳ" },
        { regex: /ੰ/g, replacement: "ŋ" },
        { regex: /ਂ/g, replacement: "ŋ" },
        { regex: /ਪ/g, replacement: "p" },
        { regex: /ਫ/g, replacement: "pʰ" },
        { regex: /ਰ/g, replacement: "r" },
        { regex: /ੜ/g, replacement: "ɽ" },
        { regex: /ੜ੍ਹ/g, replacement: "ɽʱ" },
        { regex: /ਸ/g, replacement: "s" },
        { regex: /ਤ/g, replacement: "t" },
        { regex: /ਥ/g, replacement: "tʰ" },
        { regex: /ਟ/g, replacement: "ʈ" },
        { regex: /ਠ/g, replacement: "ʈʰ" },
        { regex: /ਚ/g, replacement: "c" },
        { regex: /ਛ/g, replacement: "cʰ" },
        { regex: /ਵ/g, replacement: "v" },
        { regex: /ਆ/g, replacement: "ɑː" },
        { regex: /ਏ/g, replacement: "eː" },
        { regex: /ਐ/g, replacement: "ɛː" },
        { regex: /ਅ/g, replacement: "ə" },
        { regex: /ਈ/g, replacement: "iː" },
        { regex: /ਇ/g, replacement: "ɪ" },
        { regex: /ਓ/g, replacement: "oː" },
        { regex: /ਔ/g, replacement: "ɔː" },
        { regex: /ਊ/g, replacement: "uː" },
        { regex: /ਉ/g, replacement: "ʊ" },
        { regex: /ੱ/g, replacement: "a" }
    ];

    replacements.forEach(({ regex, replacement }) => {
        word = word.replace(regex, replacement);
    });

    return word;
};

// Function to transliterate English text to Punjabi
export const transliterate = (text) => {
    const transliterationMap = {
        // Vowels
        'a': 'ਅ', 'A': 'ਅ', 'aa': 'ਆ', 'Aaa': 'ਆ', 'A': 'ਆ',
        'i': 'ਇ', 'I': 'ਈ', 'ee': 'ਇ', 'ee': 'ਈ',
        'u': 'ਉ', 'U': 'ਊ', 'oo': 'ਊ', 'oo': 'ਉ',
        'e': 'ਏ', 'E': 'ਏ', 'ai': 'ਐ', 'Ai': 'ਐ',
        'o': 'ਓ', 'O': 'ਓ', 'au': 'ਔ', 'Au': 'ਔ',
        'ai': 'ਐ', 'oi': 'ਓਇ', 'oy': 'ਓਇ',

        // Consonants
        'k': 'ਕ', 'K': 'ਖ', 'g': 'ਗ', 'G': 'ਘ',
        'c': 'ਚ', 'C': 'ਛ', 'j': 'ਜ', 'J': 'ਝ',
        't': 'ਤ', 'T': 'ਥ', 'd': 'ਦ', 'D': 'ਧ',
        'n': 'ਨ', 'p': 'ਪ', 'P': 'ਫ', 'b': 'ਬ',
        'B': 'ਭ', 'm': 'ਮ', 'y': 'ਯ', 'r': 'ਰ',
        'l': 'ਲ', 'v': 'ਵ', 's': 'ਸ', 'S': 'ਸ਼',
        'h': 'ਹ', 'z': 'ਜ਼', 'f': 'ਫ',

        // Common combinations
        'kh': 'ਖ', 'gh': 'ਘ', 'ch': 'ਚ', 'jh': 'ਝ',
        'th': 'ਥ', 'dh': 'ਧ', 'ph': 'ਫ', 'bh': 'ਭ',
        'sh': 'ਸ਼', 'ng': 'ੰਗ', 'ny': 'ਞ',

        // Nasalization
        'n\'': 'ਂ', 'N': 'ਞ', 'm\'': 'ਂ', 'M': 'ਂ',

        // Special cases
        ' ': ' ', // space
        '.': '।', ',': '।', '!': '!', '?': '?',

        // Digraphs and special sounds
        'au': 'ਔ', 'ai': 'ਐ', 'kh': 'ਖ', 'gh': 'ਘ',
        'ch': 'ਚ', 'jh': 'ਝ', 'th': 'ਥ', 'dh': 'ਧ',
        'ph': 'ਫ', 'bh': 'ਭ', 'sh': 'ਸ਼', 'ng': 'ਂ',
        'ny': 'ਞ', 'tr': 'ਤਰ', 'dr': 'ਦਰ', 'pr': 'ਪਰ',
        'gr': 'ਗਰ', 'kr': 'ਕਰ',

        // Consonant clusters and endings
        'nt': 'ਨਤ', 'nd': 'ੰਦ', 'mb': 'ਮਬ', 'mp': 'ਮਪ',
        'nt': 'ਨਤ', 'ns': 'ਨਸ', 'm': 'ਮ', 'r': 'ਰ',

        // Common English sounds
        'th': 'ਥ', 'wh': 'ਵ', 'qu': 'ਕ੍ਵ', 'gh': 'ਗ',
        'x': 'ਕਸ', 'z': 'ਜ਼',

        // Handle cases for common words or phrases
        'the': 'ਦੇ', 'and': 'ਅਤੇ', 'to': 'ਤੱਕ', 'for': 'ਲਈ',
        'of': 'ਦਾ', 'is': 'ਹੈ', 'was': 'ਸਿਆ', 'are': 'ਹੈ',

        // Adding more common English words and phrases
        'you': 'ਤੁਸੀਂ', 'he': 'ਉਹ', 'she': 'ਉਹ', 'it': 'ਇਹ',
        'we': 'ਅਸੀਂ', 'they': 'ਉਹ',
    };

    // Convert the input text to lowercase for consistent mapping
    const lowerText = text.toLowerCase();

    // Transliterate
    let transliterated = lowerText.split('').map(char => {
        return transliterationMap[char] || char; // Use original character if not found
    }).join('');

    // Convert to IPA
    const ipaResult = ipa_creation(transliterated);

    return { transliterated, ipaResult };
};
