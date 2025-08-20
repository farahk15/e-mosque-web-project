const SaveDataToSettingsFile = require('../../scripts/SaveDataToSettingsFile');
const ReadSettings = require('../../scripts/ReadSettings');
const { error } = require('console');
const KillChrome = require('../../scripts/KillBrowser');




const HadeethWriter = async (req, res) => {
    let data = req.body
    let content = await SaveDataToSettingsFile(data, "SelectedHadeeth.json")
    res.send(content)
}

const ReadRandomHadeeth = async () => {
    let language = await ReadSettings(data, "Language.json");
    language = JSON.parse(language);

    let hadeethDb = await ReadSettings(data, language["SelectedLanguage"] === "en" ? "HadeethDB-En.json" : "HadeethDB.json");
    hadeethDb = JSON.parse(hadeethDb);
    let rnd = Math.floor(Math.random() * hadeethDb.length);
    let hadeethText = hadeethDb[rnd]["content"];
    return {
        hadeethText: hadeethText,
        isToday: true
    }
}
const HadeethReader = async (req, res) => {
    try {
        let data = req.body;
        let hadeethText;
        let hadeethDate;
        let content = await ReadSettings(data, "SelectedHadeeth.json");

        if (content !== null) {
            content = JSON.parse(content);
            hadeethDate = new Date(content["Date"]);
            let currentDate = new Date();

            if (hadeethDate <= currentDate) {
                let language = await ReadSettings(data, "Language.json");
                language = JSON.parse(language);

                let hadeethDb = await ReadSettings(data, language["SelectedLanguage"] === "en" ? "HadeethDB-En.json" : "HadeethDB.json");
                hadeethDb = JSON.parse(hadeethDb);
                let rnd = Math.floor(Math.random() * hadeethDb.length);
                hadeethText = hadeethDb[rnd]["content"];
            } else {
                hadeethText = content["Hadeeth"];
            }
        } else {
            throw "Error reading JSON data";
        }

        let resp = {
            hadeeth: hadeethText,
            isToday: hadeethDate ? hadeethDate.getTime() > Date.now() : false
        };
        console.log(resp);

        res.send(resp);
    } catch (error) {
        const response = await ReadRandomHadeeth();
        res.send(response);
        KillChrome();
    }
};





module.exports = { HadeethWriter, HadeethReader }