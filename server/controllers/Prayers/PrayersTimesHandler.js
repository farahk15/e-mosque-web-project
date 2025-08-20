const ReadSettings = require('../../scripts/ReadSettings');


const PrayersHandler = async (req,res) => {

    const PrayersClass = require('../../scripts/CalculatePrayerTimes')
    let data = {}
    const settings = await JSON.parse( await ReadSettings(data,'RegionData.json'));
    const prayersOffset = await JSON.parse(await ReadSettings(data,'PrayerOffset.json'));
    const generalSettings = await JSON.parse(await ReadSettings(data,'GeneralSettings.json'));


    var lat = settings.latitude;
    var long = settings.longitude;
    var elevation = settings.elevation;
    var pressure = settings.CITY_pressure;
    var temperature = settings.CITY_temperature;
    var ConsiderMyLocationToEastOfMyDefultLocation = settings.CITY_ConsiderMyLocationToEastOfMyDefultLocation;
    var PrayMethods =  settings.calculationMethod;
    var asrJuristic =  settings.asrJuristic;
    var timeZone = settings.timeZone;


    timeZone += generalSettings['DST'] === true ? 1 : 0;
    let offsetMilliseconds = timeZone * 60 * 60 * 1000;
    offsetMilliseconds = -1 * offsetMilliseconds
    // Get current UTC time
    const utcNow = new Date();

    // Calculate local time using the offset
    const localTime = new Date(utcNow.getTime() + offsetMilliseconds);
    d = localTime
    
    // var d = new Date()
    // var n = d.getTimezoneOffset();
    // console.log(n)
    // n = -1 * n;
    // var timeZone = n / 60;     

    
    d = [d.getFullYear(), d.getMonth()+ 1, d.getDate()];
    prayTimes =new PrayersClass(d[2],d[1],d[0]);
    let fajerAngle = prayTimes.CalculationMethods[PrayMethods]["params"]["fajr"];
    let ishaAngle = prayTimes.CalculationMethods[PrayMethods]["params"]["isha"];
    prayTimes.setMethod(fajerAngle,ishaAngle);
    prayTimes.setAsrJuristicMethod(asrJuristic); 
    prayTimes.setLocationSettings(lat,long,elevation,timeZone);
    prayTimes.setRefractionSetting(pressure,temperature );
    prayTimes.ForFajerAndShrouqeConsiderMyLocationToEastOfMyDefultLocation( ConsiderMyLocationToEastOfMyDefultLocation);    
    prayTimes.setOffset(prayersOffset)
    var times = prayTimes.getTimes( '12h','minutes');
	prayerTime= prayTimes.getTimes( '24h','minutes');   
    
    res.send(prayerTime)

}

module.exports = {PrayersHandler}