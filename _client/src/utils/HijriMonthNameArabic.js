export function HijriMonthNameArabic(month) {
  var hijriMonthsArabic = [
    "محرم",
    "صفر",
    "ربيع الأول",
    "ربيع الآخر",
    "جمادى الأولى",
    "جمادى الآخرة",
    "رجب",
    "شعبان",
    "رمضان",
    "شوال",
    "ذو القعدة",
    "ذو الحجة",
  ];

  var monthName = hijriMonthsArabic[month - 1] || "";
  return "\u200F" + monthName + "\u200F";
}
