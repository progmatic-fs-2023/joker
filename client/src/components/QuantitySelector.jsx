import React, { useState } from 'react';
import PropTypes from 'prop-types';

function QuantitySelector({ onQuantityChange }) {
  const [qty, setQuantity] = useState(0);

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
    <div className="quantity-selector">
      <button type="button" onClick={decreaseQuantity}>
        -
      </button>
      <input
        className="quantity-input"
        type="text"
        value={qty}
        onFocus={handleInputFocus}
        onChange={handleInputChange}
      />
      <button type="button" onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
}

QuantitySelector.propTypes = {
  onQuantityChange: PropTypes.func.isRequired,
};

export default QuantitySelector;
