import {
  SET_CURRENT_WEEK,
  SET_OVERALL_TOTAL_MINUTES,
  SET_TIMEOUTS_IN_MINUTES,
  SET_LOGIN_TIME,
} from './actions';

const initialState = {
  inOutDetails: [
    {
      id: 0
    },
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
  ],
}

export const flexi = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_WEEK: {
      const { data } = payload;
      return {
        ...state,
        currentWeek: data,
      };
    }

    case SET_OVERALL_TOTAL_MINUTES: {
      const { data } = payload;
      return {
        ...state,
        overallTotalMinutes: data,
      };
    }

    case SET_TIMEOUTS_IN_MINUTES: {
      const { data } = payload;
      return {
        ...state,
        timeoutsInMinutes: data
      }
    }

    case SET_LOGIN_TIME: {
      const { data } = payload;
        
      state.inOutDetails.map( item => {
        if (item.id === data.id) {
          Object.keys(data).forEach(key => {
            return item[key] = data[key];
          });
        }
        return state;
      });

      return state;
    }
  
    default:
      return state;
  }
}