import React, {
  // useState
} from 'react';
import DateTime from './components/DateTime';
import CueDivider from './components/CueDivider';
import DaysList from './components/DaysList';
import OtherData from './components/OtherData';

import './App.scss';

function App() {
  // const [overallTotalMinutes, setOverallTotalMinutes] = useState(0);
  // const [currentWeek, setCurrentWeek] = useState([]);

  return (
    <div className="app">
      <DateTime></DateTime>
      <CueDivider></CueDivider>
      <DaysList
        // setOverallTotalMinutes={setOverallTotalMinutes}
        // setCurrentWeek={setCurrentWeek}
      ></DaysList>
      <OtherData
        // overallTotalMinutes={overallTotalMinutes}
      ></OtherData>
    </div>
  );
}

export default App;
