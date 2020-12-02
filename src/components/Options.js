import React, {
  useState,
  useEffect
} from 'react';
import { connect } from 'react-redux';
import {
  setOptions,
  setLogTime,
  resetData,
  setOverallTotalMinutes,
  setTimeoutsInMinutes,
} from './actions';
import { convert, twoDigitsFormat } from '../utils/timeConverter';
import { calculateInOut } from '../utils/timeComputation';

import '../assets/Options.scss';

const Options = ({
  options,
  timeoutsInMinutes = 0,
  onSetOptions,
  onSetLogTime,
  onResetData,
  onSetTimeoutsInMinutes,
  onSetOverallTotalMinutes,
}) => {
  const [timeinVal, setTimeinVal] = useState('');
  const [timeoutVal, setTimeoutVal] = useState('');

  useEffect(() => {
    const dateTimeIn = new Date(options.timeIn);
    const dateTimeOut = new Date(options.timeOut);
    const timeIn = twoDigitsFormat(dateTimeIn.getHours()) + ':' + twoDigitsFormat(dateTimeIn.getMinutes());
    const timeOut = twoDigitsFormat(dateTimeOut.getHours()) + ':' + twoDigitsFormat(dateTimeOut.getMinutes());
    
    setTimeinVal(timeIn);
    setTimeoutVal(timeOut);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateTotalInMinutes = (totalMinutes, from) => {
    const total = from === 'reset' ?
      (timeoutsInMinutes - totalMinutes) :
      (timeoutsInMinutes + totalMinutes);

      onSetTimeoutsInMinutes(total);
      onSetOverallTotalMinutes(total);
  }

  const resetData = () => {
    const timeIn = new Date(options.timeIn);
    const timeOut = new Date(options.timeOut);
    const totalMinutes = calculateInOut(timeIn, timeOut);
    updateTotalInMinutes(totalMinutes, 'reset');
    onResetData({
      id: options.id,
    });

    closeOptions();
  }

  const closeOptions = () => {
    onSetOptions({ isDisplayed: false });
  }

  const save = () => {
    const timeIn = new Date(options.timeIn);
    timeIn.setHours(timeinVal.slice(0, 2));
    timeIn.setMinutes(timeinVal.slice(-2));

    const timeOut = new Date(options.timeOut);
    timeOut.setHours(timeoutVal.slice(0, 2));
    timeOut.setMinutes(timeoutVal.slice(-2));

    const oldTotalMinutes = calculateInOut(new Date(options.timeIn), new Date(options.timeOut));
    const newTotalMinutes = calculateInOut(timeIn, timeOut);
    const diff = newTotalMinutes - oldTotalMinutes;
    const converted = convert(newTotalMinutes);

    onSetLogTime({
      id: options.id,
      timeIn: timeIn,
      timeOut: timeOut,
      displayTimeIn: timeIn.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      displayTimeOut: timeOut.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      total: `${converted.toHours}h ${converted.toMins}m`,
    });
    
    updateTotalInMinutes(diff, 'modify');
    closeOptions();
  }

  const validateTimeOut = (e) => {
    setTimeoutVal(e.target.value);
    const timeIn = new Date();
    timeIn.setHours(timeinVal.slice(0, 2));
    timeIn.setMinutes(timeinVal.slice(-2));

    const timeOut = new Date();
    timeOut.setHours(e.target.value.slice(0, 2));
    timeOut.setMinutes(e.target.value.slice(-2));
    if (timeOut < timeIn) {
      setTimeoutVal(timeinVal);
    }
  }

  return (
    <div className="options">
      <h4>Options</h4>

      <div className="options-container">
        <div className="in-out-container">
          <div className="timein">
            <label htmlFor="timein">Time In: </label>
            <input
              id="timein"
              type="time"
              name="timein"
              value={timeinVal}
              onChange={e => setTimeinVal(e.target.value)}
            ></input>
          </div>

          <div className="timeout">
            <label htmlFor="timeout">Time Out: </label>
            <input
              id="timeout"
              type="time"
              name="timeout"
              value={timeoutVal}
              onChange={e => validateTimeOut(e)}
            ></input>
          </div>
        </div>

        <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => resetData()}
          >Reset</button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => closeOptions()}
          >Cancel</button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => save()}
          >Save</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  options: state.flexi.options,
  timeoutsInMinutes: state.flexi.timeoutsInMinutes,
});

const mapDispatchToProps = dispatch => ({
  onSetOptions: data => dispatch(setOptions(data)),
  onSetLogTime: data => dispatch(setLogTime(data)),
  onResetData: data => dispatch(resetData(data)),
  onSetOverallTotalMinutes: data => dispatch(setOverallTotalMinutes(data)),
  onSetTimeoutsInMinutes: data => dispatch(setTimeoutsInMinutes(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Options);