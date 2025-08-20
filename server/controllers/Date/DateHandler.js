const { exec } = require('child_process');
const KillChrome = require('../../scripts/KillBrowser');

function SystemTimeHandler(req, res) {
  try {
    const { year, month, day, hours, minutes, seconds } = req.body;
    const parsedYear = parseInt(year, 10);
    const parsedMonth = parseInt(month, 10);
    const parsedDay = parseInt(day, 10);
    const parsedHours = parseInt(hours, 10);
    const parsedMinutes = parseInt(minutes, 10);
    const parsedSeconds = parseInt(seconds, 10);
    
    if (
      isNaN(parsedYear) || parsedYear < 1900 || parsedYear > 2100 ||
      isNaN(parsedMonth) || parsedMonth < 1 || parsedMonth > 12 ||
      isNaN(parsedDay) || parsedDay < 1 || parsedDay > 31 ||
      isNaN(parsedHours) || parsedHours < 0 || parsedHours > 23 ||
      isNaN(parsedMinutes) || parsedMinutes < 0 || parsedMinutes > 59 ||
      isNaN(parsedSeconds) || parsedSeconds < 0 || parsedSeconds > 59
    ) {
      return res.status(400).json({ error: "Invalid date and time values." });
    }

    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    exec(`sudo date --set="${formattedTime}"`, (error, stdout, stderr) => {
      if (error) {
        console.error('Error setting system time:', error.message);
        return res.status(400).json({ error: "Failed to change date" });;
      }
      console.log('System time set successfully.');
      KillChrome();
      res.send("done");
    });
  } catch (error) {
    return res.status(400).json({ error: "Failed to change date" });
  }
}

module.exports = SystemTimeHandler

// Example usage:

//const timeToSet = "2023-07-29 16:28:00";
//setSystemTime(timeToSet);