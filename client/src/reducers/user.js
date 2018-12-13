const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST';
const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const USER_LOGOUT = 'USER_LOGOUT';

const USER_NOT_CONNECTED_STATE = 'USER_NOT_CONNECTED';
const USER_CONNECTING_STATE = 'USER_CONNECTING';
const USER_CONNECTED_STATE = 'USER_CONNECTED';

const defaultState = {
  state: USER_NOT_CONNECTED_STATE,
};

const userReducer = (state = defaultState, { type, payload = {} }) => {
  switch (type) {
    case USER_SIGNUP_REQUEST:
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        state: USER_CONNECTING_STATE,
      };
    case USER_SIGNUP_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        state: USER_CONNECTED_STATE,
        user: payload,
      };
    case USER_LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_NOT_CONNECTED_STATE,
  USER_CONNECTING_STATE,
  USER_CONNECTED_STATE,
};

export default userReducer;
