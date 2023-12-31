import React, { useState } from 'react';
import PropTypes from 'prop-types';
import QuantitySelector from './QuantitySelector';
import { useCart } from '../hooks/useCart';

function Card({ stockItem }) {
  const { addToCart: addToCartContext } = useCart();
  const { herbName, price, packing, image, species } = stockItem;
  const [qty, setQuantity] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addToCart = () => {
    addToCartContext({ ...stockItem, quantity: qty });
    setQuantity(0);
    closeModal();
  };

  return (
    <div className="card h-[580px] border-1 border-solid border-gray-300 rounded-md overflow-hidden m-16 w-80 bg-blue-300 flex-col justify-between shadow-md ">
      <div>
        <img src={image[0]} alt={herbName} className="w-full h-48 object-cover " />
      </div>
      <div className="text-center p-1">
        <h2 className="text-xl font-semibold mb-1">{herbName}</h2>
        <p className="text-gray-600 mb-1">{species}</p>
        <p>
          <button
            type="button"
            className="bg-blue-500 mb-2 text-white px-3 py-1 rounded-md cursor-pointer mt-2 transition duration-300 ease-in-out hover:bg-blue-700"
            onClick={() => setIsModalOpen(true)}
          >
            Részletek
          </button>
        </p>
        <p className="text-green-600 mb-1">
          Készleten: {stockItem.stockQuantity} {packing}
        </p>
        <p className="text-lg font-bold mb-1">{price} Ft</p>
        <QuantitySelector onQuantityChange={handleQuantityChange} initialQuantity={qty} />
        <button
          type="button"
          onClick={addToCart}
          className="bg-green-500 mb-2 text-white px-4 py-2 rounded-md cursor-pointer mt-2 transition duration-300 ease-in-out hover:bg-green-700"
        >
          Kosárba
        </button>
        <p className="text-gray-600 mb-1">{packing}</p>
      </div>

      {isModalOpen && (
        <div className="modal-overlay max-h-80 fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="modal-content w-[75%] bg-white p-4 rounded-md text-center relative z-50">
            <button
              type="button"
              onClick={closeModal}
              className="modal-close-button absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer transition duration-300 ease-in-out"
            >
              X
            </button>
            <div className="flex justify-center mb-4">
              <img
                src={image[0]}
                alt={herbName}
                className="w-64 h-64 object-cover mb-4 rounded-md"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4">{herbName}</h2>
            <p className="text-gray-600 mb-4">{species}</p>
            <p className="text-green-600 mb-1">
              Készleten: {stockItem.stockQuantity} gr
            </p>
            <p className="text-lg font-bold mb-1">{price} Ft</p>
            <p className="text-gray-600 mb-4">gr</p>
            <p className="text-sky-400 overflow-y-auto break-word">{stockItem.details}</p>
            <QuantitySelector
              onQuantityChange={handleQuantityChange}
              initialQuantity={qty}
              className="mt-4"
            />
            <div className="flex justify-center mt-4">
              <button
                type="button"
                onClick={addToCart}
                className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer transition duration-300 ease-in-out hover:bg-green-700"
              >
                Kosárba
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  stockItem: PropTypes.shape({
    herbName: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    stockQuantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
