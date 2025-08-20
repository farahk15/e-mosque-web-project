function CurrentDayNameEnglish() {
  var daysOfWeekEnglish = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var today = new Date();
  var dayIndex = today.getDay();

  return daysOfWeekEnglish[dayIndex];
}

export default CurrentDayNameEnglish