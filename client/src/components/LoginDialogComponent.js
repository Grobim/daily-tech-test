import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';

import withMobileDialog from '@material-ui/core/withMobileDialog';

import { useFormInput } from '../hooks';

const LoginDialogComponent = ({
  open,
  fullScreen,
  title,
  actionText,
  isSignUp,
  handleClose,
  handleSubmit,
}) => {
  const Transition = useMemo(() => (fullScreen
    ? props => <Slide direction="down" {...props} />
    : props => <Fade {...props} />), [fullScreen]);

  const username = useFormInput();
  const password = useFormInput();
  const confirmPassword = useFormInput();
  const email = useFormInput();

  const onSubmit = (e = new Event()) => {
    e.preventDefault();
    const payload = {
      username: username.value,
      password: password.value,
    };

    if (isSignUp) {
      payload.email = email.value;
    }

    handleSubmit(payload);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="login-dialog-title"
      TransitionComponent={Transition}
    >
      <DialogTitle id="login-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <form onSubmit={onSubmit} autoComplete={isSignUp ? 'off' : 'on'}>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                id="usernameField"
                label="Username"
                fullWidth
                {...username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="passwordField"
                label="Password"
                fullWidth
                type="password"
                {...password}
              />
            </Grid>
            {isSignUp && (
              <React.Fragment>
                <Grid item xs={12}>
                  <TextField
                    id="confirmPasswordField"
                    label="Confirm password"
                    fullWidth
                    type="password"
                    {...confirmPassword}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="emailField"
                    label="Email"
                    fullWidth
                    type="email"
                    {...email}
                  />
                </Grid>
              </React.Fragment>
            )}
          </Grid>
          <button type="submit" hidden />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary" autoFocus>
          {actionText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

LoginDialogComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  isSignUp: PropTypes.bool.isRequired,
  fullScreen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default withMobileDialog({ breakpoint: 'xs' })(LoginDialogComponent);
