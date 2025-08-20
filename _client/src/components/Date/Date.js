import React, { memo, useEffect, useMemo, useRef, useState , useContext } from "react";
import "./Date.css";
import { ApiContext } from '../../context/APIContext';



   import {
    CurrentDayNameArabic,
    CurrentDayNameEnglish,
    CurrentHijriDate,
    CurrentGregorianDate,
    ConvertToArabicNumber,
    HijriMonthNameArabic,
    HijriMonthNameEnglish,
  } from "../../utils";
 

const Date = ({counter }) => {
  const {hijriOffset , language} = useContext(ApiContext);

  let currentHirjiDate = CurrentHijriDate(hijriOffset["HijriCorrection"]);
  let day = currentHirjiDate[2].toString()
  day = day < "10" ? day.slice(1) : day
 
  currentHirjiDate = `
  \u200F ${CurrentDayNameArabic(currentHirjiDate[2])} 
    ${ConvertToArabicNumber(day)} 
    ${HijriMonthNameArabic(currentHirjiDate[1])}   ${ConvertToArabicNumber(
    currentHirjiDate[0]
  )} \u200F
    `;

  let currentMildiDate = CurrentGregorianDate();
  currentMildiDate = `\u200F 
  ${ConvertToArabicNumber(currentMildiDate[2])}
   - ${ConvertToArabicNumber(currentMildiDate[1])}
    - ${ConvertToArabicNumber(currentMildiDate[0])} \u200F`;
    
  if (language["SelectedLanguage"] === "en") {
    currentHirjiDate = CurrentHijriDate(hijriOffset["HijriCorrection"]);
    currentHirjiDate =
      currentHirjiDate[0] +
      " Hijri " +
      currentHirjiDate[2] +
      " " +
      HijriMonthNameEnglish(currentHirjiDate[1]);
    currentMildiDate = CurrentGregorianDate();
    currentMildiDate = ` ${currentMildiDate[0]} - ${currentMildiDate[1]} - ${currentMildiDate[2]} `;
    }


  const [currentDate, setCurrentDate] = useState(currentMildiDate); 
  const { userStyles } = useContext(ApiContext); 

  const ToggleDate =  useMemo( () => {
    setCurrentDate( currentDate === currentMildiDate ? currentHirjiDate : currentMildiDate)
  },[counter])
  
  const DateStyle = {
    color: userStyles.DateColor } ;

  return (
    <div className="Date">
      <p className="Date" style={DateStyle} >{currentDate}</p>
    </div>
  );
};

export default React.memo(Date);