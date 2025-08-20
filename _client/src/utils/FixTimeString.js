export function FixTimeString(time) {
  if (time < 10) {
    time = "0" + time;
  }
  return time;
}
