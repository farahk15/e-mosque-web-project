import axios from "axios";
import { useState, useEffect } from "react";
import { userstyle } from "./UserStyles/userstyles.js";

const useApiData = () => {
  const [prayers, setPrayers] = useState({});
  const [generalSettings, setGeneralSettings] = useState({});
  const [hijriOffset, setHijriOffset] = useState({});
  const [iqamaAndAzkar, setIqamaAndAzkar] = useState({});
  const [language, setLanguage] = useState({});
  const [prayerOffset, setPrayerOffset] = useState({});
  const [regionData, setRegionData] = useState({});
  const [userStyles, setUserStyles] = useState({});
  const [count, setCount] = useState(0);

  const baseUrl = "http://localhost:5000/api";

  const fetchPrayers = () => {
    fetch(baseUrl + "/prayers/")
      .then((response) => response.json())
      .then((data) => setPrayers(data))
      .catch((error) => console.error(error));
  };

  const fetchGeneralSettings = () => {
    fetch(baseUrl + "/settings/general")
      .then((response) => response.json())
      .then((data) => setGeneralSettings(data))
      .catch((error) => console.error(error));
  };

  const fetchHijriOffset = () => {
    fetch(baseUrl + "/settings/hijriOffset")
      .then((response) => response.json())
      .then((data) => setHijriOffset(data))
      .catch((error) => console.error(error));
  };

  const fetchIqamaAndAzkar = () => {
    fetch(baseUrl + "/settings/IqamaAndAzkar")
      .then((response) => response.json())
      .then((data) => setIqamaAndAzkar(data))
      .catch((error) => console.error(error));
  };

  const fetchLanguage = () => {
    fetch(baseUrl + "/settings/Language")
      .then((response) => response.json())
      .then((data) => setLanguage(data))
      .catch((error) => console.error(error));
  };

  const fetchPrayerOffset = () => {
    fetch(baseUrl + "/settings/PrayerOffset")
      .then((response) => response.json())
      .then((data) => setPrayerOffset(data))
      .catch((error) => console.error(error));
  };

  const fetchRegionData = () => {
    fetch(baseUrl + "/settings/RegionData")
      .then((response) => response.json())
      .then((data) => setRegionData(data))
      .catch((error) => console.error(error));
  };

  const fetchUserStyles = () => {
    fetch(baseUrl + "/settings/UserStyles")
      .then((response) => response.json())
      .then((data) => setUserStyles(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchPrayers();
    fetchGeneralSettings();
    fetchHijriOffset();
    fetchPrayerOffset();
    fetchLanguage();
    fetchRegionData();
    fetchUserStyles();
    fetchIqamaAndAzkar();
  }, []);

  const apiData = {
    prayers,
    generalSettings,
    hijriOffset,
    iqamaAndAzkar,
    language,
    prayerOffset,
    regionData,
    userStyles,
    //   fetchPrayers,
    //   fetchGeneralSettings,
    //   fetchHijriOffset,
    //   fetchPrayerOffset,
    //   fetchLanguage,
    //   fetchRegionData,
    //   fetchUserStyles,
    //   fetchIqamaAndAzkar,
  };

  return apiData;
};

export default useApiData;
