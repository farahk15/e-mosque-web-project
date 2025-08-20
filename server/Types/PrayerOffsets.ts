//@ts-ignore
import writeToErrorFile from '../scripts/WriteToErrorFile';
class PrayerOffsets {
    FajirPrayerOffset: number;
    DhurPrayerOffset: number;
    AsrPrayerOffset: number;
    MaghribPrayerOffset: number;
    IshaPrayerOffset: number;


    constructor(fajirPrayerOffset: number, dhurPrayerOffset: number, asrPrayerOffset: number, maghribPrayerOffset: number, ishaPrayerOffset: number) {
        
        this.FajirPrayerOffset = fajirPrayerOffset;
        this.DhurPrayerOffset = dhurPrayerOffset;
        this.AsrPrayerOffset = asrPrayerOffset;
        this.MaghribPrayerOffset = maghribPrayerOffset;
        this.IshaPrayerOffset = ishaPrayerOffset;
    }

    /**
     * Creates a new PrayerOffsets object from a JSON string.
     *
     * @param {string | object} jsonString - The JSON string to parse.
     * @return {PrayerOffsets | null} - The created PrayerOffsets object or null if the JSON is invalid.
     */
    static CreateFromJson( jsonString: string | object): PrayerOffsets | null {
        try {
            const parsedJson = typeof jsonString === 'string' ? JSON.parse(jsonString) : jsonString;

            if (this.ValidateJson(parsedJson)) {
                return new PrayerOffsets(parsedJson.offset.fajr, parsedJson.offset.dhuhr, parsedJson.offset.asr, parsedJson.offset.maghrib, parsedJson.offset.isha);
            }
            else {
                return null;
            }
        } catch (error) {
            console.log(error);
            writeToErrorFile(`error in PrayerOffsets.CreateFromJson ${error} ${JSON.stringify(jsonString)}`);
            return null;
        }
    }
    /**
     * Validates a json object 
     *
     * @param {any} parsedJson - The JSON object to validate.
     * @return {boolean} Whether the JSON object is valid.
     */
    static ValidateJson(parsedJson: any): boolean {
        try {
            const keys = [
                'fajr',
                'dhuhr',
                'asr',
                'maghrib',
                'isha',
            ];
    
            for (const key of keys) {
                if (
                    parsedJson?.offset?.[key] === undefined || typeof parsedJson.offset[key] !== 'number') {
                    return false;
                }
            }
    
            return true;
        } catch (error) {
            console.log(error);
            writeToErrorFile(`error in PrayerOffsets.ValidateJson ${error} ${JSON.stringify(parsedJson)}`);
            return false;
        }
    }
    
    

    /**
     * Validates the prayer offsets by checking if each offset is not null, not undefined, and not NaN.
     * @return {boolean} True if all offsets are valid, false otherwise.
     */
    validateOffsets(): boolean {
        const offsets = [this.FajirPrayerOffset, this.DhurPrayerOffset, this.AsrPrayerOffset, this.MaghribPrayerOffset, this.IshaPrayerOffset];
        return offsets.every(offset => offset !== null && 
                                       offset !== undefined &&
                                       !isNaN(offset));
    }

    toJSON() { 

            return {
                "offset": {
                    fajr: this.FajirPrayerOffset,
                    dhuhr: this.DhurPrayerOffset,
                    asr: this.AsrPrayerOffset,
                    maghrib: this.MaghribPrayerOffset,
                    isha: this.IshaPrayerOffset
                }
            }
        }
    }

    

    module.exports = {PrayerOffsets}
