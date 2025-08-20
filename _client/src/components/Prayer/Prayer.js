import React, { memo, useEffect, useState , useContext } from 'react'
import "./Prayer.css"
import { ConvertPrayerNameToArabic  } from '../../utils/ConvertPrayerNameToArabic';
import { CalculateTimeDifference } from '../../utils/CalculateTimeDifference';
import { ApiContext } from '../../context/APIContext';


function getTimeDifference(nextPrayerTime , prayerstyles3) {
  let timeDiff = CalculateTimeDifference(nextPrayerTime);

  const hours = Math.floor(timeDiff / 60);
  const minutes = timeDiff % 60;

  let timeDifferenceString = "";

  if (timeDiff <= 60) {
    switch (true) {
      case 0:
        timeDifferenceString = "Now";
        break;
      case 1:
        timeDifferenceString = "In 1 minute";
        break;        
      default:
        timeDifferenceString = `In ${minutes} minutes`;
        break;
    }
  } else {
    switch (true) {

      case minutes === 0:
        if (hours === 1 )  timeDifferenceString = "In 1 hour";
        else timeDifferenceString = `In ${hours} hours`;
        break;

    case minutes === 1 && hours === 1:
      timeDifferenceString = `In ${hours} hour and 1 minute`;
      break;

      case hours === 1:
        timeDifferenceString = `In 1 hour and ${minutes} minutes`;
        break;
        
      default:
        timeDifferenceString = `In ${hours} hours and ${minutes} min`;
        break;
    }
  }

  prayerstyles3['fontSize'] = "3vw"
  return <p style={prayerstyles3} className="prayerEl nextPrayer"  >{timeDifferenceString}</p>;
}
function getTimeDifferenceAR(nextPrayerTime, prayerstyles3) {
  let timeDiff = CalculateTimeDifference(nextPrayerTime);

  const hours = Math.floor(timeDiff / 60);
  const minutes = timeDiff % 60;

  let timeDifferenceString = "";

  if (timeDiff < 60) {
    switch (true) {
      case minutes === 0:
        timeDifferenceString = "الآن";
        break;
      case minutes === 1:
        timeDifferenceString = "بعد دقيقة";
        break;
      case minutes === 2:
        timeDifferenceString = "بعد دقيقتين";
        break;
      case minutes > 10 && minutes < 60:
        timeDifferenceString = `بعد ${minutes} دقيقة`;
        break;
      case minutes <= 10 && minutes > 1:
        timeDifferenceString = `بعد ${minutes} دقيقة`;
        break;
      default:
        timeDifferenceString = "";
        break;
    }
  } else {
    if (minutes === 0) {        
        if(hours === 1) timeDifferenceString = `بعد ساعة`
        else if (hours === 2) timeDifferenceString = `بعد ساعتين`
        else timeDifferenceString= `بعد ${hours} ساعات`
    } else if (hours === 2) {
      timeDifferenceString = `بعد ساعتين و ${minutes} دقيقة`;
    } else {
      if(hours === 1) timeDifferenceString = ` بعد ساعة و ${minutes} دقيقة `
      else if (hours === 2) timeDifferenceString = `بعد ساعتين و ${minutes} دقيقة`
      else timeDifferenceString= `بعد ${hours} ساعات و ${minutes} د`
    }
  }

  return <p style={prayerstyles3} className="prayerEl nextPrayer">{timeDifferenceString}</p>;
}
function FixTime(time) {
  let hours = parseInt(time.substr(0, 2));
  let minutes = parseInt(time.substr(3, 2));
  let amPm = hours >= 12 ? 'PM' : 'AM';

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }

  let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} `;
  return formattedTime;
}

const Prayer = ({name , time ,isCurrent , isIqamaStartTime , isBigIqamaStartTime , stopSwitching , styles, counter5 , prayerStartTime}) => {
 
  const[toggle, setToggle] = useState(false)
  const { userStyles,language } = useContext(ApiContext);

  console.log(prayerStartTime)
  
  const prayerstyles1 = { color: userStyles.PrayersNamesColor };
  const prayerstyles2 = { color: userStyles.PrayersTimesColor };
  const prayerstyles3 = { color: userStyles.NextPrayerColor };

  function getPrayerElements(css) {
    const formattedTime = FixTime(time);
    if (language["SelectedLanguage"] === "en") {
      let obj = {fontSize : "3.4vw" , paddingRight : "2vw"}
      return (
        <div key={time}  /*style={prayerstyles} */ className={css} style={obj}>
          <span className='name' style={prayerstyles2} >{name.toUpperCase()}</span>
          <span className='time' style={prayerstyles1} >{formattedTime}</span>
        </div>
      );
    } else {
      return (
        <div key={time}   className={css}>
          <span className='time' style={prayerstyles2} >{formattedTime}</span>
          <span className='name' style={prayerstyles1} >{ConvertPrayerNameToArabic(name)}</span>
        </div>
      );
    }
  }

  const [currentPrayer , setCurrentPrayer] = useState(getPrayerElements());     
  let withoutIqamaClass = `prayerEl ${isCurrent ? " active " : "unactive"}`
  let withIqamaClass = `prayerEl Iqama ${isCurrent ? " active " : "unactive"}` 

  console.log("PRAYERS is ACTIVE" , name, isCurrent );
  
  useEffect(() => {
    setToggle(!toggle);
  }, [counter5]);

  useEffect(() => {
    if (isIqamaStartTime === false) {
      setCurrentPrayer(getPrayerElements(withoutIqamaClass));
    } else {
      setCurrentPrayer(getPrayerElements(withIqamaClass));
    }
  }, [isIqamaStartTime]);

  useEffect(() => {
    //console.log(isCurrent , stopSwitching)
    if (isCurrent && stopSwitching === false) {
      let fn = language["SelectedLanguage"] === "en" ? getTimeDifference : getTimeDifferenceAR;
      setCurrentPrayer(
        toggle ? fn(prayerStartTime , prayerstyles3) : getPrayerElements(withoutIqamaClass)
      );
    } else {
      return;
    }
  }, [isCurrent, stopSwitching, counter5, toggle]);

  return currentPrayer || null
}

export default memo(Prayer);
