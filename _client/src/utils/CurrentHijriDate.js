export function CurrentHijriDate(offset) {
  const today = new Date();
  const hijriDate = new Intl.DateTimeFormat("ar-u-ca-islamic-umalqura", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(today);

  let year, month, day;

  hijriDate.forEach(function (part) {
    switch (part.type) {
      case "year":
        year = parseInt(part.value);
        break;
      case "month":
        month = parseInt(part.value);
        break;
      case "day":
        day = parseInt(part.value) + parseInt(offset);
        break;
      default:
    }
  });

  while (day > 30) {
    if (month === 12) {
      year++;
      month = 1;
    } else {
      month++;
    }
    day -= 30;
  }
  if (day > 29) {
    if ([8, 12].includes(month)) {
      month++;
      day -= 29;
    }
  }

  console.log([year, month.toString().padStart(2, "0"), day.toString().padStart(2, "0")], offset);
  return [year, month.toString().padStart(2, "0"), day.toString().padStart(2, "0")];
}
