//@ts-ignore
import writeToErrorFile from '../scripts/WriteToErrorFile';
class GeneralSettings {
    fixmessage: boolean;
    appQREnable: boolean;
    internalTempEnable: boolean;
    playAzan: boolean;
    showBahbishMessage: boolean;
    displayAdAfterPrayer: boolean;
    DST: boolean;
    showSilentMessage: boolean;

    constructor(
        fixMessage: boolean,
        appQREnable: boolean,
        internalTempEnable: boolean,
        playAzan: boolean,
        showBahbishMessage: boolean,
        displayAdAfterPrayer: boolean,
        DST: boolean,
        showSilentMessage: boolean
    ) {
        this.fixmessage = fixMessage;
        this.appQREnable = appQREnable;
        this.internalTempEnable = internalTempEnable;
        this.playAzan = playAzan;
        this.showBahbishMessage = showBahbishMessage;
        this.displayAdAfterPrayer = displayAdAfterPrayer;
        this.DST = DST;
        this.showSilentMessage = showSilentMessage;
    }

    static CreateFromJson(jsonString: string | object): GeneralSettings | null {
        try {
            const parsedJson = typeof jsonString === 'string' ? JSON.parse(jsonString) : jsonString;
            if (this.ValidateJson(parsedJson)) {
                return new GeneralSettings(
                    parsedJson.fixmessage,
                    parsedJson.appQREnable,
                    parsedJson.internalTempEnable,
                    parsedJson.playAzan,
                    parsedJson.showBahbishMessage,
                    parsedJson.displayAdAfterPrayer,
                    parsedJson.DST,
                    parsedJson.showSilentMessage !== undefined ? parsedJson.showSilentMessage : false
                );
            } else {
                return null;
            }
        } catch (error) {
            console.error(error);
            writeToErrorFile(`error in GeneralSettings.ValidateJson ${error} ${JSON.stringify(jsonString)}`);
            return null;
        }
    }

    static ValidateJson(parsedJson: any): boolean {
        try {
            if (
                parsedJson.fixmessage == undefined ||
                parsedJson.appQREnable == undefined ||
                parsedJson.internalTempEnable == undefined ||
                parsedJson.playAzan == undefined ||
                parsedJson.showBahbishMessage == undefined ||
                parsedJson.displayAdAfterPrayer == undefined ||
                parsedJson.DST == undefined ||
                parsedJson.showSilentMessage == undefined
            ) {
                return false;
            }

            // Check if each property is of type boolean
            for (const key in parsedJson) {
                if (typeof parsedJson[key] !== 'boolean') {
                    return false;
                }
            }

            return true;

            return true;
        } catch (error) {
            console.warn(error);
            writeToErrorFile(`error in GeneralSettings.ValidateJson ${error} ${JSON.stringify(parsedJson)}`);
            return false;
        }
    }

    toJSON() {
        return {
            fixmessage: this.fixmessage,
            appQREnable: this.appQREnable,
            internalTempEnable: this.internalTempEnable,
            playAzan: this.playAzan,
            showBahbishMessage: this.showBahbishMessage,
            displayAdAfterPrayer: this.displayAdAfterPrayer,
            DST: this.DST,
            showSilentMessage: this.showSilentMessage
        };
    }
}

module.exports = { GeneralSettings };