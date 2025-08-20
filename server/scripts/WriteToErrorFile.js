const fs = require('fs');
function writeToErrorFile(errorMessage) {
    fs.appendFile('errors.txt', errorMessage + '\n', (err) => {
      if (err) {
        console.error('Error writing to errors.txt:', err);
      }
    });
  }

module.exports = {writeToErrorFile}