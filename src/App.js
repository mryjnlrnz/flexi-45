import React from 'react';
import { connect } from 'react-redux';
import DateTime from './components/DateTime';
import CueDivider from './components/CueDivider';
import DaysList from './components/DaysList';
import OtherData from './components/OtherData';
import Header from './components/Header';
import Footer from './components/Footer';
import Options from './components/Options';

import './App.scss';

function App({options = {}}) {
  return (
    <div className="app">
      {!options.isDisplayed ?
        <>
          <Header></Header>
          <DateTime></DateTime>
          <CueDivider></CueDivider>
          <DaysList></DaysList>
          <OtherData></OtherData>
          <Footer></Footer>
        </> :
        <Options></Options>}
    </div>
  );
}

const mapStateToProps = state => ({
  options: state.flexi.options
});

export default connect(mapStateToProps)(App);
