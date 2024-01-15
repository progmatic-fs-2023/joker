import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    <div className="quantity-selector p-2 d-flex align-items-center">
      <Button className="m-1" variant="outline-info" type="button" onClick={decreaseQuantity}>
        -
      </Button>
      <Form.Control
        className="m-1 rounded text-center"
        type="text"
        value={qty}
        onFocus={handleInputFocus}
        onChange={handleInputChange}
        style={{ width: '50px' }}
      />
      <Button className="m-1" variant="outline-info" type="button" onClick={increaseQuantity}>
        +
      </Button>
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
