import React, {
  useState,
  useEffect,
} from 'react';
import { connect } from 'react-redux';
import {
  setOverallTotalMinutes,
  setTimeoutsInMinutes,
  setLoginTime,
} from './actions';

import '../assets/Days.scss';

const Days = ({
  day,
  inOutDetails = {},
  dkey,
  overallTotalMinutes = 0,
  timeoutsInMinutes = 0,
  onSetTimeoutsInMinutes,
  onSetOverallTotalMinutes,
  onSetLoginTime,
}) => {

  const [isHover, setIshover] = useState(false);

  useEffect(() => {

    if (inOutDetails.timeIn && !inOutDetails.timeOut) {
      const intervalId = setInterval(updateTotalRendered, 1000);
      onSetLoginTime({
        id: dkey,
        intervalId: intervalId,
        isReload: true,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const log = () => {
    const now = new Date();
    // const now = new Date(2020, 10, 11, 0, 0, 0, 0);
    now.setSeconds(0);

    const componentDate = new Date(day);
    if (now.getDay() !== componentDate.getDay()) {
      alert('The date you clicked is not today');
      return;
    }

    if (!inOutDetails.timeIn) {
      timein(now);
      return;
    }

    if (!inOutDetails.timeOut) {
      timeout(now);
      return
    }
  }

  const timein = (now) => {
    const intervalId = setInterval(updateTotalRendered, 1000);
    onSetLoginTime({
      id: dkey,
      isActive: true,
      timeIn: now,
      displayTimeIn: now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      intervalId: intervalId
    });
  };

  const timeout = (dateTime) => {
    // dateTime = new Date(2020, 10, 11, 1, 0, 0, 0);
    clearInterval(inOutDetails.intervalId);
    onSetLoginTime({
      id: dkey,
      isActive: false,
      timeOut: dateTime,
      displayTimeOut: dateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
    });
    updateTotalRendered('timeout', dateTime);
  };

  const updateTotalRendered = (from, dateTime) => {
    console.log('updateeeee', from);

    const timeIn = new Date(inOutDetails.timeIn);
    // let timeOut = new Date(2020, 10, 11, 1, 0, 0, 0);
    let timeOut = new Date();

    if (from !== 'timeout') {
      if (timeOut.getDay() !== timeIn.getDay()) {
        const newTimeOut = timeIn;
        newTimeOut.setHours(23);
        newTimeOut.setMinutes(59);
        timeout(newTimeOut);
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

  const updateTotalInMinutes = (totalMinutes, from) => {

    overallTotalMinutes = inOutDetails.isReload ? 0 : timeoutsInMinutes;
    const total = timeoutsInMinutes + totalMinutes;

    if (from === 'timeout') {
      onSetTimeoutsInMinutes(total);
    }
    
    if (from === 'timeout' || inOutDetails.isReload) {
      onSetLoginTime({
        id: dkey,
        isReload: false,
      });
      onSetOverallTotalMinutes(total);
      return;
    }

    onSetOverallTotalMinutes(overallTotalMinutes + totalMinutes);
  }

  const displayElem = () => {
    let element;
    if (inOutDetails.timeIn) {
      element = <p>IN { inOutDetails.displayTimeIn }</p>
    }

    if (inOutDetails.timeOut) {
      element = <p>OUT { inOutDetails.displayTimeOut }</p>
    }

    return element;
  }

  return (
    <>
      <div className="col day-wrapper" onClick={() => log()}>
        <span>{day.slice(0, 1)}</span>

        <div className="position-relative day-container">
          <div className={
            `glow-on-hover ${isHover || inOutDetails.isActive ? 'active' : ''}`
          }
          ></div>
          <div className={
              `day d-flex align-items-center text-center position-absolute
              ${inOutDetails.isActive ? 'time-in' : ''}`
            }
            onMouseEnter={() => setIshover(true)}
            onMouseLeave={() => setIshover(false)}
          >
            {displayElem()}
          </div>
        </div>

      </div>
    </>
  );
};

const mapStateToProps = state => ({
  overallTotalMinutes: state.flexi.overallTotalMinutes,
  timeoutsInMinutes: state.flexi.timeoutsInMinutes,
});

const mapDispatchToProps = dispatch => ({
  onSetOverallTotalMinutes: data => dispatch(setOverallTotalMinutes(data)),
  onSetTimeoutsInMinutes: data => dispatch(setTimeoutsInMinutes(data)),
  onSetLoginTime: data => dispatch(setLoginTime(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Days);