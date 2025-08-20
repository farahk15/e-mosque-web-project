export function CurrentGregorianDate() {
  var today = new Date();
  var year = today.getFullYear();
  var month = (today.getMonth() + 1).toString().padStart(2, "0");
  var day = today.getDate().toString().padStart(2, "0");

  return [year, month, day];
}
