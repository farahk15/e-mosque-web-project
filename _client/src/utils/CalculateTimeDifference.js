export function CalculateTimeDifference(timeInSeconds) {
  console.log(timeInSeconds)
  const currentDateTime = new Date();
  const currentHours = currentDateTime.getHours();
  const currentMinutes = currentDateTime.getMinutes();
  const currentTime = currentHours * 60 + currentMinutes;
  let timeInMinutes = Math.floor(timeInSeconds / 60);



  return Math.abs(timeInMinutes - currentTime);
}
