const fs = require('fs');
const { exec } = require('child_process');

const KillChrome = () => {

const scriptPath = '/var/www/pi/kill_chrome.sh';
fs.access(scriptPath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error('Script file does not exist:', err);
    return;
  }
  exec(`bash ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing script:', error);
      return;
    }
    console.log('Script output:', stdout);
    console.error('Script errors:', stderr);
  });
});                       

}

module.exports = KillChrome