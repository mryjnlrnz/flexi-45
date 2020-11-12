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

export const SET_LOGIN_TIME = 'SET_LOGIN_TIME';
export const setLoginTime = data => ({
  type: SET_LOGIN_TIME,
  payload: { data }
});

