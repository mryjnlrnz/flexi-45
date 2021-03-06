import React, {
  useState,
  useEffect,
} from 'react';
import { connect } from 'react-redux';
import { convert } from '../utils/timeConverter';

import '../assets/OtherData.scss';

const OtherData = ({overallTotalMinutes = 0}) => {
  const [otherDataState, setOtherDataState] = useState({
    requiredTimeInMinutes: 45 * 60,
    displayTotalHoursThisWeek: '45h 0m',
    displayRemainingTime: '45h 0m',
  });

  useEffect(() => {
    setData();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overallTotalMinutes]);

  const setData = () => {
    const remainingTimeInMinutes = otherDataState.requiredTimeInMinutes - overallTotalMinutes;
    const rHours = convert(remainingTimeInMinutes).toHours;
    const rMinutes = convert(remainingTimeInMinutes).toMins;
    const tHours = convert(overallTotalMinutes).toHours;
    const tMinutes = convert(overallTotalMinutes).toMins;

    setOtherDataState({
      ...otherDataState,
      displayTotalHoursThisWeek: `${tHours}h ${tMinutes}m`,
      displayRemainingTime: `${rHours}h ${rMinutes}m`,
    })
  }

  return (
    <div className="container other-data">
      <h6 className="header">OTHER DATA</h6>
      <div className="total-hours">
        <span>Total hours this week</span>
        <span className="float-right">{ otherDataState.displayTotalHoursThisWeek }</span>
      </div>

      <div className="remaining-time">
        <span>Remaining Time</span>
        <span className="float-right">{ otherDataState.displayRemainingTime }</span>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  overallTotalMinutes: state.flexi.overallTotalMinutes
});

export default connect(mapStateToProps)(OtherData);