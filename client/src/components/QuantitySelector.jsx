import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function QuantitySelector({ onQuantityChange, initialQuantity }) {
  const [qty, setQuantity] = useState(initialQuantity || 0);

  useEffect(() => {
    // If the starting state changes, update the counter
    setQuantity(initialQuantity || 0);
  }, [initialQuantity]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const newQuantity = inputValue === '' ? 0 : parseInt(inputValue, 10);
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const increaseQuantity = () => {
    setQuantity(qty + 1);
    onQuantityChange(qty + 1);
  };

  const decreaseQuantity = () => {
    if (qty > 0) {
      setQuantity(qty - 1);
      onQuantityChange(qty - 1);
    }
  };

  const handleInputFocus = (e) => {
    e.target.select();
  };

  return (
    <div className="quantity-selector flex justify-center items-center m-10">
      <button
        type="button"
        className="bg-blue-500 text-white border-none p-2 cursor-pointer rounded-md mr-2 transition duration-300 ease-in-out hover:bg-blue-700 text-sm"
        onClick={decreaseQuantity}
      >
        -
      </button>
      <input
        className="w-12 text-center border border-gray-300 rounded-md p-2"
        type="text"
        value={qty}
        onFocus={handleInputFocus}
        onChange={handleInputChange}
      />
      <button
        type="button"
        className="bg-blue-500 text-white border-none p-2 cursor-pointer rounded-md ml-2 transition duration-300 ease-in-out hover:bg-blue-700 text-sm"
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
}

QuantitySelector.propTypes = {
  onQuantityChange: PropTypes.func.isRequired,
  initialQuantity: PropTypes.number,
};

// Add defaultProps for initialQuantity
QuantitySelector.defaultProps = {
  initialQuantity: 0,
};

export default QuantitySelector;
