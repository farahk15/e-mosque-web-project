
function getPrayerTimings(prayersObject, iqamaAndPrayerAndAzkar) {
  const prayers = Object.keys(prayersObject).filter(
    (prayer) => prayer !== "sunrise"
  );

  function convertTimeToSeconds(timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 3600 + minutes * 60;
  }

  function addSecondsToTime(timeInSeconds, seconds) {
    const totalSeconds = timeInSeconds + seconds;
    return `${Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, "0")}:${Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0")}`;
  }

  const prayerTimings = {};
  for (const prayer of prayers) {
    const prayerTimeInSeconds = convertTimeToSeconds(prayersObject[prayer]);
    const iqamaTimeInSeconds =
      iqamaAndPrayerAndAzkar.timeBetweenAzanAndIqama[prayer] * 60;
    const prayerDurationInSeconds =
      iqamaAndPrayerAndAzkar.timeBetweenIqamaAndPray[prayer] * 60;
    const azkarDisplayTimeInSeconds =
      iqamaAndPrayerAndAzkar.azkarDisplayPeriod[prayer] * 60;

    const prayerIqamaStartTime = prayerTimeInSeconds;
    const prayerBigIqamaTime = prayerTimeInSeconds + iqamaTimeInSeconds - 60;
    const prayerEndIqama = prayerTimeInSeconds + iqamaTimeInSeconds;
    const prayerStartTime = prayerTimeInSeconds + iqamaTimeInSeconds;
    const prayerEndTime =
      prayerTimeInSeconds + iqamaTimeInSeconds + prayerDurationInSeconds;
    const azkarStartTime =
      prayerTimeInSeconds + iqamaTimeInSeconds + prayerDurationInSeconds;
    const azkarEndTime =
      prayerTimeInSeconds +
      iqamaTimeInSeconds +
      prayerDurationInSeconds +
      azkarDisplayTimeInSeconds;

    prayerTimings[prayer] = {
      PrayerIqamaStartTime: prayerIqamaStartTime,
      PrayerBigIqamaTime: prayerBigIqamaTime,
      PrayerEndIqama: prayerEndIqama,
      PrayerStartTime: prayerStartTime,
      PrayerEndTime: prayerEndTime,
      AzkarStartTime: azkarStartTime,
      AzkarEndTime: azkarEndTime,
    };
  }

  return prayerTimings;
}
function monitorStates(prayerTimings) {
    const currentTimeInSeconds =
      new Date().getHours() * 3600 +
      new Date().getMinutes() * 60 +
      new Date().getSeconds();
  
    const prayerStates = {
      prayerIndex: -1,
      isIqamaStartTime: false,
      isBigIqamaStartTime: false,
      stopSwitching: false,
      hideContent: false,
      isPrayerStartTime: false,
      isAzkarTime: false,
      prayer : "",
      PrayerStartTime : 0 ,
      PrayerEndIqama : 0,

    };
  
    const prayers = Object.keys(prayerTimings);
    for (let i = 0; i < prayers.length; i++) {
      const prayer = prayers[i];
      const timing = prayerTimings[prayer];

      
      if (currentTimeInSeconds >= timing.PrayerIqamaStartTime && currentTimeInSeconds < timing.PrayerEndIqama) {
        // Between IQAMA START ---------> IQAMA END
        // console.log("IQAMA START --------->" , prayer)
        prayerStates.prayerIndex = i;
        prayerStates.isIqamaStartTime = true;
        prayerStates.stopSwitching = true;
        prayerStates.PrayerEndIqama = timing.PrayerEndIqama;
        prayerStates.isBigIqamaStartTime = currentTimeInSeconds >= timing.PrayerBigIqamaTime;
        prayerStates.isPrayerStartTime = currentTimeInSeconds >= timing.PrayerStartTime;
        prayerStates.isAzkarTime = currentTimeInSeconds >= timing.AzkarStartTime;
        prayerStates.prayer = prayer;
        prayerStates.PrayerStartTime = timing.PrayerIqamaStartTime;
        if (currentTimeInSeconds >= timing.PrayerStartTime && currentTimeInSeconds < timing.AzkarEndTime) {
          prayerStates.hideContent = true;
        } else {
          prayerStates.hideContent = false;
        }
        break;
      } else if (currentTimeInSeconds >= timing.PrayerStartTime && currentTimeInSeconds < timing.PrayerEndTime) {
        // Between PRAYER START ---------> PRAYER END  
        // console.log("PRAYER START --------->" , prayer)
        prayerStates.prayerIndex = i;
        prayerStates.isIqamaStartTime = false;
        prayerStates.isBigIqamaStartTime = false;
        prayerStates.isPrayerStartTime = true;
        prayerStates.isAzkarTime = false;
        prayerStates.hideContent = true;
        break;
      } else if (currentTimeInSeconds >= timing.AzkarStartTime && currentTimeInSeconds < timing.AzkarEndTime) {
        // Between Azkar START ---------> Azkar END 
        // console.log("Azkar START --------->" , prayer)
        prayerStates.prayerIndex = i;
        prayerStates.isIqamaStartTime = false;
        prayerStates.isBigIqamaStartTime = false;
        prayerStates.isPrayerStartTime = false;
        prayerStates.isAzkarTime = true;
        prayerStates.hideContent = false;
        prayerStates.stopSwitching = false;
        break;
      }
    }
  
    if (prayerStates.prayerIndex === -1 ) {
      // Handle the "normal" state where the current time is after the last prayer.
      let isChanged = false;
      for (let i = 0; i < prayers.length; i++) {
        const prayer = prayers[i];
        const timing = prayerTimings[prayer];
        if (currentTimeInSeconds < timing.PrayerIqamaStartTime) {
          prayerStates.prayerIndex = i;
          prayerStates.hideContent = false;
          prayerStates.stopSwitching = false;
          prayerStates.prayer = prayer
          prayerStates.PrayerStartTime = timing.PrayerIqamaStartTime;
          isChanged = true;
          break;
        }
      }
      if(isChanged === false)
      {
        const prayer = prayers[0];
        const timing = prayerTimings[prayer];
        prayerStates.prayerIndex = 0;
        prayerStates.hideContent = false;
        prayerStates.stopSwitching = false;
        prayerStates.prayer = prayer
        prayerStates.PrayerStartTime = timing.PrayerIqamaStartTime + 86400 ;
      }
    }
  
    return prayerStates;
  }
  

// Example usage:
const prayersObject = {
  fajr: "04:15",
  dhuhr: "12:43",
  asr: "16:24",
  maghrib: "19:43",
  isha: "21:11",
};

const iqamaAndPrayerAndAzkar = {
  timeBetweenAzanAndIqama: {
    fajr: 33,
    dhuhr: 17,
    asr: 17,
    maghrib: 7,
    isha: 12,
  },
  timeBetweenIqamaAndPray: {
    fajr: 4,
    dhuhr: 4,
    asr: 4,
    maghrib: 4,
    isha: 4,
    jumaa: 40,
  },
  azkarDisplayPeriod: {
    fajr: 4,
    dhuhr: 4,
    asr: 4,
    maghrib: 4,
    isha: 4,
    jumaa: 4,
  },
};

const PrayerStatus = (prayersObject , iqamaAndPrayerAndAzkar) => {
    console.log("CALCULATING PRAYERS")
    const prayerTimings = getPrayerTimings(prayersObject, iqamaAndPrayerAndAzkar);
  
    const statusObj = monitorStates(prayerTimings);
    return statusObj;
}

export {
    PrayerStatus
}


