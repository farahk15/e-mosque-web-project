const SaveDataToSettingsFile = require('../../scripts/SaveDataToSettingsFile');
const ReadSettings = require('../../scripts/ReadSettings');
const ReadDefaultSettings = require('../../scripts/ReadDefaultSettings');
const { UserStyles } = require('../../Types/UserStyles');

const UserStylesWriter = async (req,res) => {
    try {
        let data = req.body
        let styles = UserStyles.CreateFromJson(data);
        if(styles != null && styles.validateColors())
        {
            let content = await SaveDataToSettingsFile(styles , "StyleSettings.json")
            res.send(content)
        }
        else {
            return res.status(400).json({ error: "Invalid styles." });
        }
    } catch (error) {
        console.log("stylesWriter", error);
    }
   
}


const UserStylesReader = async (req,res) => {
   try {
    let data = req.body
    let content = await ReadSettings(null, "StyleSettings.json")
    let styles = UserStyles.CreateFromJson(content)
    if(styles == null || !styles.validateColors())
    {
        throw "settings file not found";
    }
    res.send(styles)

   } catch (error) {
    let defaultSettings = await ReadDefaultSettings(null, "StyleSettings.json")
    let data = await SaveDataToSettingsFile(defaultSettings, "StyleSettings.json", true)
    let content = UserStyles.CreateFromJson(data)
    res.send(content)
    console.log("reading default settings")

   }
} 




module.exports = {UserStylesWriter,  UserStylesReader}