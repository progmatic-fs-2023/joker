import PropTypes from 'prop-types';
import OrderAccordion from '../secure/OrderAccordion';

function Order({
  allOrders,
  fetchOrders,
  deleteMe,
  modifyMe,
  modifiedOrder,
  modifyOrder,
  setModifiedOrder,
}) {
  return (
    allOrders && (
      <OrderAccordion
        setModifiedOrder={setModifiedOrder}
        modifiedOrder={modifiedOrder}
        allOrders={allOrders}
        deleteMe={deleteMe}
        modifyMe={modifyMe}
        fetchOrders={fetchOrders}
        modifyOrder={modifyOrder}
      />
    )
  );
}

Order.propTypes = {
  allOrders: PropTypes.arrayOf({
    createdAt: PropTypes.string,
    customerNote: PropTypes.string,
    id: PropTypes.string,
    quantity: PropTypes.arrayOf({
      herbID: PropTypes.string,
      orderID: PropTypes.string,
      quantity: PropTypes.number,
    }),
    status: PropTypes.string,
    updatedAt: PropTypes.string,
    userID: PropTypes.string,
    map: PropTypes.func,
    length: PropTypes.func,
  }),
  deleteMe: PropTypes.func,
  modifyMe: PropTypes.func,
  modifyOrder: PropTypes.func,
  setModifiedOrder: PropTypes.func,
  fetchOrders: PropTypes.func,
  modifiedOrder: PropTypes.func,
};

Order.defaultProps = {
  allOrders: undefined,
  deleteMe: PropTypes.func,
  modifyMe: PropTypes.func,
  modifyOrder: PropTypes.func,
  setModifiedOrder: PropTypes.func,
  fetchOrders: PropTypes.func,
  modifiedOrder: PropTypes.func,
};

export default Order;
