import {
  SET_CURRENT_WEEK,
  SET_OVERALL_TOTAL_MINUTES,
  SET_TIMEOUTS_IN_MINUTES,
  SET_LOG_TIME,
  RESET_DATA,
  SET_OPTIONS,
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
      state = initialState;
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

    case SET_LOG_TIME: {
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

    case RESET_DATA: {
      const { data } = payload;
      const newDetails = state.inOutDetails.filter(todo => todo.id !== data.id);
      newDetails.push({id: data.id})

      return {
        ...state,
        inOutDetails: newDetails
      }
    }

    case SET_OPTIONS: {
      const { data } = payload;
      return {
        ...state,
        options: data
      };
    }
  
    default:
      return state;
  }
}