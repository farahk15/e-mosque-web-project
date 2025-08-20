import { createContext, useEffect, useState } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState({
    prayers: {},
    generalSettings: {},
    hijriOffset: {},
    iqamaAndAzkar: {},
    language: {},
    prayerOffset: {},
    regionData: {},
    userStyles: {},
    hadeeth: {},
    messages: {},
    shortmessages: {},
    
  });
  

  const baseUrl = "http://localhost:5000/api";

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const endpoints = [
        { endpoint: "/prayers/", key: "prayers" },
        { endpoint: "/settings/general", key: "generalSettings" },
        { endpoint: "/settings/hijriOffset", key: "hijriOffset" },
        { endpoint: "/settings/IqamaAndAzkar", key: "iqamaAndAzkar" },
        { endpoint: "/settings/Language", key: "language" },
        { endpoint: "/settings/PrayerOffset", key: "prayerOffset" },
        { endpoint: "/settings/RegionData", key: "regionData" },
        { endpoint: "/settings/UserStyles", key: "userStyles" },
        { endpoint: "/hadeeth", key: "hadeeth" },
        { endpoint: "/messages", key: "messages" },
        { endpoint: "/shortmessages", key: "shortmessages" },        
      ];

      try {
        const promises = endpoints.map(({ endpoint, key }) =>
          fetch(baseUrl + endpoint).then((response) => response.json())
        );

        const results = await Promise.all(promises);

        const updatedData = endpoints.reduce((acc, { key }, index) => {
          acc[key] = results[index];
          return acc;
        }, {});

        setApiData(updatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log("CALLING APIS")
    fetchDataFromApi();
  }, []);

  return (
    <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
