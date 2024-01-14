import { PropTypes } from 'prop-types';

function OrderedItem({ orderedItem, currency }) {
  return (
    <div className="ordered-item d-flex p-1 m-3 justify-content-center align-items-center flex-wrap" style={{border: '1px solid lightblue', borderRadius: '8px'}}>
      <img className="ordered-item-img w-25 m-2" src={orderedItem.image[0]} alt={orderedItem.herbName} />
      <h4 className="ordered-item m-2">
        {orderedItem.herbName} |{' '}
        <small>
          {orderedItem.quantity}
          g
        </small>
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
