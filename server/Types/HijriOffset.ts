//@ts-ignore
import writeToErrorFile from '../scripts/WriteToErrorFile';
class HijriOffset {
    HijriCorrection: number;
    constructor(offset: number) {
        this.HijriCorrection = offset;
    }

    /**
    * Creates a new HijriOffset object from a JSON string.
    * @param {string | object} jsonString - The JSON string to parse.
    * @returns {HijriOffset | null} The created HijriOffset object, or null if creation failed.
    */
    static CreateFromJson(jsonString: string | object): HijriOffset | null {
        try {
            const parsedJson = typeof jsonString === 'string' ? JSON.parse(jsonString) : jsonString;
            if (HijriOffset.ValidateJson(parsedJson)) {                
                return new HijriOffset(parsedJson.HijriCorrection);
            }
            return null;
        }
        catch (error) {
            console.log(error);
            writeToErrorFile(`error in HijriOffset.CreateFromJson ${error} ${JSON.stringify(jsonString)}`);
            return null;
        }
    }
    

    /**
     * Validates a JSON object to check if it can be used to create a HijriOffset object.
     * @param {any} parsedJson - The JSON object to validate.
     * @returns {boolean} True if the JSON object is valid, false otherwise.
     */
    static ValidateJson(parsedJson: any): boolean {
        try {
                if (parsedJson.HijriCorrection == undefined || isNaN(parsedJson.HijriCorrection)) {
                    return false;
                }
                else {
                    return true;
                }
            }
        catch (error) {
            console.warn(error);
            writeToErrorFile(`error in HijriOffset.ValidateJson ${error} ${JSON.stringify(parsedJson)}`);
            return false;
        }
    }

    /**
     * Validates the offset of the HijriOffset object.
     * @returns {boolean} True if the offset is valid, false otherwise.
     */
    validateOffset(): boolean {
        return (this.HijriCorrection !== null && this.HijriCorrection !== undefined && !isNaN(this.HijriCorrection) && typeof this.HijriCorrection === 'number');
    }

    /**
     * Converts the HijriOffset object to a JSON object.
     * @returns {any} The JSON representation of the HijriOffset object.
     */
    toJSON(): any {
            return {
                HijriCorrection: this.HijriCorrection
            }
    }
}

module.exports = { HijriOffset }