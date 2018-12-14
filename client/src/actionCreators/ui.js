import {
  UI_SET_LOGIN_OPENED,
  UI_SET_SIGNUP_OPENED,
  UI_SET_ADD_PRODUCT_OPENED,
} from '../reducers/ui';

const openLoginModal = () => ({
  type: UI_SET_LOGIN_OPENED,
  payload: true,
});

const closeLoginModal = () => ({
  type: UI_SET_LOGIN_OPENED,
  payload: false,
});

const openSignupModal = () => ({
  type: UI_SET_SIGNUP_OPENED,
  payload: true,
});

const closeSignUpModal = () => ({
  type: UI_SET_SIGNUP_OPENED,
  payload: false,
});

const openAddProductModal = () => ({
  type: UI_SET_ADD_PRODUCT_OPENED,
  payload: true,
});

const closeAddProductModal = () => ({
  type: UI_SET_ADD_PRODUCT_OPENED,
  payload: false,
});

export {
  openLoginModal,
  closeLoginModal,
  openSignupModal,
  closeSignUpModal,
  openAddProductModal,
  closeAddProductModal,
};
