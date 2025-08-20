
var fs = require('fs');
const { dirname } = require('path');



const ReadSettings = async (data, filename) => {

    let path = process.cwd() + "/Settings/" + filename
    let settings = fs.readFileSync(path, 'utf8')
    return settings

}


module.exports = ReadSettings
