// import React, { useState, useEffect } from 'react';
import './ProductList.css';
import PropTypes from 'prop-types';
import Card from './Card';

// Fetch API sample for loading the products

/*
const ProductList = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  fetchData();
}, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};
*/

function ProductList({ stockList }) {
  return (
    <div className="product-list">
      {stockList.map((stockItem) => (
        <Card key={stockItem.id} stockItem={stockItem} />
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
