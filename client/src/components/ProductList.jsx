import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import uniqueKeyGenerator from '../helpers/uniqueKeyGenerator';

function ProductList({ stockList }) {
  return (
    <div className="product-list flex flex-wrap">
      {stockList.map((stockItem) => (
        <Card key={uniqueKeyGenerator()} stockItem={stockItem} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  stockList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      latin: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      packing: PropTypes.string.isRequired,
      unitPrice: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ProductList;
