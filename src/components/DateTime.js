import React, {
  useState,
  useEffect,
} from 'react';
import {
  getDay,
  getMonth
} from '../utils/assocDate';
import { twoDigitsFormat } from '../utils/timeConverter';

import '../assets/DateTime.scss';

const DateTime = () => {
  const [dateTimeInfo, setDateTimeInfo] = useState({
    time: '00:00',
    seconds: '00',
    amPm: 'AM',
    date: ''
  });

  useEffect(() => {
    setInterval(
      currentDateTime, 1000
    )
  }, []);

  const currentDateTime = () => {
    const now = new Date(),
      h = twoDigitsFormat(now.getHours() % 12 || 12),
      m = twoDigitsFormat(now.getMinutes()),
      s = twoDigitsFormat(now.getSeconds()),
      amPm = now.getHours() >= 12 ? 'PM' : 'AM';
    
    setDateTimeInfo({
      time: `${h}:${m}`,
      seconds: s,
      amPm: amPm,
      date: `${getDay(now.getDay())}, ${getMonth(now.getMonth())} ${now.getDate()}`
    })
  }

  return (
    <div className="container text-light date-time">
      <div className="text-center position-relative">
      <div className="hour-mins">{ dateTimeInfo.time }</div>
        <div className="position-absolute date">{ dateTimeInfo.date }</div>
        <div className="position-absolute time-unit">{ dateTimeInfo.amPm }</div>
        <div className="position-absolute seconds">{ dateTimeInfo.seconds }</div>
      </div>
    </div>
  );
}

export default DateTime;