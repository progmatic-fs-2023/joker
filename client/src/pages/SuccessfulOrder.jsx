import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useCart } from '../hooks/useCart';
import OrderedItem from '../components/OrderedItem';
import uniqueKeyGenerator from '../helpers/uniqueKeyGenerator';
import { API_URL } from '../constants';

function SuccessfulOrder() {
  const { orderId, clearCart } = useCart();
  const [orderDetails, setOrderDetails] = useState(null);
  useEffect(() => {
    clearCart(); // Clear Cart here
  }, []);
  // Get order details here
  useEffect(() => {
    if (!orderId) {
      return;
    }

    async function fetchOrderDetails() {
      const response = await fetch(`${API_URL}/orders/${orderId}`);
      if (!response.ok) {
        throw new Error(`Network response was not ok, status: ${response.status}`);
      }
      const data = await response.json();
      setOrderDetails(data);
    }

    fetchOrderDetails();
  }, [orderId]);

  const totalPrice = orderDetails
    ? orderDetails.quantity.reduce(
        (total, item) => total + item.quantity * item.targetHerb.price,
        0,
      )
    : 0;

  if (!orderDetails) {
    return (
      <div>
        <h2>A rendelés véglegesítése sikertelen! 🤷‍♂️</h2>
        <p>
          Próbáld meg újra vagy vedd fel velünk a kapcsolatot az{' '}
          <a href="mailto:ugyfelszolgalat@herbalism.hu">ugyfelszolgalat@herbalism.hu</a> email
          címen.
          <br /> Örömmel segítünk! 😊
        </p>
      </div>
    );
  }

  return (
    <div className="order-summarized mx-auto w-75">
      <h2 className="modifiedTextColor">Rendelés azonosító: {orderDetails.id}</h2>
      <ul className="mx-auto d-flex flex-wrap justify-content-center modifiedTextColor gap-4">
        {orderDetails.quantity.map((item, index) => (
          <OrderedItem
            key={uniqueKeyGenerator(index)}
            orderedItem={{
              image: item.targetHerb.image,
              herbName: item.targetHerb.herbName,
              quantity: item.quantity,
              price: item.targetHerb.price,
            }}
            currency="Ft"
          />
        ))}
      </ul>
      <h3 className="modifiedTextColor">Összesen fizetendő: {totalPrice} Ft</h3>
    </div>
  );
}

SuccessfulOrder.propTypes = {
  orderList: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    packing: PropTypes.string,
    unitPrice: PropTypes.number,
    map: PropTypes.func,
    length: PropTypes.func,
  }),
};
SuccessfulOrder.defaultProps = {
  orderList: undefined,
};

export default SuccessfulOrder;
