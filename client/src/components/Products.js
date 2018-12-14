import React from 'react';

const Products = ({ products }) => (
  <div>
    {products.map(product => <pre key={product.$loki}>{JSON.stringify(product, null, 2)}</pre>)}
  </div>
);

Products.defaultProps = {
  products: [],
};

export default Products;
