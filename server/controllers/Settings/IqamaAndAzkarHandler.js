const SaveDataToSettingsFile = require('../../scripts/SaveDataToSettingsFile');
const ReadSettings = require('../../scripts/ReadSettings');
const ReadDefaultSettings = require('../../scripts/ReadDefaultSettings');
const { IqamaAndAzkar } = require('../../Types/IqamaAndAzkar');




const IqamaAndAzkarWriter = async (req,res) => {
    let data = req.body
    let iqamaAndAzkar = IqamaAndAzkar.CreateFromJson(data)
    if (iqamaAndAzkar !== null && iqamaAndAzkar.validateIqamaAndAzkar()) {
    let content = await SaveDataToSettingsFile(iqamaAndAzkar , "IqamaAndAzkar.json")
    res.send(content)
    }
    else {
        return res.status(400).json({ error: "Invalid Iqama and Azkar." });
    }
}

const IqamaAndAzkarReader = async (req,res) => {
    try {
        let data = req.body
        let content = await ReadSettings(data , "IqamaAndAzkar.json")
        let iqamaAndAzkar = IqamaAndAzkar.CreateFromJson(content)
        if (iqamaAndAzkar == null || !iqamaAndAzkar.validateIqamaAndAzkar()) {
            throw 'Settings file not found'
        }
        res.send(iqamaAndAzkar) 
    } catch (error) {
        let data = req.body
        let defaultSettings = await ReadDefaultSettings(data , "IqamaAndAzkar.json")
        let newData = await SaveDataToSettingsFile(defaultSettings, "IqamaAndAzkar.json", true);
        let content = IqamaAndAzkar.CreateFromJson(newData)
        res.send(content)
        console.log('Reading default settings');
    }
} 

module.exports = {IqamaAndAzkarReader,  IqamaAndAzkarWriter}