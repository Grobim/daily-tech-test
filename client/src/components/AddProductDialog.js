import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withTheme } from '@material-ui/core/styles';

import { useFormInput } from '../hooks';

const AddProductDialog = ({
  open,
  onClose,
  onSubmit,
  theme,
}) => {
  const name = useFormInput('');
  const description = useFormInput('');
  const price = useFormInput('');

  const handleSubmit = (e = new Event()) => {
    e.preventDefault();

    onSubmit({
      name: name.value,
      description: description.value,
      price: price.value,
    });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle id="login-dialog-title">New product</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={theme.spacing.unit}>
            <Grid item xs={12}>
              <TextField
                id="nameField"
                label="Name"
                fullWidth
                {...name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="priceField"
                label="Price"
                type="number"
                fullWidth
                {...price}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="descriptionField"
                label="Description"
                fullWidth
                multiline
                columns={5}
                {...description}
              />
            </Grid>
          </Grid>
          <button type="submit" hidden />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" autoFocus>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withTheme()(AddProductDialog);
