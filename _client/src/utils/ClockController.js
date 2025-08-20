import { FixTimeString } from './FixTimeString';

export function ClockController() {
  var currentTime = new Date();
  var hour = currentTime.getHours();
  var min = currentTime.getMinutes();
  var sec = currentTime.getSeconds();

  if (hour > 12)
    hour = hour % 12;

  if (hour === 0)
    hour = 12;

  hour = FixTimeString(hour);
  min = FixTimeString(min);
  sec = FixTimeString(sec);

  return [hour, min, sec];

}
