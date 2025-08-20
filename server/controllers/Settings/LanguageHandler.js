const SaveDataToSettingsFile = require('../../scripts/SaveDataToSettingsFile');
const ReadSettings = require('../../scripts/ReadSettings');
const { Language } = require('../../Types/Language');
const fs = require('fs');
const { dirname } = require('path');
const ReadDefaultSettings = require('../../scripts/ReadDefaultSettings');

const LanguageWriter = async (req, res) => {
    try {
        let data = req.body;
        let languageObject = Language.CreateFromJson(data);
        if (languageObject !== null) {
            let content = await SaveDataToSettingsFile(languageObject, "Language.json");
            res.send(content);
        } else {
            res.status(400).send("Bad Request: SelectedLanguage is not provided or invalid.");
        }
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};

const LanguageReader = async (req, res) => {
    try {
        let data = req.body;
        let content = await ReadSettings(data, "Language.json");
        let languageObject = Language.CreateFromJson(content);
        if (languageObject == null) {
            throw new Error("File not found!");
        }
        res.send(languageObject);
    } catch (error) {
        let settings = await ReadDefaultSettings(null, "Language.json");
        let content = await SaveDataToSettingsFile(settings, "Language.json", true);
        res.send(content);
    }
};

module.exports = { LanguageWriter, LanguageReader };
