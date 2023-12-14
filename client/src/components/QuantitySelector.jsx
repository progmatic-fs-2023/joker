import React, { useState } from 'react';

const QuantitySelector = ({ onQuantityChange }) => {
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
      <button onClick={decreaseQuantity}>-</button>
      <input
        className="quantity-input"
        type="text"
        value={qty}
        onFocus={handleInputFocus}
        onChange={handleInputChange}
      />
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
};

export default QuantitySelector;
