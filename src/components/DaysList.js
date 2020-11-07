import React, {
  useState,
  useEffect
} from 'react';
import Days from './Days';

import '../assets/DaysList.scss';

const DaysList = ({setOverallTotalMinutes, setCurrentWeek}) => {
  const [daysListState, setDaysListState] = useState({
    currentWeek: [],
    overallTotalMinutes: 0,
    timeOutsInMinutes: 0,
  });

  useEffect(() => {
    if (!daysListState.currentWeek.length) {
      setDaysListState({
        ...daysListState,
        currentWeek: getCurrentWeek(),
      });
    }

    setOverallTotalMinutes(daysListState.overallTotalMinutes);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [daysListState.overallTotalMinutes]);

  const getCurrentWeek = () => {
    const today = new Date();
    const week = [];

    for (let i = 1; i <= 5; i++) {
      let first = today.getDate() - today.getDay() + i ;
      let day = new Date(today.setDate(first)).toDateString();
      week.push(day);
    }

    setCurrentWeek(week);
    return week;
  }

  const updateTotalInMinutes = (totalMinutes, from) => {
    if (from === 'timeout') {
      setDaysListState({
        ...daysListState,
        timeOutsInMinutes: daysListState.timeOutsInMinutes + totalMinutes,
        overallTotalMinutes: daysListState.timeOutsInMinutes + totalMinutes
      });
      return;
    }
    setDaysListState({
      ...daysListState,
      overallTotalMinutes: daysListState.overallTotalMinutes + totalMinutes
    });
  }

  return (
    <div className="container days-list">
      <div className="row days-list-container">
        {
          daysListState.currentWeek.map(
            (day, key) =>
              <Days key={key} day={day} updateTotalInMinutes={updateTotalInMinutes}></Days>
          )
        }
      </div>
    </div>
  );
};

export default DaysList;