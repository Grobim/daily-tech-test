import {
  LOGIN_MODAL_TYPE,
  SIGNUP_MODAL_TYPE,
  ADD_PRODUCT_MODAL_TYPE,
} from '../reducers/ui';

const uiSelector = state => state.ui || {};

const loginModalOpenedSelector = state => uiSelector(state).modalOpened
  && uiSelector(state).type === LOGIN_MODAL_TYPE;

const signupModalOpenedSelector = state => uiSelector(state).modalOpened
  && uiSelector(state).type === SIGNUP_MODAL_TYPE;

const addProductModalOpenedSelector = state => uiSelector(state).modalOpened
  && uiSelector(state).type === ADD_PRODUCT_MODAL_TYPE;

const modalTypeSelector = state => uiSelector(state).type;

export {
  loginModalOpenedSelector,
  signupModalOpenedSelector,
  addProductModalOpenedSelector,
  modalTypeSelector,
};
