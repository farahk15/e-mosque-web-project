const ReadErrors = require('../../scripts/ReadErrors');

const GetErrors = async (req,res) => {
    try {   
        let content = await ReadErrors("errors.txt");
        if (content == null){
            throw 'Error reading errors file.';
        }
        res.send(content);
    } catch (error) {
        console.error('Error reading errors file:', error);
        res.status(500).json({ error: 'Failed to read errors file.' });
    }
};

module.exports = {GetErrors}