import React, { useCallback } from 'react';

import { useMappedState, useDispatch } from 'redux-react-hook';

import LoginDialogComponent from '../components/LoginDialog';

import { SIGNUP_MODAL_TYPE } from '../reducers/ui';
import { loginModalOpenedSelector, signupModalOpenedSelector, modalTypeSelector } from '../selectors/ui';
import { closeLoginModal, closeSignUpModal } from '../actionCreators/ui';
import { signUp, logIn } from '../actionCreators/user';

const mapState = (state) => {
  const isSignUp = modalTypeSelector(state) === SIGNUP_MODAL_TYPE;

  return {
    open: loginModalOpenedSelector(state) || signupModalOpenedSelector(state),
    title: isSignUp
      ? 'Sign up'
      : 'Login',
    actionText: isSignUp
      ? 'Sign up'
      : 'Login',
    isSignUp,
  };
};

const LoginDialog = (props) => {
  const stateProps = useMappedState(mapState);

  const dispatch = useDispatch();

  const dispatchProps = {
    handleClose: useCallback(() => {
      if (stateProps.isSignUp) {
        dispatch(closeSignUpModal());
      } else {
        dispatch(closeLoginModal());
      }
    }, [stateProps.isSignUp]),
    handleSubmit: useCallback((user) => {
      if (stateProps.isSignUp) {
        dispatch(signUp(user));
      } else {
        dispatch(logIn(user));
      }
    }, [stateProps.isSignUp]),
  };
  return <LoginDialogComponent {...props} {...stateProps} {...dispatchProps} />;
};

export default LoginDialog;
