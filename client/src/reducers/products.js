const PRODUCTS_SET = 'PRODUCTS_SET';

const defaultState = [];

const productsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_SET:
      return payload;
    default:
      return state;
  }
};

export {
  PRODUCTS_SET,
};

export default productsReducer;
