import React, { useState } from 'react';
import './Card.css';
import { PropTypes } from 'prop-types';
import QuantitySelector from './QuantitySelector';

function Card({ stockItem, addToCart }) {
  const { id, image, name, latin, quantity, packing, unitPrice } = stockItem;

  const [qty, setQuantity] = useState(0);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <h3>{latin}</h3>
        <p className="in-stock">{`Készleten: ${quantity} ${packing}`}</p>
        <p className="card-price">{`${unitPrice} Ft`}</p>
        <QuantitySelector onQuantityChange={handleQuantityChange} />
        <p>{packing}</p>
        <button type="button" className="card-button" onClick={() => addToCart(id, qty)}>
          Kosárba
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  stockItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    latin: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    packing: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Card;
