
var fs = require('fs');
const { dirname } = require('path');



const  ReadDefaultSettings = async (data , filename ) => {
   
    const appDir = dirname(require.main.filename);
    let path = appDir + "/DefaultSettings/" + filename
    let settings =fs.readFileSync(path, 'utf8')
    return settings
 
}


module.exports = ReadDefaultSettings
