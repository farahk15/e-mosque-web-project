export function ConvertToArabicNumber(number) {
  number = number.toString();
  var arabicDigits = {
    0: "٠",
    1: "١",
    2: "٢",
    3: "٣",
    4: "٤",
    5: "٥",
    6: "٦",
    7: "٧",
    8: "٨",
    9: "٩",
  };

  var arabicNumber = "";

  var numberString = String(number);

  for (var i = 0; i < numberString.length; i++) {
    var digit = numberString[i];
    arabicNumber += arabicDigits[digit] || digit;
  }

  return arabicNumber;
}
