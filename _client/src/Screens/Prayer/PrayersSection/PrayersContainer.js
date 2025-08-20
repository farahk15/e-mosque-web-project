import React, { useContext, useEffect, useState } from "react";

import "./PrayersContainer.css";

import Prayer from "../../../components/Prayer/Prayer";
import { ApiContext } from "../../../context/APIContext";
import { PrayerStatus } from "./PrayersMonitor";
import { ContentContext } from "../../../context/ContentContext";

function getIqamaElements(txt, lang , styleOBJ) {
  if (lang === "english")
    return (
      <div style={styleOBJ} className={"prayerEl IqamaBox Iqama  "}>
        <span className="name">{"IQAMA"}</span>
        <span className="time">{txt}</span>
      </div>
    );
  else
    return (
      <div style={styleOBJ} className={"prayerEl IqamaBox Iqama  "}>
        <span className="time">{txt}</span>
        <span className="name">{"الاقامة"}</span>
      </div>
    );
}

export const PrayersContainer = ({counter , counter5 , language}) => {

  const { prayers: prayersData, iqamaAndAzkar ,userStyles: stylesData } = useContext(ApiContext);
  const {
    setIsHidden,
    setIsAzkarTime, 
    setIsBigIqama,
    //Hamzah:    
    setIsShowSilentMessage,
  } = useContext(ContentContext);
 
  
   
  const [shouldCalculate , setShouldCalculate] = useState(true);
  const [IqamaElement, setIsIqamaElement] = useState();

  const [prayerStatus , setPrayerStatus] = useState({
    prayerIndex: -1,
    isIqamaStartTime: false,
    stopSwitching: false,
    hideContent: false,
    isPrayerStartTime: false,
    isBigIqamaStartTime: false,
    isAzkarTime: false,
    prayerName: "",
    PrayerEndIqamaTime: 0,
    PrayerStartTime : 0,
    //Hamzah:    
    isShowSilentMessage: false,
  });
   
  useEffect(() => {

    if(shouldCalculate || prayerIndex === -1)
    {
      let data = PrayerStatus(prayersData, iqamaAndAzkar);
      setPrayerStatus({
        prayerIndex: data.prayerIndex,
        isIqamaStartTime: data.isIqamaStartTime,
        stopSwitching: data.stopSwitching,
        hideContent: data.hideContent,
        isPrayerStartTime: data.isPrayerStartTime,
        isBigIqamaStartTime: data.isBigIqamaStartTime,
        isAzkarTime: data.isAzkarTime,
        prayerName: data.prayer,
        PrayerEndIqamaTime: data.PrayerEndIqama,
        PrayerStartTime : data.PrayerStartTime,
        //Hamzah:
        isShowSilentMessage: data.isShowSilentMessage,
        
      })
  
      setIsHidden(data.hideContent)
      setIsAzkarTime(data.isAzkarTime)
      setIsBigIqama(data.isBigIqamaStartTime)
      //Hamzah:
      setIsShowSilentMessage(data.isShowSilentMessage)
    }

 
  }, [shouldCalculate ,counter]);


  
  useEffect(()=>{
    const currentTimeInSeconds = 
    new Date().getHours() * 3600 +
    new Date().getMinutes() * 60 +
    new Date().getSeconds();

    // console.log(
    //   `
    //   currentPrayer = ${prayerStatus.prayerName}
    //   currentTimeInSeconds = ${currentTimeInSeconds}
    //   PrayerStartTime = ${prayerStatus.PrayerStartTime}
    //   SHOULD CALCULATE = ${currentTimeInSeconds >= prayerStatus.PrayerStartTime}
 
    //   `
    // )
    
    if(currentTimeInSeconds >= prayerStatus.PrayerStartTime)
    {
      setShouldCalculate(true);
    }
    else
    {
      setShouldCalculate(false);
    }
    


  },[counter])

  const {
    prayerIndex,
    isIqamaStartTime,
    stopSwitching,
 
    prayerName,
    PrayerEndIqamaTime,
  } = prayerStatus;


  function IqamaCountdown(iqamaEndTime, language) {
    const currentTimeInSeconds =
    new Date().getHours() * 3600 +
    new Date().getMinutes() * 60 +
    new Date().getSeconds();
    const timeDiffInSeconds = PrayerEndIqamaTime - currentTimeInSeconds;
  
    if (timeDiffInSeconds <= 0) {
      console.log("Countdown finished!");
      setIsIqamaElement("")
      return;
    }
  
    const targetTime = new Date();
    targetTime.setTime(targetTime.getTime() + timeDiffInSeconds * 1000); // Convert seconds to milliseconds
  
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeDiff = targetTime.getTime() - now;
  
      if (timeDiff <= 0) {
        console.log("Countdown finished!");
        clearInterval(intervalId);
        return;
      }
  
      const remainingMinutes = Math.floor(timeDiff / (1000 * 60));
      let remainingSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      
      if (remainingSeconds < 10)
      {
        remainingSeconds = "0" + remainingSeconds
      }
      let styleOBJ = {color : stylesData.IqamaTimeColor}
      setIsIqamaElement(
        getIqamaElements(`${remainingMinutes}:${remainingSeconds}`, language , styleOBJ)
      );
    }, 1000);
  }


  useEffect ( ()=>{
    if (isIqamaStartTime)
    {
      setIsIqamaElement(IqamaCountdown( PrayerEndIqamaTime,language))
    }
  }, [isIqamaStartTime])

  return (

    <div className="PrayersContainer"  >
      {Object.keys(prayersData).map((p , idx) => 
      {
 
        if(p === "sunrise")
        {
          return (
        <Prayer
          
          isIqamaStartTime={isIqamaStartTime}
          language={language}
          name={p.toUpperCase()}
          time={prayersData[p]}
          key={idx}
        />
      
      )
        }
      return (
        <Prayer
          
          isCurrent={p  === prayerName }
          isIqamaStartTime={isIqamaStartTime}
          isBigIqamaStartTime={prayerStatus.isBigIqamaStartTime}
          stopSwitching={stopSwitching}
          language={language}
          name={p.toUpperCase()}
          time={prayersData[p]}
          counter5={p  === prayerName? counter5 : null}
          key={idx}
          prayerStartTime = {prayerStatus.PrayerStartTime}
        />
      
      )
      }
      )}

      { (isIqamaStartTime && IqamaElement) || null}
    </div>
  );
};
