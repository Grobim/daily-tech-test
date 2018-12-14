const UI_SET_LOGIN_OPENED = 'UI_SET_LOGIN_OPENED';
const UI_SET_SIGNUP_OPENED = 'UI_SET_SIGNUP_OPENED';
const UI_SET_ADD_PRODUCT_OPENED = 'UI_SET_ADD_PRODUCT_OPENED';

const LOGIN_MODAL_TYPE = 'LOGIN_MODAL_TYPE';
const SIGNUP_MODAL_TYPE = 'SIGNUP_MODAL_TYPE';
const ADD_PRODUCT_MODAL_TYPE = 'ADD_PRODUCT_MODAL_TYPE';

const defaultState = {
  modalOpened: false,
};

const uiReducer = (state = defaultState, { type, payload = {} } = {}) => {
  switch (type) {
    case UI_SET_LOGIN_OPENED:
      return {
        ...state,
        modalOpened: payload,
        type: LOGIN_MODAL_TYPE,
      };
    case UI_SET_SIGNUP_OPENED:
      return {
        ...state,
        modalOpened: payload,
        type: SIGNUP_MODAL_TYPE,
      };
    case UI_SET_ADD_PRODUCT_OPENED:
      return {
        ...state,
        modalOpened: payload,
        type: ADD_PRODUCT_MODAL_TYPE,
      };
    default:
      return state;
  }
};

export {
  UI_SET_LOGIN_OPENED,
  UI_SET_SIGNUP_OPENED,
  UI_SET_ADD_PRODUCT_OPENED,
  LOGIN_MODAL_TYPE,
  SIGNUP_MODAL_TYPE,
  ADD_PRODUCT_MODAL_TYPE,
};

export default uiReducer;
