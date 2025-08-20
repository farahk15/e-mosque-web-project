//@ts-ignore
import writeToErrorFile from '../scripts/WriteToErrorFile';
export class Language {

    SelectedLanguage: string;
    constructor(selectedlanguage: string) {
        this.SelectedLanguage = selectedlanguage;
    }

    /**
     * Validates the JSON object based on the specified version.
     *
     * @param {string | object} jsonString - The JSON object to validate.
     */
    static CreateFromJson(jsonString: string | object): Language | null {
        try {
            const parsedJson = typeof jsonString === 'string' ? JSON.parse(jsonString) : jsonString;



            if (this.ValidateJson(parsedJson)) {
                return new Language(parsedJson.SelectedLanguage);
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
            writeToErrorFile(`error in Language.CreateFromJson ${error} ${JSON.stringify(jsonString)}`);
            return null;
        }
    }

    /**
    * Validates the JSON object based on the specified version.
    *
    * @param {any} parsedJson - The JSON object to validate.
    * @return {boolean} Returns true if the JSON object is valid for the specified version, otherwise false.
    */
    static ValidateJson(parsedJson: any): boolean {
        try {
            if ((parsedJson.SelectedLanguage !== 'ar' && parsedJson.SelectedLanguage !== 'en') || parsedJson.SelectedLanguage == null || parsedJson.SelectedLanguage == undefined) {
                return false;
            }
            return true;


        }
        catch (error) {
            console.warn(error);
            writeToErrorFile(`error in Language.ValidateJson ${error} ${JSON.stringify(parsedJson)}`);
            return false;
        }
    }

    /**
    * Validates the SelectedLanguage of the Language object.
    * @returns {boolean} True if the SelectedLanaguage is valid, false otherwise.
    */
    validateLanguage(): boolean {
        return (this.SelectedLanguage !== null && this.SelectedLanguage !== undefined);
    }



    toJSON() {

        return {
            "SelectedLanguage": this.SelectedLanguage
        }


    }


}