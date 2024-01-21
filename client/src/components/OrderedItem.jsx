import { PropTypes } from 'prop-types';

function OrderedItem({ orderedItem, currency }) {
  const imageSize = {
    width: '200px',
    height: '200px',
  };
  return (
    <div
      className="ordered-item p-4 m-3 text-center min-vw-14"
      style={{ border: '1px solid lightblue', borderRadius: '8px' }}
    >
      <img
        className="ordered-item-img m-2 rounded"
        src={orderedItem.image[0]}
        alt={orderedItem.herbName}
        style={imageSize}
      />
      <h4 className="ordered-item m-2">
        {orderedItem.herbName} | <small>{orderedItem.quantity}g</small>
      </h4>
      <p className="ordered-item-price m-2">
        Egységár: {orderedItem.price} {currency}/g
      </p>
      <p className="ordered-item-sum m-2">
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
