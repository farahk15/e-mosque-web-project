//@ts-ignore
import writeToErrorFile from '../scripts/WriteToErrorFile';
class UserStyles {

    TimeColor: string;
    DateColor: string;
    NextPrayerColor: string;
    PrayersNamesColor: string;
    PrayersTimesColor: string;
    IqamaTimeColor: string;
    TempreatureColor: string;
    AzkarColor: string;
    ImamPrimaryMessagesColor: string;
    HadeethColor: string;


    constructor( timeColor: string, dateColor: string, nextPrayerColor: string,
        prayersNamesColor: string, prayersTimesColor: string, iqamaTimeColor: string,
        tempreatureColor: string, azkarColor: string, imamPrimaryMessagesColor: string,
        hadeethColor: string) {


        this.TimeColor = timeColor;
        this.DateColor = dateColor;
        this.NextPrayerColor = nextPrayerColor;
        this.PrayersNamesColor = prayersNamesColor;
        this.PrayersTimesColor = prayersTimesColor;
        this.IqamaTimeColor = iqamaTimeColor;
        this.TempreatureColor = tempreatureColor;
        this.AzkarColor = azkarColor;
        this.ImamPrimaryMessagesColor = imamPrimaryMessagesColor;
        this.HadeethColor = hadeethColor;
    }

    static CreateFromJson(jsonString: string | object): UserStyles | null {
        try {
            const parsedJson = typeof jsonString === 'string' ? JSON.parse(jsonString) : jsonString;
            if (UserStyles.ValidateJson(parsedJson)) {
                return new UserStyles(parsedJson.TimeColor, parsedJson.DateColor, parsedJson.NextPrayerColor,
                    parsedJson.PrayersNamesColor, parsedJson.PrayersTimesColor, parsedJson.IqamaTimeColor,
                    parsedJson.TempreatureColor, parsedJson.AzkarColor, parsedJson.ImamPrimaryMessagesColor,
                    parsedJson.HadeethColor);
            }
            else {
                return null;
            }
        }
        catch (error) {
            console.log(error);
            writeToErrorFile(`error in UserStyles.CreateFromJson ${error} ${JSON.stringify(jsonString)}`);
            return null;
        }
    }

    static ValidateJson(parsedJson: any): boolean {
        try {
            

            if (parsedJson.TimeColor == undefined || parsedJson.DateColor == undefined || parsedJson.NextPrayerColor == undefined
                || parsedJson.PrayersNamesColor == undefined || parsedJson.PrayersTimesColor == undefined
                || parsedJson.IqamaTimeColor == undefined || parsedJson.TempreatureColor == undefined
                || parsedJson.AzkarColor == undefined || parsedJson.ImamPrimaryMessagesColor == undefined
                || parsedJson.HadeethColor == undefined) {
                return false;
                }

            return true;
        }
        catch (error) {
            console.log(error);
            writeToErrorFile(`error in UserStyles.ValidateJson ${error} ${JSON.stringify(parsedJson)}`);
            return false;
        }
    }

    validateColors(): boolean {
        const colorProperties = [this.TimeColor, this.DateColor, this.NextPrayerColor, this.PrayersNamesColor, this.PrayersTimesColor, this.IqamaTimeColor, this.TempreatureColor, this.AzkarColor, this.ImamPrimaryMessagesColor, this.HadeethColor];
        const colorRegex = /^#([0-9A-F]{6}|[0-9A-F]{8})$/i;
        return colorProperties.every(color => colorRegex.test(color));
    }

    toJSON(): object {
       
       
            return {
                TimeColor: this.TimeColor,
                DateColor: this.DateColor,
                NextPrayerColor: this.NextPrayerColor,
                PrayersNamesColor: this.PrayersNamesColor,
                PrayersTimesColor: this.PrayersTimesColor,
                IqamaTimeColor: this.IqamaTimeColor,
                TempreatureColor: this.TempreatureColor,
                AzkarColor: this.AzkarColor,
                ImamPrimaryMessagesColor: this.ImamPrimaryMessagesColor,
                HadeethColor: this.HadeethColor
            }
        }
       
    


}

module.exports = {UserStyles}