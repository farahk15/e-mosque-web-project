const SystemTimeHandler = require("./Date/DateHandler");
const { HadeethReader  , HadeethWriter} = require("./Hadeeth/HadeethHandler");
const { PrayersHandler } = require("./Prayers/PrayersTimesHandler");
const { PrimaryMessageWriter,  PrimaryMessageReader } = require("./PrimaryMessages/PrimaryMessageHandler");
const {SecondaryMessageWriter,  SecondaryMessageReader}= require("./SecondaryMessages/SecondaryMessageHandler");
const { GeneralSettingsReader, GeneralSettingsWriter } = require("./Settings/GeneralSettingsHandler");
const { HijriDaysOffsetReader, HijriDaysOffsetWriter } = require("./Settings/HijriDaysOffsetHandler");
const {IqamaAndAzkarReader,  IqamaAndAzkarWriter} = require("./Settings/IqamaAndAzkarHandler")
const {LanguageWriter,  LanguageReader} = require("./Settings/LanguageHandler")
const {PrayerOffsetWriter,  PrayerOffsetReader} = require("./Settings/PrayerOffsetHandler")
const {RegionDataReader,  RegionDataWriter} = require("./Settings/RegionDataHandler");
const { UserStylesReader , UserStylesWriter } = require("./Settings/UserStylesHandler");
const {GetErrors} = require("./Settings/ReadErrorsHandler");const { SearchHadeeth } = require('./Hadeeth/SearchHadeeth');

const { FactoryReset } = require('./Settings/FactoryReset');
module.exports = {
    PrayersHandler,
    SystemTimeHandler,
    HadeethWriter,  HadeethReader,
    PrimaryMessageWriter,  PrimaryMessageReader,
    GeneralSettingsReader, GeneralSettingsWriter ,
    HijriDaysOffsetReader, HijriDaysOffsetWriter ,
    IqamaAndAzkarReader,  IqamaAndAzkarWriter ,
    LanguageReader , LanguageWriter,
    PrayerOffsetReader , PrayerOffsetWriter,
    RegionDataReader,  RegionDataWriter ,
    UserStylesReader , UserStylesWriter,
    SecondaryMessageWriter,  SecondaryMessageReader,
    GetErrors,
    SearchHadeeth
    
    ,FactoryReset
}