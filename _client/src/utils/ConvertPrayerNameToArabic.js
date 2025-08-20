export function ConvertPrayerNameToArabic(prayerName) {
  const prayerNamesArabic = {
    fajr: "الفجر",
    dhuhr: "الظهر",
    asr: "العصر",
    maghrib: "المغرب",
    isha: "العشاء",
    sunrise: "الشروق",
    iqama: "الاقامة",
  };

  return prayerNamesArabic[prayerName.toLowerCase()] || prayerName;
}
