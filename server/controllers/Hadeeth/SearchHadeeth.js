const ReadSettings = require('../../scripts/ReadSettings');
const SearchHadeeth = async (req, res) => {
    try {
        let word = (req.body?.word || '').trim().toLowerCase();
        if (!word) {
            return res.status(400).json({ error: 'Word not provided' });
        }
        word = removeDiacritics(word);
        const result = detectTextLanguage(word);
        let hadeethDb = await ReadSettings(word, result === "en" ? "HadeethDB-En.json" : "HadeethDB.json")
        const parsedHadeethDb = JSON.parse(hadeethDb);
        const matchingHadiths = parsedHadeethDb.filter(hadith => removeDiacritics(hadith.content).toLowerCase().includes(word));
        res.json(matchingHadiths);
    } catch (error) {
        console.error('Error in SearchHadeeth:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
function detectTextLanguage(text) {
    const arabicPattern = /[\u0600-\u06FF]/;
    const englishPattern = /[a-zA-Z]/;
    if (arabicPattern.test(text[0])) {
        return 'ar';
    } else if (englishPattern.test(text[0])) {
        return 'en';
    }
    return 'undetermined';
}

function removeDiacritics(str) {
    const arabicDiacritics = /[\u064B-\u0652\u0640\u0670\u06D6-\u06DC\u06DF-\u06E8\u06EA-\u06ED]/g;
    return str.replace(arabicDiacritics, '');
}
module.exports = { SearchHadeeth }