import React from 'react';
import { PropTypes } from 'prop-types';

function OrderedItem({ orderedItem, currency }) {
  return (
    <div className="ordered-item">
      <img className="ordered-item-img" src={orderedItem.image[0]} alt={orderedItem.herbName} />
      <h4 className="ordered-item">
        {orderedItem.herbName} |{' '}
        <small>
          {orderedItem.quantity}
          gr
        </small>
      </h4>
      <p className="ordered-item-price">
        Egységár: {orderedItem.price} {currency}/gr
      </p>
      <p className="ordered-item-sum">
        Össz.: {orderedItem.price * orderedItem.quantity} {currency}
      </p>
    </div>
  );
}

OrderedItem.propTypes = {
  orderedItem: PropTypes.shape({
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    herbName: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  currency: PropTypes.string.isRequired,
};

export default OrderedItem;
