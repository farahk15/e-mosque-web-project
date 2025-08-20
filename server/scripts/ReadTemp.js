const fs = require('fs');
const { exec } = require('child_process');

const ReadTemp = (req,res) => {
    
const scriptPath = '/var/www/pi/temper/temper.py';
fs.access(scriptPath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error('Script file does not exist:', err);
    return;
  }
  exec(`sudo python ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing script:', error);
      return;
    }
    console.log('Script output:', stdout);
    console.error('Script errors:', stderr);
    res.send(stdout);
  });
});                       

}

module.exports = ReadTemp