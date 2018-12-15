import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({});

const Product = ({ product, isConnected }) => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">{product.name}</Typography>
      <Typography component="p">{product.description}</Typography>
    </CardContent>
    <CardActions>
      <Button disabled={!isConnected}>Buy</Button>
    </CardActions>
  </Card>
);

export default withStyles(styles)(Product);
