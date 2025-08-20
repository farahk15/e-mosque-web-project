export function CurrentDayNameArabic() {
  var daysOfWeekArabic = [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];

  var today = new Date();
  var dayIndex = today.getDay();

  return daysOfWeekArabic[dayIndex];
}
