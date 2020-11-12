import React, {
  useEffect
} from 'react';
import { connect } from 'react-redux';
import {
  setCurrentWeek,
} from './actions';

import Days from './Days';

import '../assets/DaysList.scss';

const DaysList = ({
  currentWeek = [],
  inOutDetails,
  onSetCurrentWeek,
}) => {

  useEffect(() => {
    if (!currentWeek.length) {
      getCurrentWeek();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCurrentWeek = () => {
    const today = new Date();
    const week = [];

    for (let i = 1; i <= 5; i++) {
      let first = today.getDate() - today.getDay() + i ;
      let day = new Date(today.setDate(first)).toDateString();
      week.push(day);
    }

    onSetCurrentWeek(week);
    return week;
  }

  const getDetails = (key) => {
    return inOutDetails.filter(detail => detail.id === key);
  }

  return (
    <div className="container days-list">
      <div className="row days-list-container">
        {
          currentWeek.map(
            (day, key) =>
              <Days
                key={key}
                dkey={key}
                day={day}
                inOutDetails={getDetails(key)[0]}
              ></Days>
          )
        }
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentWeek: state.flexi.currentWeek,
  inOutDetails: state.flexi.inOutDetails,
});

const mapDispatchToProps = dispatch => ({
  onSetCurrentWeek: data => dispatch(setCurrentWeek(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DaysList);