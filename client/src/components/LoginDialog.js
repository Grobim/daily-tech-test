import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import compose from 'recompose/compose';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import withMobileDialog from '@material-ui/core/withMobileDialog';

import { useFormInput } from '../hooks';

import styles from './LoginDialog.styles';

const LoginDialog = ({
  open,
  fullScreen,
  title,
  actionText,
  isSignUp,
  handleClose,
  handleSubmit,
  classes,
}) => {
  const Transition = useMemo(() => (fullScreen
    ? props => <Slide direction="down" {...props} />
    : props => <Fade {...props} />), [fullScreen]);

  const username = useFormInput();
  const password = useFormInput();
  const email = useFormInput();
  const role = useFormInput('User');

  const onSubmit = (e = new Event()) => {
    e.preventDefault();

    const payload = {
      username: username.value,
      password: password.value,
    };

    if (isSignUp) {
      payload.email = email.value;
      payload.role = role.value;
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
        <form onSubmit={onSubmit}>
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
                    id="emailField"
                    label="Email"
                    fullWidth
                    type="email"
                    {...email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <div className={classes.formControl}>
                    <RadioGroup
                      aria-label="Role"
                      name="role"
                      className={classes.radioGroup}
                      {...role}
                    >
                      <FormControlLabel
                        value="User"
                        control={<Radio color="primary" />}
                        label="User"
                      />
                      <FormControlLabel
                        value="Admin"
                        control={<Radio color="primary" />}
                        label="Admin"
                      />
                    </RadioGroup>
                  </div>
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

LoginDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  isSignUp: PropTypes.bool.isRequired,
  fullScreen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default compose(
  withMobileDialog({ breakpoint: 'xs' }),
  withStyles(styles),
)(LoginDialog);
