const SaveDataToSettingsFile = require('../../scripts/SaveDataToSettingsFile');
const ReadSettings = require('../../scripts/ReadSettings');




const PrimaryMessageWriter = async (req,res) => {
    let data = req.body
    let content = await SaveDataToSettingsFile(data , "ImamPrimaryMessage.json")
    res.send(content)
}

const PrimaryMessageReader = async (req,res) => {
    let data = req.body


    let content = await ReadSettings(data , "ImamPrimaryMessage.json")

    content = JSON.parse(content)
    
    let messageText  = content["Message"]
    let messageDate  = content["Date"]


    const [year, month, day] = messageDate.split('-').map(Number);

    // Validate parsed values
    if (
      isNaN(year) || year < 1900 || year > 2100 ||
      isNaN(month) || month < 1 || month > 12 ||
      isNaN(day) || day < 1 || day > 31
    ) {
      return res.status(400).json({ error: "Invalid date values." });
    }
    

    let isToday = new Date(messageDate).toDateString() === new Date().toDateString()
 

    let resp = {
        Message : messageText,
        isToday
    }

    res.send(resp)
} 




module.exports = {PrimaryMessageWriter,  PrimaryMessageReader}