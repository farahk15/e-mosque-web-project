const express = require('express')
const router = express.Router()
const {
    GeneralSettingsReader, GeneralSettingsWriter ,
    HijriDaysOffsetReader, HijriDaysOffsetWriter ,
    IqamaAndAzkarReader,  IqamaAndAzkarWriter ,
    LanguageReader , LanguageWriter,
    PrayerOffsetReader , PrayerOffsetWriter,
    RegionDataReader,  RegionDataWriter ,
    UserStylesReader , UserStylesWriter,
    GetErrors,
    FactoryReset
    
} = require("../controllers/index")

router.get("/general" , GeneralSettingsReader)
router.post("/general" , GeneralSettingsWriter)

router.get("/hijriOffset" , HijriDaysOffsetReader)
router.post("/hijriOffset" , HijriDaysOffsetWriter)

router.get( "/IqamaAndAzkar" , IqamaAndAzkarReader)
router.post("/IqamaAndAzkar" , IqamaAndAzkarWriter)

router.get("/Language" , LanguageReader)
router.post("/Language" , LanguageWriter)

router.get("/PrayerOffset" , PrayerOffsetReader)
router.post("/PrayerOffset" , PrayerOffsetWriter)

router.get("/RegionData" , RegionDataReader)
router.post("/RegionData" , RegionDataWriter)

router.get("/UserStyles" , UserStylesReader)
router.post("/UserStyles" , UserStylesWriter)

router.get("/GetErrors", GetErrors)

router.get("/FactoryReset", FactoryReset)
module.exports = router