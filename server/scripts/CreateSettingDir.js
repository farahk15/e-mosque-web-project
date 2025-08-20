const fs = require('fs');
const path = require('path');

function ensureSettingsDirectory() {
    const settingsDir = path.join(process.cwd(), 'Settings');
    const appDir = path.dirname(require.main.filename);
    const defaultSettingsDir = path.join(appDir, 'DefaultSettings');
    try {
        if (!fs.existsSync(settingsDir)) {
            fs.mkdirSync(settingsDir);
        }
        const defaultFiles = fs.readdirSync(defaultSettingsDir);
        for (const file of defaultFiles) {
            const defaultFilePath = path.join(defaultSettingsDir, file);
            const settingsFilePath = path.join(settingsDir, file);
            try {
                fs.statSync(settingsFilePath);
            } catch (error) {
                fs.copyFileSync(defaultFilePath, settingsFilePath);
                console.log(`Copied ${file} to Settings folder.`);
            }
        }
        console.log('Settings directory is up to date.');
    } catch (error) {
        console.error('Error ensuring Settings directory:', error.message);
    }
}

module.exports = { ensureSettingsDirectory };