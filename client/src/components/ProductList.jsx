import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import uniqueKeyGenerator from '../helpers/uniqueKeyGenerator';

function ProductList({ stockList }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

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
  ),
};
ProductList.defaultProps = {
  stockList: [],
};

export default ProductList;
