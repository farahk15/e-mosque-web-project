const SaveDataToSettingsFile = require('../../scripts/SaveDataToSettingsFile');
const ReadSettings = require('../../scripts/ReadSettings');
const ReadDefaultSettings = require('../../scripts/ReadDefaultSettings');
const { HijriOffset } = require('../../Types/HijriOffset');




const HijriDaysOffsetWriter = async (req,res) => {
    let data = req.body
    let hijriOffset = HijriOffset.CreateFromJson(data)
    if (hijriOffset !== null && hijriOffset.validateOffset()) {
    let content = await SaveDataToSettingsFile(hijriOffset , "HijriDaysOffset.json")
    res.send(content)
    }
    else {
        return res.status(400).json({ error: "Invalid Hijri Offset." });
    }
}

const HijriDaysOffsetReader = async (req,res) => {
    try {
        let data = req.body
        let content = await ReadSettings(data , "HijriDaysOffset.json")
        let hijriOffset = HijriOffset.CreateFromJson(content)
        if (hijriOffset == null || !hijriOffset.validateOffset()) {
            throw 'Settings file not found'
        }
        res.send(hijriOffset) 
    } catch (error) {
        let data = req.body
        let defaultSettings = await ReadDefaultSettings(data , "HijriDaysOffset.json")
        let newData = await SaveDataToSettingsFile(defaultSettings , "HijriDaysOffset.json", true)
        let content = HijriOffset.CreateFromJson(newData)
        res.send(content)
    }
} 

module.exports = {HijriDaysOffsetWriter,  HijriDaysOffsetReader}