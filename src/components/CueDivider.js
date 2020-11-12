import React from 'react';
import { connect } from 'react-redux';

import '../assets/CueDivider.scss';

const CueDivider = ({currentWeek = []}) => {
  return (
    <div className="cue-divider position-relative">
      <hr />
      <div className="container cue-wrapper">
        <div className="row">
          {
            currentWeek.map(
              (day, key) =>
                (
                  <div className="col text-center cue-container" key={key}>
                    <div className="mb-2 day">{day.slice(4, 10)}</div>
                    <div className="cue mx-auto"></div>
                  </div>
                )
            )
          }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  currentWeek: state.flexi.currentWeek
});

export default connect(mapStateToProps)(CueDivider);