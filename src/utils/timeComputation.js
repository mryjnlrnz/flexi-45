export const calculateInOut = (timeIn, timeOut) => {
  const milliseconds = timeOut.getTime() - timeIn.getTime();
  const totalMinutes = Math.round(milliseconds / 60000);
  return totalMinutes;
}