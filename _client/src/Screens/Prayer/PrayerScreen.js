import React, { useContext } from "react";
import { PrayersContainer } from "./PrayersSection/PrayersContainer";
import useInterval from "../../hooks/useInterval";
import { HeaderContainer } from "./HeaderSection/HeaderContainer";
import "./PrayerScreenStyle.css"
import { ContentContainer } from "./ContentSection/ContentContainer";
import { AdContainer } from "./AdSection/AdContainer";
import { ContentProvider } from "../../context/ContentContext";

export const PrayerScreen = () => {

  const { counter, counter5 , counter180 } = useInterval(() => {
    
  });

  
  return (
  
    <div className="background-image">
      <HeaderContainer counter={counter} counter5={counter5} counter180={counter180} />

      <div className="bodyContainer">
        <div className="LeftContainer">  
        <ContentContainer/> 
        <AdContainer/>
        </div>
        <div>
          <PrayersContainer counter={counter} counter5={counter5}/>
        </div>
      </div>
    </div>
    
  );
};
