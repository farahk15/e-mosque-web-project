const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const {ensureSettingsDirectory} = require('./scripts/CreateSettingDir')

try {
////////////// Setting Up Routes   /////////////////

const prayersRouter = require("./routes/Prayers")
const hadeethRouter = require("./routes/Hadeeth")
const imamMessagesRouter = require("./routes/PrimaryMessages")
const imamShortMessagesRouter = require("./routes/SecondaryMessages")
const settingsRouter = require("./routes/Settings")
const tempRouter = require("./routes/Temperature")
const dateRouter = require("./routes/DateTime");
const Reboot = require('./scripts/Reboot');
const Shutdown = require('./scripts/Shutdown');
const ReadTemp = require('./scripts/ReadTemp');

app.use('/api/prayers' , prayersRouter) 
app.use('/api/temp' , tempRouter)
app.use('/api/Date' , dateRouter)
app.use('/api/hadeeth' , hadeethRouter)
app.use('/api/messages' , imamMessagesRouter)
app.use('/api/shortmessages' , imamShortMessagesRouter)
app.use('/api/settings' , settingsRouter)
app.get("/api/reboot" , Reboot)
app.get("/api/shutdown" , Shutdown)
app.get("/api/temp" , ReadTemp)

app.get("/connect/" , (req,res) => { // This is importnant for the mobile app, "v2" to be checked on the mobile app
  res.send("v2")
})
ensureSettingsDirectory()

///////////////////////////////////////////////////////

// Serving React routes here 
app.use(express.static('server/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
}catch(err) {
  console.log("ERROR:",err )
}



app.listen(5000 , () => {
    console.log("Server is up on : http://localhost:5000 ")
})

const fs = require('fs');

function writeToErrorFile(errorMessage) {
  fs.appendFile('errors.txt', errorMessage, (err) => {
    if (err) {
      console.error('Error writing to errors.txt:', err);
    }
  });
}

process.on("uncaughtException" , (error)=> {
  console.log("ERROR uncaughtException :",error )
  const errorMessage = `Uncaught Exception: ${error.stack}\n`;
  writeToErrorFile(errorMessage);
})

process.on("unhandledRejection" , (error)=> {
  console.log("ERROR unhandledRejection :",error )
  const errorMessage = `Uncaught unhandledRejection : ${error.stack}\n`;
  writeToErrorFile(errorMessage);
})

