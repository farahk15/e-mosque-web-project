const SaveDataToSettingsFile = require('../../scripts/SaveDataToSettingsFile');
const ReadSettings = require('../../scripts/ReadSettings');
const {PrayerOffsets} = require('../../Types/PrayerOffsets');
const ReadDefaultSettings = require('../../scripts/ReadDefaultSettings');

const PrayerOffsetWriter = async (req,res) => {
    try {
        let data = req.body
        let prayeroffsets = PrayerOffsets.CreateFromJson(data);
        if(!prayeroffsets || !prayeroffsets.validateOffsets()){
            return res.status(400).json({ error: "Invalid offsets." });
        }
        let content = await SaveDataToSettingsFile(prayeroffsets.toJSON() , "PrayerOffset.json")
        res.send(content)
        
    } catch (error) {
        console.log("writePrayerOffset", error);
    }
   
}

const PrayerOffsetReader = async (req,res) => {
    try {
        let data = req.body
        let content = await ReadSettings(null , "PrayerOffset.json")
        let prayeroffsets = PrayerOffsets.CreateFromJson(content)
        if (prayeroffsets == null || !prayeroffsets.validateOffsets()) {
            throw "Settings file not found."
        } 
        res.send(prayeroffsets)

    } catch (error) {
        let defaultSettings  = await ReadDefaultSettings(null , "PrayerOffset.json");
        let data = await SaveDataToSettingsFile(defaultSettings , "PrayerOffset.json", true);
        let content = PrayerOffsets.CreateFromJson(data);
        res.send(content);
        console.log("read default settings");        
    } 
    
} 




module.exports = {PrayerOffsetWriter,  PrayerOffsetReader}