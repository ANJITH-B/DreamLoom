
const initialState = {
  data: {
    isAuthenticated: true,
    user: null,
  },
  speech: {
    voice: 0,
    pitch: 1,
    rate: 1,
    volume: 1,
  }
}

export function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'user_login':
      return {
        ...state,
        data: {
          isAuthenticated: true, user: payload.user
        }
      };
    case 'user_logout':
      return {
        ...state,
        data: {
          isAuthenticated: false,
        }
      };
    case 'speech':
      return {
        ...state,
        speech: {
          voice: payload?.voice,
          pitch: payload?.pitch,
          rate: payload?.rate,
          volume: payload?.volume,
        }
      };
    default:
      return state;
  }
}