import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../reducers/user';

import { closeSignUpModal, closeLoginModal } from './ui';

const requestSignUp = () => ({
  type: USER_SIGNUP_REQUEST,
});

const successSignUp = user => ({
  type: USER_SIGNUP_SUCCESS,
  payload: user,
});

const requestLogin = () => ({
  type: USER_LOGIN_REQUEST,
});

const successLogin = user => ({
  type: USER_LOGIN_SUCCESS,
  payload: user,
});

const successLogOut = () => ({
  type: USER_LOGOUT,
});

const signUp = newUser => async (dispatch) => {
  dispatch(requestSignUp());

  try {
    const signupResponse = await fetch('/sign-up', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await signupResponse.json();

    if (!signupResponse.ok) {
      throw json;
    }

    dispatch(successSignUp(json));
    dispatch(closeSignUpModal());
  } catch (e) {
    console.error(e);
  }
};

const logIn = user => async (dispatch) => {
  dispatch(requestLogin());
  try {
    const logInResponse = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!logInResponse.ok) {
      throw await logInResponse.text();
    }

    const json = await logInResponse.json();

    dispatch(successLogin(json));
    dispatch(closeLoginModal());
  } catch (e) {
    console.error(e);
  }
};

const logOut = () => async (dispatch) => {
  try {
    const logOutResponse = await fetch('/logout', {
      method: 'POST',
    });

    if (!logOutResponse.ok) {
      throw await logOutResponse.text();
    }
  } catch (e) {
    console.error(e);
  }
  dispatch(successLogOut());
};

export {
  signUp,
  logIn,
  logOut,
};
