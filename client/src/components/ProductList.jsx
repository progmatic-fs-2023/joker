// import React, { useState, useEffect } from 'react';
import './ProductList.css';
import Card from './Card';

// const ProductList = () => {
// const [products, setProducts] = useState([]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   fetchData();
// }, []);

//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <Card key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

const ProductList = ({ stockList }) => {
  return (
    <div className="product-list">
      {stockList.map((stockItem, index) => (
        <Card key={index} stockItem={stockItem} />
      ))}
    </div>
  );
};

export default ProductList;
