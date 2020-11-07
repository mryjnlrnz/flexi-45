import React, {
  useState,
  useEffect
} from 'react';

import '../assets/Days.scss';

const Days = ({day, updateTotalInMinutes}) => {
  const [daysState, setDaysState] = useState({
    timeIn: null,
    timeOut: null,
    displayTimeIn: null,
    displayTimeOut: null,
    intervalId: null,
    isActive: false,
    isHover: false,
    isEOD: false,
  });

  useEffect(() => {
    if (daysState.timeIn && !daysState.isEOD) {
      const interval = setInterval(updateTotalRendered, 1000);
      setDaysState({
        ...daysState,
        intervalId: interval,
      });
      return () => clearInterval(interval);
    }

    if (daysState.isEOD) {
      const newTimeOut = new Date(daysState.timeIn);
      newTimeOut.setHours(23);
      newTimeOut.setMinutes(59);
      timeOut(newTimeOut);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [daysState.timeIn, daysState.isEOD]);

  const log = () => {
    const now = new Date();
    now.setSeconds(0);

    const componentDate = new Date(day);
    if (now.getDay() !== componentDate.getDay()) {
      alert('The date you clicked is not today');
      return;
    }

    if (!daysState.timeIn) {
      timeIn(now);
      return;
    }

    if (!daysState.timeOut) {
      timeOut(now);
      return
    }
  }

  const timeIn = (now) => {
    setDaysState({
      ...daysState,
      isActive: true,
      timeIn: now,
      displayTimeIn: now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    });
  };

  const timeOut = (dateTime) => {
    clearInterval(daysState.intervalId);
    setDaysState({
      ...daysState,
      isActive: false,
      timeOut: dateTime,
      isHover: false,
      displayTimeOut: dateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
    });
    updateTotalRendered('timeout', dateTime);
  };

  const updateTotalRendered = (from, dateTime) => {

    const timeIn = daysState.timeIn;
    let timeOut = new Date();

    if (from !== 'timeout') {
      if (!daysState.isEOD && timeOut.getDay() !== timeIn.getDay()) {
        setDaysState({
          ...daysState,
          isEOD: true
        });
        return;
      }
    }

    if (from === 'timeout') {
      timeOut = dateTime;
    }

    timeOut.setSeconds(0);

    const milliseconds = timeOut.getTime() - timeIn.getTime();
    const totalMinutes = Math.round(milliseconds / 60000);
    updateTotalInMinutes(totalMinutes, from);
  };

  const displayElem = () => {
    let element;
    if (daysState.timeIn) {
      element = <p>IN { daysState.displayTimeIn }</p>
    }

    if (daysState.timeOut) {
      element = <p>OUT { daysState.displayTimeOut }</p>
    }

    return element;
  }

  return (
    <>
      <div className="col day-wrapper" onClick={() => log()}>
        <span>{day.slice(0, 1)}</span>

        <div className="position-relative day-container">
          <div className={
              `glow-on-hover
              ${daysState.isHover || daysState.isActive ? 'active' : ''}`
            }
          ></div>
          <div className={
            `day d-flex align-items-center text-center position-absolute
              ${daysState.timeIn && !daysState.timeOut ? 'time-in' : ''}`
            }
            onMouseEnter={() => setDaysState({...daysState, isHover: true})}
            onMouseLeave={() => setDaysState({...daysState, isHover: false})}
          >
            {displayElem()}
          </div>
        </div>

      </div>
    </>
  );
};

export default Days;