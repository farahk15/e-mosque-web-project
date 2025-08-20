const fs = require('fs');
const { dirname } = require('path');
const SaveDataToSettingsFile = require('../../scripts/SaveDataToSettingsFile');
const ReadSettings = require('../../scripts/ReadSettings');
const { GeneralSettings } = require('../../Types/GeneralSettings');
const ReadDefaultSettings = require('../../scripts/ReadDefaultSettings');

const filename = 'GeneralSettings.json';

const GeneralSettingsWriter = async (req, res) => {

    try {
        const data = req.body;
        const result = GeneralSettings.CreateFromJson(data);
        if (result !== null) {
            await SaveDataToSettingsFile(result, filename);
            res.send(result);
        } else {
            res.status(400).send("Bad Request: Invalid JSON data");
        }
    } catch (error) {
        console.error("Error writing general settings:", error);
        res.status(500).send("Internal Server Error");
    }
}

const GeneralSettingsReader = async (req, res) => {
    try {
        const data = req.body;
        const content = await ReadSettings(data, filename);
        const result = GeneralSettings.CreateFromJson(content);
        if (result === null) {
            throw new Error("Error reading JSON data");
        }
        res.send(result);
    } catch (error) {

        const settings = await ReadDefaultSettings(null, filename);
        const content = await SaveDataToSettingsFile(settings, filename, true);
        console.error("Error reading or saving default settings:", error);
        res.send(content);

    }
};

module.exports = { GeneralSettingsWriter, GeneralSettingsReader };
