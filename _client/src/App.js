import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PrayerScreen } from "./Screens/Prayer/PrayerScreen";
import { useContext, useEffect } from "react";
import { ApiContext } from "./context/APIContext";
import { ContentContext } from "./context/ContentContext";

function App() {
  const {
    prayers,
    generalSettings,
    hijriOffset,
    iqamaAndAzkar,
    language,
    prayerOffset,
    regionData,
    userStyles,
    hadeeth,
    messages,
    shortmessages,
 
  } = useContext(ApiContext);
  
  const { hadeeth : hadeethText , isToday:isTodayHadeeth} = hadeeth
  const {Message:priMessage , isToday:isTodayMessage} = messages;
  const {Message:shortMessage , isToday:isTodayShortMessage , isIhdaa} = shortmessages

  const {
    setIsSelctedHadeeth,
    setSelectedHadeeth,
    setIsPrimaryMessage,
    setPrimaryMessage,
    setIsShortMessage,
    setIsIhdaa,
    setShortMessage,

  } = useContext(ContentContext);
    
  console.log(hadeethText)
  useEffect ( ()=>{
    if(isTodayHadeeth)
    {
      setSelectedHadeeth(hadeethText)
      setIsSelctedHadeeth(true)
    }
    else
    {
      setSelectedHadeeth(hadeethText)
      setIsSelctedHadeeth(false)
    }

    if(isTodayMessage)
    {
      setIsPrimaryMessage(true)
      setPrimaryMessage(priMessage)

    }

    if(isTodayShortMessage || isIhdaa)
    {
      setIsShortMessage(true)
      setShortMessage(shortMessage)
      setIsIhdaa(isIhdaa);
    }

  },[isTodayHadeeth , isTodayMessage])
  
  
  return (
    <div className="App">

      { Object.keys(prayers).length === 0 ? null  :
      <Routes>
        <Route path="/" element={<PrayerScreen />} />
      </Routes>
    }    
    </div>
  );
}

export default App;
