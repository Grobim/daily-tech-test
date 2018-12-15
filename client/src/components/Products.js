import React from 'react';

import Grid from '@material-ui/core/Grid';
import { withTheme } from '@material-ui/core/styles';

import Product from '../containers/Product';

const Products = ({ products, theme }) => (
  <Grid container spacing={theme.spacing.unit * 2}>
    {products.map(product => (
      <Grid item key={product.$loki} xs={12} sm={12} md={6} lg={4}>
        <Product product={product} />
      </Grid>
    ))}
  </Grid>
);

Products.defaultProps = {
  products: [],
};

export default withTheme()(Products);
