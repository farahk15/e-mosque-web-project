const fs = require('fs').promises;
const path = require('path');
const {ensureSettingsDirectory} = require('../../scripts/CreateSettingDir');
const KillChrome = require('../../scripts/KillBrowser');

const FactoryReset = async (req, res) => {
    try {
        let result = await deleteSettingsDirectory();
        if (result) {
            ensureSettingsDirectory();
            res.status(200).send("Settings directory deleted successfully");
        }
        else {
            res.status(500).send("Failed to delete settings directory");
        }
        KillChrome();   
    }
    catch (error) {
        console.warn(error);
        res.status(500).send(error);
    }
}


async function deleteSettingsDirectory() {
    const settingsDir = path.join(process.cwd(), 'Settings');
    try {
        const stats = await fs.stat(settingsDir);
        if (stats.isDirectory()) {
            await fs.rm(settingsDir, { recursive: true, force: true });
        }
        return true;
    } catch (error) {
        console.error('Error deleting Settings directory:', error.message);
        return false;
    }
}

module.exports = { FactoryReset }