export const convert = (totalMinutes) => {
    const minToHour = (totalMinutes / 60);
    const hours = Math.floor(minToHour);
    const minuteResult = (minToHour - hours) * 60;
    const minutes = Math.round(minuteResult);

    return {
      toHours: hours,
      toMins: minutes
    }
}