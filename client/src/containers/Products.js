import React, { useEffect } from 'react';

import { useMappedState, useDispatch } from 'redux-react-hook';

import ProductsComponent from '../components/Products';

import { productsSelector } from '../selectors/products';

import { getProducts } from '../actionCreators/products';

const mapState = state => ({
  products: productsSelector(state),
});

const Products = (props) => {
  const { products } = useMappedState(mapState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <ProductsComponent
      products={products}
      {...props}
    />
  );
};

export default Products;
