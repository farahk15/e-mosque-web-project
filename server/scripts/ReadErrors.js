const fs = require('fs');
const path = require('path');

const ReadErrors = async (filename) => {
    try {
        const appDir = path.dirname(require.main.filename);
        const filePath = path.join(appDir, filename); 
        if (!fs.existsSync(filePath)) {
            return "";
        }
        const errors = fs.readFileSync(filePath, 'utf8');
        return errors;
    } catch (error) {
        return null;
    }
};

module.exports = ReadErrors;
