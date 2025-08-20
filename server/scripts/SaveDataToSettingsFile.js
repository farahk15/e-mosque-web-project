var fs = require('fs');
const { dirname } = require('path');
const KillChrome = require('./KillBrowser');



const SaveDataToSettingsFile = async (data, filename, overwriteOriginal = false) => {

    let path = process.cwd() + "/Settings/" + filename

    if (overwriteOriginal) {
        fs.writeFileSync(path, data)
        var settings = data;
    }
    else {
        var settings = fs.readFileSync(path, 'utf8')
        settings = JSON.parse(settings)

        for (const key in settings) {
            if (data.hasOwnProperty(key) && data[key] !== null && data[key] !== undefined && data[key] !== "")
                settings[key] = data[key]
        }

        fs.writeFileSync(path, JSON.stringify(settings))
    }
    KillChrome()
    return settings
}


module.exports = SaveDataToSettingsFile
