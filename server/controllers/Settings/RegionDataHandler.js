const SaveDataToSettingsFile = require('../../scripts/SaveDataToSettingsFile');
const ReadSettings = require('../../scripts/ReadSettings');
const { exec } = require('child_process');


function getCountriesAndCities(data) {
  const result = {};

  for (const country in data) {
    if (data.hasOwnProperty(country)) {
      const cities = data[country].citiesNames;
      result[country] = cities;
    }
  }

  return result;
}


const RegionDataWriter = async (req, res) => {
  try {
    let data = req.body
    let countriesContent = await ReadSettings(data, "cities.json")
    countriesContent = await JSON.parse(countriesContent)

    let prayersConstans = await ReadSettings(data, "CalculationMethods.json")
    prayersConstans = await JSON.parse(prayersConstans)

    let currentRegionData = await ReadSettings(data, "RegionData.json")
    currentRegionData = await JSON.parse(currentRegionData)
    let oldTimeZone = currentRegionData['timeZone'];
    let newTimeZone = countriesContent[data["country"]][data["city"]]['timeZone']
    let timeDifference = newTimeZone - oldTimeZone;

    let timeDifferenceInSeconds = timeDifference * 3600;


    try {
      const adjustTimeCommand = `sudo date -u --set=@$(($(date +%s) + ${timeDifferenceInSeconds}))`;
      await exec(adjustTimeCommand);
    } catch (error) {
      console.log(error)
      console.log("WE ARE NOT IN LINUX")
    }


    let newData = {
      country: data["country"],
      city: data["city"],
      calculationMethod : data["calculationMethod"],
      asrJuristic: data["asrJuristic"],
      ...countriesContent[data["country"]][data["city"]],
    }

    let content = await SaveDataToSettingsFile(newData, "RegionData.json")
    res.send(content)
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error", error)
  }
}

const RegionDataReader = async (req, res) => {
  let data = req.body
  let countriesContent = await ReadSettings(data, "cities.json")
  countriesContent = await JSON.parse(countriesContent)
  let resp = getCountriesAndCities(countriesContent)

  let prayersConstans = await ReadSettings(data, "CalculationMethods.json")
  prayersConstans = await JSON.parse(prayersConstans)
  var response = { countries: resp, constants: prayersConstans };

  try {
    let currentRegionData = await ReadSettings(null, "RegionData.json")
    currentRegionData = await JSON.parse(currentRegionData)
    response["currentRegionData"] = currentRegionData
  } catch (error) {
    console.log(error, "no selected data");
  }
  res.send(response)
}

module.exports = { RegionDataReader, RegionDataWriter }