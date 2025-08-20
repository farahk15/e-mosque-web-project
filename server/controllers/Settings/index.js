const { GeneralSettingsReader, GeneralSettingsWriter } = require("./GeneralSettingsHandler");
const { HijriDaysOffsetReader, HijriDaysOffsetWriter } = require("./HijriDaysOffsetHandler");
const {IqamaAndAzkarReader,  IqamaAndAzkarWriter} = require("./IqamaAndAzkarHandler")
const {LanguageWriter,  LanguageReader} = require("./LanguageHandler")
const {PrayerOffsetWriter,  PrayerOffsetReader} = require("./PrayerOffsetHandler")
const {RegionDataReader,  RegionDataWriter} = require("./RegionDataHandler");
const { UserStylesReader , UserStylesWriter } = require("./UserStylesHandler");

module.exports = {
    GeneralSettingsReader, GeneralSettingsWriter ,
    HijriDaysOffsetReader, HijriDaysOffsetWriter ,
    IqamaAndAzkarReader,  IqamaAndAzkarWriter ,
    LanguageReader , LanguageWriter,
    PrayerOffsetReader , PrayerOffsetWriter,
    RegionDataReader,  RegionDataWriter ,
    UserStylesReader , UserStylesWriter,
}