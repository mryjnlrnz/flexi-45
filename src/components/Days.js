import React, {
  useState,
  useEffect,
} from 'react';
import { connect } from 'react-redux';
import {
  setOverallTotalMinutes,
  setTimeoutsInMinutes,
  setLogTime,
  setOptions,
} from './actions';
import { convert } from '../utils/timeConverter';
import { calculateInOut } from '../utils/timeComputation';

import '../assets/Days.scss';

const Days = ({
  day,
  inOutDetails = {},
  dkey,
  overallTotalMinutes = 0,
  timeoutsInMinutes = 0,
  onSetTimeoutsInMinutes,
  onSetOverallTotalMinutes,
  onSetLogTime,
  onSetOptions,
}) => {

  const [isHover, setIshover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {

    if (inOutDetails.timeIn && !inOutDetails.timeOut) {
      const intervalId = setInterval(updateTotalRendered, 1000);
      onSetLogTime({
        id: dkey,
        intervalId: intervalId,
        isReload: true,
      });
    }

    onSetOptions({ isDisplayed: false });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const log = () => {
    const now = new Date();
    now.setSeconds(0);

    const componentDate = new Date(day);
    if (now.getDay() !== componentDate.getDay()) {
      alert('Not today');
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

    showOptions();
  }

  const showOptions = () => {
    onSetOptions({
      id: dkey,
      isDisplayed: true,
      timeIn: inOutDetails.timeIn,
      timeOut: inOutDetails.timeOut
    });
  }

  const timein = (now) => {
    const intervalId = setInterval(updateTotalRendered, 1000);
    setIsActive(true);
    onSetLogTime({
      id: dkey,
      isActive: true,
      timeIn: now,
      displayTimeIn: now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      intervalId: intervalId
    });
  };

  const timeout = (dateTime) => {
    const timeIn = new Date(inOutDetails.timeIn);
    const timeOut = new Date(dateTime);
    const totalMinutes = calculateInOut(timeIn, timeOut);
    const converted = convert(totalMinutes);

    clearInterval(inOutDetails.intervalId);
    setIsActive(false);
    onSetLogTime({
      id: dkey,
      isActive: false,
      timeOut: dateTime,
      displayTimeOut: dateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      total: `${converted.toHours}h ${converted.toMins}m`,
    });
    updateTotalRendered('timeout', dateTime);
  };

  const updateTotalRendered = (from, dateTime) => {
    const timeIn = new Date(inOutDetails.timeIn);
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

    const totalMinutes = calculateInOut(timeIn, timeOut);
    updateTotalInMinutes(totalMinutes, from);
  };

  const updateTotalInMinutes = (totalMinutes, from) => {
    overallTotalMinutes = inOutDetails.isReload ? 0 : timeoutsInMinutes;
    const total = (timeoutsInMinutes + totalMinutes);

    if (from === 'timeout') {
      onSetTimeoutsInMinutes(total);
    }
    
    if (from === 'timeout' || inOutDetails.isReload) {
      onSetLogTime({
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
    const inElem = <p>IN { inOutDetails.displayTimeIn }</p>

    if (inOutDetails.timeIn && !inOutDetails.timeOut) {
      element = inElem;
    }

    if (inOutDetails.timeOut && isHover) {
      element = (
        <>
          { inElem }
          <p>OUT { inOutDetails.displayTimeOut }</p>
        </>
      )
    }

    if (inOutDetails.timeOut && !isHover) {
      element = <p>Total { inOutDetails.total }</p>
    }

    return element;
  }

  return (
    <>
      <div className="col day-wrapper" onClick={() => log()}>
        <span>{day.slice(0, 1)}</span>

        <div className="position-relative day-container">
          <div className={
            `glow-on-hover ${isHover || isActive || inOutDetails.isActive ? 'active' : ''}`
          }
          ></div>
          <div className={
              `day text-center position-absolute
              ${inOutDetails.isActive ? 'time-in' : ''}
              ${isHover && inOutDetails.timeOut ? '' : 'd-flex align-items-center'}
              `
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
  onSetLogTime: data => dispatch(setLogTime(data)),
  onSetOptions: data => dispatch(setOptions(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Days);