import React, { useState } from 'react';
import PropTypes from 'prop-types';
import QuantitySelector from './QuantitySelector';
import { useCart } from '../hooks/useCart';

function Card({ stockItem }) {
  const { addToCart: addToCartContext } = useCart();
  const { name, unitPrice, packing } = stockItem;
  const [qty, setQuantity] = useState(0);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const addToCart = () => {
    addToCartContext({ ...stockItem, quantity: qty });
    setQuantity(0);
  };

  return (
    <div className="card h-[555px] border-1 border-solid border-gray-300 rounded-md overflow-hidden m-16 w-80 bg-blue-300 flex-col justify-between shadow-md">
      <div>
        <img src={stockItem.image} alt={name} className="w-full h-48 object-cover " />
      </div>
      <div className="text-center p-1">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">{stockItem.latin}</p>
        <p className="text-green-600 mb-1">
          Készleten: {stockItem.quantity} {packing}
        </p>
        <p className="text-lg font-bold mb-1">{unitPrice} Ft</p>
        <QuantitySelector onQuantityChange={handleQuantityChange} initialQuantity={qty} />
        <p className="text-gray-600 mb-1">{packing}</p>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-blue-700"
          onClick={addToCart}
        >
          Kosárba
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  stockItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    latin: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    packing: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
