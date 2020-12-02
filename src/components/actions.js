export const SET_CURRENT_WEEK = 'SET_CURRENT_WEEK';
export const setCurrentWeek = data => ({
  type: SET_CURRENT_WEEK,
  payload: { data }
});

export const SET_OVERALL_TOTAL_MINUTES = 'SET_OVERALL_TOTAL_MINUTES';
export const setOverallTotalMinutes = data => ({
  type: SET_OVERALL_TOTAL_MINUTES,
  payload: { data }
});

export const SET_TIMEOUTS_IN_MINUTES = 'SET_TIMEOUTS_IN_MINUTES';
export const setTimeoutsInMinutes = data => ({
  type: SET_TIMEOUTS_IN_MINUTES,
  payload: { data }
});

export const SET_LOG_TIME = 'SET_LOG_TIME';
export const setLogTime = data => ({
  type: SET_LOG_TIME,
  payload: { data }
});

export const RESET_DATA = 'RESET_DATA';
export const resetData = data => ({
  type: RESET_DATA,
  payload: { data }
});

export const SET_OPTIONS = 'SET_OPTIONS';
export const setOptions = data => ({
  type: SET_OPTIONS,
  payload: { data }
});

