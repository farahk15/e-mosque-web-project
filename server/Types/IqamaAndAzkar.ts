//@ts-ignore
import writeToErrorFile from '../scripts/WriteToErrorFile';
class IqamaAndAzkar {

    timeBetweenAzanAndIqama:{
        fajr: number;
        dhuhr: number;
        asr: number;
        maghrib: number;
        isha: number;
        jumaa: number;
    };

    timeBetweenIqamaAndPray:{
        fajr: number;
        dhuhr: number;
        asr: number;
        maghrib: number;
        isha: number;
        jumaa: number;
    };

    azkarDisplayPeriod:{
        fajr: number;
        dhuhr: number;
        asr: number;
        maghrib: number;
        isha: number;
        jumaa: number;
    };

    constructor(timeBetweenAzanAndIqama: any, timeBetweenIqamaAndPray: any, azkarDisplayPeriod: any) {
        this.timeBetweenAzanAndIqama = timeBetweenAzanAndIqama;
        this.timeBetweenIqamaAndPray = timeBetweenIqamaAndPray;
        this.azkarDisplayPeriod = azkarDisplayPeriod;
    }

    static CreateFromJson(jsonString: string | object): IqamaAndAzkar | null {
        try {
            const parsedJson = typeof jsonString === 'string' ? JSON.parse(jsonString) : jsonString;
            if (IqamaAndAzkar.ValidateJson(parsedJson)) {
                return new IqamaAndAzkar(parsedJson.timeBetweenAzanAndIqama, parsedJson.timeBetweenIqamaAndPray, parsedJson.azkarDisplayPeriod);
            }
            else {
                return null;
            }
        }
        catch (error) {
            console.log(error);
            writeToErrorFile(`error in IqamaAndAzkar.CreateFromJson ${error} ${JSON.stringify(jsonString)}`);
            return null;
        }
    }

    static IsValidValue = (value: any) => typeof value === 'number' && value >= 0 && value != undefined;

    static ValidateJson(parsedJson: any): boolean {
        try {
            
            const requiredKeys = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha', 'jumaa'];

            for (const key of requiredKeys) {
                if (!IqamaAndAzkar.IsValidValue(parsedJson.timeBetweenAzanAndIqama[key]) ||
                    !IqamaAndAzkar.IsValidValue(parsedJson.timeBetweenIqamaAndPray[key]) ||
                    !IqamaAndAzkar.IsValidValue(parsedJson.azkarDisplayPeriod[key])) {
                    return false;
                }
            }

            return true;
        }
        catch (error) {
            console.log(error);
            writeToErrorFile(`error in IqamaAndAzkar.ValidateJson ${error} ${JSON.stringify(parsedJson)}`);
            return false;
        }
    }

    validateIqamaAndAzkar(): boolean {
        try {
            const requiredKeys = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha', 'jumaa'];

            for (const key of requiredKeys) {
                if (!IqamaAndAzkar.IsValidValue((this.timeBetweenAzanAndIqama as any)[key]) ||
                    !IqamaAndAzkar.IsValidValue((this.timeBetweenIqamaAndPray as any)[key]) ||
                    !IqamaAndAzkar.IsValidValue((this.azkarDisplayPeriod as any)[key])) {
                    return false;
                }
            }
            return true;
        } catch (error) {
            writeToErrorFile(`error in IqamaAndAzkar.validateIqamaAndAzkar ${error} ${JSON.stringify(this)}`);
            return false;
        }
    }

    toJson() {
        return {
            timeBetweenAzanAndIqama: this.timeBetweenAzanAndIqama,
            timeBetweenIqamaAndPray: this.timeBetweenIqamaAndPray,
            azkarDisplayPeriod: this.azkarDisplayPeriod
        }
    }

}
module.exports = { IqamaAndAzkar }