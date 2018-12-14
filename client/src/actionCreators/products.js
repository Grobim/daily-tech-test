import { PRODUCTS_SET } from '../reducers/products';

import { productsSelector } from '../selectors/products';

import { closeAddProductModal } from './ui';

const productsSet = products => ({
  type: PRODUCTS_SET,
  payload: products,
});

const getProducts = () => async (dispatch) => {
  const response = await fetch('/products');
  const products = await response.json();

  dispatch(productsSet(products));
};

const addProduct = newProduct => async (dispatch, getState) => {
  const response = await fetch('/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProduct),
  });
  const savedProduct = await response.json();

  const newProducts = [
    ...productsSelector(getState()),
    savedProduct,
  ];

  dispatch(productsSet(newProducts));
  dispatch(closeAddProductModal());
};

export {
  addProduct,
  getProducts,
};
